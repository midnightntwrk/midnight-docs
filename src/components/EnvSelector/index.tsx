import React from 'react';
import {useLocation, useHistory} from '@docusaurus/router';
import styles from './styles.module.css';

const STORAGE_KEY = 'midnight-docs-env';

type EnvId = 'testnet-02'; // Will add other envs when live

const ENVIRONMENTS: { id: EnvId; label: string; prefix: string }[] = [
  { id: 'testnet-02', label: 'Testnet-02', prefix: '/docs' },
];

function getEnvFromPath(pathname: string): EnvId {
  const match = ENVIRONMENTS.find(env => pathname.startsWith(env.prefix));
  return (match ?? ENVIRONMENTS[0]).id;
}

export default function EnvSelector() {
  const location = useLocation();
  const history = useHistory();

  const currentEnvId = getEnvFromPath(location.pathname);
  const currentEnv = ENVIRONMENTS.find(e => e.id === currentEnvId)!;

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextEnvId = event.target.value as EnvId;
    const nextEnv = ENVIRONMENTS.find(e => e.id === nextEnvId);
    if (!nextEnv) return;

    const docPath = location.pathname.slice(currentEnv.prefix.length);
    const nextPath = `${nextEnv.prefix}${docPath}${location.search}${location.hash}`;

    window.localStorage.setItem(STORAGE_KEY, nextEnvId);
    history.push(nextPath);
  }

  return (
    <div className={styles.container}>
      {/* 👉 Just "Environment", no colon, no extra text */}
      <label htmlFor="env-selector" className={styles.label}>
        Environment
      </label>

      <select
        id="env-selector"
        value={currentEnvId}
        onChange={handleChange}
        className={styles.select}
      >
        {ENVIRONMENTS.map(env => (
          <option key={env.id} value={env.id}>
            {env.label}
          </option>
        ))}
      </select>
    </div>
  );
}