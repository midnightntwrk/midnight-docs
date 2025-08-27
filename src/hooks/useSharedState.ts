// This file is part of midnight-docs.
// Copyright (C) 2025 Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { useContext, createContext, useState, useCallback } from "react";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

type Listener<T> = (v: T) => void;
type Setter<T> = (v: T) => void;
type Getter<T> = () => T;

/**
 * Simple "store" factory with
 * - `get(K): V`
 * - `set(K, V): void`
 * - `listen(K, cb(V):void): unsub()`
 */
function createStore<T extends any = any>() {
  const state = new Map<string, T>();
  const allListeners = new Map<string, Set<Listener<T>>>();
  const emit = (key: string, value: T) => {
    const listeners = allListeners.get(key);
    if (listeners) {
      for (const fn of listeners) {
        try {
          fn(value);
        } catch (err: unknown) {
          console.error(`Error calling listener key:${key}`, {
            key,
            value,
            err
          });
        }
      }
    }
  };
  return {
    set(key: string, value: T) {
      state.set(key, value);
      emit(key, value);
    },
    get(key: string, initialValue?: T | (() => T)) {
      if (typeof initialValue !== "undefined" && !state.has(key)) {
        const v =
          initialValue instanceof Function ? initialValue() : initialValue;

        state.set(key, v);
      }
      return state.get(key);
    },
    listen(key: string, listener: Listener<T>) {
      if (!allListeners.has(key)) {
        allListeners.set(key, new Set<Listener<T>>());
      }
      const listeners = allListeners.get(key)!;
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
        // If all of the listeners are gone delete the state
        if (listeners.size === 0) {
          state.delete(key);
        }
      };
    }
  };
}

type Store = ReturnType<typeof createStore>;

type SharedStateContextType = {
  v?: Store;
};
const SharedStateContext = createContext<SharedStateContextType>({
  v: undefined
});

const useStore = (): Store => {
  const ctx = useContext(SharedStateContext);
  // Lazy set the context value this allows use without a provider
  return ctx.v || (ctx.v = createStore());
};

type UseSharedState<T> = [
  /**
   * The current value in shared state
   */
  T,
  /**
   * A stable setState function
   */
  Setter<T>,
  /**
   * A stable getState function, reads
   * value directly from store, helpful
   * when refs would normally be used
   */
  Getter<T>
];

export const useSharedState = <T extends any = any>(
  key: string,
  initialValue: T | (() => T)
): UseSharedState<T> => {
  const store = useStore();
  const [localState, localListener] = useState<T>(() => {
    return store.get(key, initialValue) as T;
  });
  const setState = useCallback(
    (value: T) => {
      store.set(key, value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getState = useCallback(() => store.get(key) as T, [key]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useIsomorphicLayoutEffect(
    // as any required until `useSyncExternalStore` refactor
    () => store.listen(key, localListener as any),
    [key]
  );
  return [localState, setState, getState];
};
