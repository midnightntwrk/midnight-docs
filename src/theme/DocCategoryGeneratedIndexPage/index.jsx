import React, {useMemo, useState} from 'react';
import Original from '@theme-original/DocCategoryGeneratedIndexPage';
import {useLocation} from '@docusaurus/router';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import styles from './howto.module.css';


function useDocsByPermalink() {
  const all = useAllDocsData(); // { default: {...}, develop: {...}, ... }
  const firstKey = Object.keys(all || {})[0];
  const version = all?.[firstKey]?.versions?.[0];

  const by = new Map();
  version?.docs?.forEach((d) => {
    if (d?.metadata?.permalink) by.set(d.metadata.permalink, d);
  });
  return by;
}

export default function DocCategoryGeneratedIndexPage(props) {
  const {items = [], metadata} = props;
  const {pathname} = useLocation();

  const isHowTo =
    metadata?.permalink === '/develop/how-to' ||
    pathname === '/develop/how-to' ||
    pathname.endsWith('/develop/how-to/');

  // Non How-To categories → render default page
  if (!isHowTo) return <Original {...props} />;

  const byPermalink = useDocsByPermalink();

  // --- Build cards safely ---
  const cards = useMemo(() => {
    if (!Array.isArray(items)) return [];
    return items
      .map((it) => {
        const permalinkKey = it.permalink ?? it.docId ?? it.id;
        const doc = byPermalink.get(permalinkKey);
        if (!doc?.metadata) return null;
        const m = doc.metadata;
        return {
          title: m.title,
          description: m.description,
          permalink: m.permalink,
          image: m.frontMatter?.image,
          tags: Array.isArray(m.frontMatter?.tags)
            ? m.frontMatter.tags
            : [],
        };
      })
      .filter(Boolean);
  }, [items, byPermalink]);

  // --- Collect tags for filter ---
  const allTags = useMemo(() => {
    const set = new Set();
    cards.forEach((c) => c.tags?.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [cards]);

  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const filtered = useMemo(() => {
    let list = cards.slice();
    if (selectedTags.length)
      list = list.filter((c) => selectedTags.every((t) => c.tags?.includes(t)));
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          (c.description?.toLowerCase().includes(q) ?? false)
      );
    }
    list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [cards, selectedTags, query]);

  const reset = () => {
    setSelectedTags([]);
    setQuery('');
  };

  // --- Render ---
  return (
    <div className={styles.wrap}>
      <div className={styles.filters}>
        <h2>Filters</h2>
        <label className={styles.label}>Search:</label>
        <input
          className={styles.input}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles and descriptions"
          aria-label="Search How-To guides"
        />

        <label className={styles.label}>Tags:</label>
        <select
          multiple
          className={styles.multi}
          value={selectedTags}
          onChange={(e) => {
            const opts = Array.from(e.target.selectedOptions).map((o) => o.value);
            setSelectedTags(opts);
          }}
        >
          {allTags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <div className={styles.help}>Hold Ctrl/Cmd to select multiple</div>
        <button className={styles.reset} onClick={reset}>
          Reset Filters
        </button>
      </div>

      <div className={styles.main}>
        <h1 className={styles.h1}>All How-To Guides (A–Z)</h1>
        <div className={styles.grid}>
          {filtered.map((card) => (
            <article key={card.permalink} className={styles.card}>
              <div className={styles.media}>
                {card.image ? (
                  <img src={card.image} alt="" />
                ) : (
                  <div className={styles.placeholder} />
                )}
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>
                  <Link to={card.permalink}>{card.title}</Link>
                </h3>
                {card.description && (
                  <p className={styles.desc}>{card.description}</p>
                )}
              </div>
            </article>
          ))}
          {!filtered.length && (
            <p className={styles.empty}>No matches. Try clearing filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}
