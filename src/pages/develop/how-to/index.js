// src/pages/develop/how-to/index.jsx
import React, {useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useAllDocsData} from '@docusaurus/plugin-content-docs/client';

/**
 * Collect every doc across all docs plugins, then filter to the
 * "develop/how-to" folder. Works regardless of plugin id or versioning.
 */
function useHowToCards() {
  const all = useAllDocsData() || {}; // {default:{versions:[...]}, <otherIds>:...}

  const allDocs = [];
  Object.values(all).forEach(({versions}) => {
    versions?.forEach(v => {
      v?.docs?.forEach(d => allDocs.push(d));
    });
  });

  // Accept either source path or permalink match (covers most setups)
  const isHowTo = (doc) => {
    const src = doc?.metadata?.source || '';
    const pl = doc?.metadata?.permalink || '';
    return src.includes('develop/how-to/') || pl.startsWith('/develop/how-to');
  };

  const cards = allDocs
    .filter(isHowTo)
    .map(doc => {
      const m = doc.metadata;
      // tags can be ["a","b"] or [{label:"a"}] depending on authoring; normalize to strings
      const fmTags = m.frontMatter?.tags ?? [];
      const tags = fmTags.map(t => (typeof t === 'string' ? t : t?.label)).filter(Boolean);
      return {
        title: m.title,
        description: m.description,
        permalink: m.permalink,
        image: m.frontMatter?.image,
        tags,
      };
    });

  return cards;
}

export default function HowToIndex() {
  const cards = useHowToCards();

  // Tag set
  const allTags = useMemo(() => {
    const set = new Set();
    cards.forEach(c => c.tags?.forEach(t => set.add(t)));
    return Array.from(set).sort((a,b) => a.localeCompare(b));
  }, [cards]);

  // Filters
  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const filtered = useMemo(() => {
    let list = cards.slice();

    if (selectedTags.length) {
      list = list.filter(c => selectedTags.every(t => c.tags?.includes(t)));
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(c =>
        c.title.toLowerCase().includes(q) ||
        (c.description?.toLowerCase().includes(q) ?? false),
      );
    }

    // A–Z by title
    list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }, [cards, selectedTags, query]);

  const reset = () => {
    setSelectedTags([]);
    setQuery('');
  };

  return (
    <Layout title="How-To" description="Guides for working with Midnight">
      <main className="container margin-vert--lg">
        <div className="row">
          {/* Filters */}
          <div className="col col--4">
            <h2 style={{marginTop: 0}}>Filters</h2>

            <label className="margin-bottom--xs">Search</label>
            <input
              type="search"
              className="clean-btn"
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: 8,
                border: '1px solid var(--ifm-color-emphasis-300)',
                background: 'var(--ifm-background-surface-color)',
                color: 'var(--ifm-font-color-base)',
                marginBottom: 16,
              }}
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              placeholder="Search titles and descriptions…"
              aria-label="Search How-To guides"
            />

            <label className="margin-bottom--xs">Tags</label>
            <select
              multiple
              value={selectedTags}
              onChange={(e)=>{
                const vals = Array.from(e.target.selectedOptions).map(o=>o.value);
                setSelectedTags(vals);
              }}
              style={{
                width: '100%',
                height: 200,
                padding: 8,
                borderRadius: 8,
                border: '1px solid var(--ifm-color-emphasis-300)',
                background: 'var(--ifm-background-surface-color)',
                color: 'var(--ifm-font-color-base)',
              }}
            >
              {allTags.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <div style={{opacity: 0.7, fontSize: 12, marginTop: 6}}>
              Hold Ctrl/Cmd to select multiple
            </div>

            <button
              className="button button--secondary"
              style={{marginTop: 16}}
              onClick={reset}
            >
              Reset Filters
            </button>
          </div>

          {/* Grid */}
          <div className="col col--8">
            <h1 style={{marginTop: 0}}>All How-To Guides (A–Z)</h1>

            {!filtered.length && (
              <p style={{opacity: 0.8}}>No matching guides.</p>
            )}

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: 20,
              }}
            >
              {filtered.map(card => (
                <article key={card.permalink}
                  className="card"
                  style={{display:'flex', flexDirection:'column', overflow:'hidden'}}
                >
                  <div style={{
                    height: 140,
                    background: 'var(--ifm-color-emphasis-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {card.image ? (
                      <img src={card.image} alt="" style={{maxWidth:'100%', maxHeight:'100%', objectFit:'cover'}}/>
                    ) : (
                      <div style={{opacity:0.4}}>No image</div>
                    )}
                  </div>
                  <div className="card__body" style={{flex:1}}>
                    <h3 style={{marginBottom: 8}}>
                      <Link to={card.permalink}>{card.title}</Link>
                    </h3>
                    {card.description && (
                      <p style={{opacity:0.8}}>{card.description}</p>
                    )}
                  </div>
                  {card.tags?.length > 0 && (
                    <div className="card__footer" style={{gap:6, display:'flex', flexWrap:'wrap'}}>
                      {card.tags.map(t => (
                        <span key={t} className="badge badge--secondary">{t}</span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
