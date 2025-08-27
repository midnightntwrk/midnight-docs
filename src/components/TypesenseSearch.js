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

import React, { useState, useCallback } from 'react';

export default function TypesenseSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchDocs = useCallback(async (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://u7f18spo9kdwzy42p-1.a1.typesense.net/collections/midnight-docs/documents/search?q=${encodeURIComponent(searchQuery)}&query_by=title,content&limit=10`,
        {
          headers: {
            'x-typesense-api-key': 'iB2c4BLpQXVhvNz5MnkP6rO4FFgbClHF'
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Search failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Handle different response structures
      if (data.hits && Array.isArray(data.hits)) {
        setResults(data.hits);
        if (data.hits.length === 0) {
          setError('No results found. Try different keywords.');
        }
      } else if (data.found === 0) {
        setResults([]);
        setError('No results found. The search index might be empty.');
      } else {
        setResults([]);
        setError('Unexpected search response format.');
      }
    } catch (error) {
      console.error('Search error:', error);
      setError('Search is temporarily unavailable. Please try again later.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchDocs(value);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    // Delay hiding to allow clicks on results
    setTimeout(() => setIsOpen(false), 200);
  };

  const handleResultClick = (url) => {
    setIsOpen(false);
    setQuery('');
    window.location.href = url;
  };

  return (
    <div className="navbar__search" style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Search docs..."
        value={query}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          background: 'var(--ifm-color-emphasis-200)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '8px',
          padding: '8px 12px',
          color: 'var(--ifm-color-content)',
          fontSize: '14px',
          outline: 'none',
          width: '200px',
          transition: 'border-color 0.2s ease'
        }}
      />
      
      {isOpen && query.trim() && (isLoading || error || results.length > 0) && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'var(--ifm-background-color)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '8px',
          marginTop: '4px',
          maxHeight: '400px',
          overflowY: 'auto',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          {isLoading && (
            <div style={{ 
              padding: '12px', 
              color: 'var(--ifm-color-content-secondary)',
              textAlign: 'center'
            }}>
              Searching...
            </div>
          )}
          
          {error && !isLoading && (
            <div style={{ 
              padding: '12px', 
              color: 'var(--ifm-color-content-secondary)',
              fontSize: '13px'
            }}>
              {error}
            </div>
          )}
          
          {!isLoading && !error && results.length > 0 && (
            <>
              {results.map((hit, index) => (
                <div
                  key={index}
                  style={{
                    padding: '12px',
                    borderBottom: index < results.length - 1 ? '1px solid var(--ifm-color-emphasis-200)' : 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseDown={() => handleResultClick(hit.document.url)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--ifm-color-emphasis-100)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <div style={{ 
                    fontWeight: 'bold', 
                    marginBottom: '4px',
                    color: 'var(--ifm-color-content)'
                  }}>
                    {hit.document.title || 'Untitled'}
                  </div>
                  <div style={{ 
                    fontSize: '12px', 
                    color: 'var(--ifm-color-content-secondary)',
                    marginBottom: '4px'
                  }}>
                    {hit.document.url}
                  </div>
                  {hit.document.content && (
                    <div style={{ 
                      fontSize: '13px', 
                      color: 'var(--ifm-color-content-secondary)',
                      maxHeight: '40px',
                      overflow: 'hidden',
                      lineHeight: '1.3'
                    }}>
                      {hit.document.content.substring(0, 100)}...
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}