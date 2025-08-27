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

import React from 'react';
// Import clsx library for conditional classes.
import clsx from 'clsx'; 
// Define the Columns component as a function 
// with children, className, and style as properties
// className will allow you to pass either your custom classes or the native infima classes https://infima.dev/docs/layout/grid.
// Style" will allow you to either pass your custom styles directly, which can be an alternative to the "styles.module.css" file in certain cases.
export default function Columns({ children , className , style }) {
  return (
    // This section encompasses the columns that we will integrate with children from a dedicated component to allow the addition of columns as needed 
    <div className="container center">
          <div className={clsx('row', className)} style={style}>
            {children}    
        </div>
    </div> 
  );
}