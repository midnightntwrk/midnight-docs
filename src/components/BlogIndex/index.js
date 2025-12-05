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

import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Typewriter } from 'react-simple-typewriter';

// Import the enhanced JSON with full metadata
import blogPostsData from '@generated/docusaurus-plugin-content-blog/default/blog-posts-full-metadata.json';

export default function BlogIndex() {
  const posts = blogPostsData?.items || [];

  console.log('=== BLOG POSTS WITH FULL METADATA ===');
  console.log('Number of posts:', posts.length);
  if (posts.length > 0) {
    console.log('First post metadata:', posts[0]);
    console.log('First post image:', posts[0].image);
    console.log('First post tags:', posts[0].tags);
    console.log('First post authors:', posts[0].authors);
  }

  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags?.map((t) => t.label) || []))
  );
  
  const allAuthors = Array.from(
    new Set(posts.map((post) => post.authors?.[0]?.name).filter(Boolean))
  );

  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');

  const getPostImage = (post) => {
    const image = post.image || post.frontMatter?.image;
    if (!image) return null;
    
    // Handle different image path formats
    if (image.startsWith('http') || image.startsWith('//')) {
      return image;
    }
    
    return image.startsWith('/') ? image : `/${image}`;
  };

  const getPostDate = (post) => {
    if (!post.date) return 'Date unavailable';
    
    try {
      return new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Invalid date';
    }
  };

  const filteredPosts = useMemo(() => {
    if (!posts.length) return [];
    
    return posts
      .filter((post) => {
        const tagMatch =
          selectedTags.length === 0 ||
          selectedTags.every((t) => post.tags?.some(tag => tag.label === t));
        
        const authorMatch =
          !selectedAuthor || post.authors?.some(author => author.name === selectedAuthor);
        
        return tagMatch && authorMatch;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date || 0);
        const dateB = new Date(b.date || 0);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      });
  }, [posts, selectedTags, selectedAuthor, sortOrder]);

  // Latest post should always be the actual latest, unaffected by filters
  const latestPost = useMemo(() => {
    if (!posts.length) return null;
    return posts.sort((a, b) => {
      const dateA = new Date(a.date || 0);
      const dateB = new Date(b.date || 0);
      return dateB - dateA; // Always newest first
    })[0];
  }, [posts]);

  const PostCard = ({ post, isLatest = false }) => {
    const imageUrl = getPostImage(post);
    const finalImageUrl = imageUrl ? useBaseUrl(imageUrl) : null;
    
    const handleTagClick = (tagLabel) => {
      if (!selectedTags.includes(tagLabel)) {
        setSelectedTags([...selectedTags, tagLabel]);
      }
    };
    
    if (isLatest) {
      return (
        <article className="card shadow--md margin-bottom--lg" 
                 style={{ 
                   width: '100%',
                   overflow: 'hidden'
                 }}>
          <div className="row" style={{ margin: 0 }}>
            <div className="col col--4" style={{ padding: 0, position: 'relative' }}>
              {finalImageUrl ? (
                <img
                  src={finalImageUrl}
                  alt={post.title}
                  style={{ 
                    width: '100%', 
                    height: '300px',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    console.error('Image failed to load:', finalImageUrl);
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `
                      <div style="
                        width: 100%;
                        height: 300px;
                        background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #666;
                        font-size: 1rem;
                      ">
                        <div style="text-align: center;">
                          <div style="font-size: 3rem; margin-bottom: 0.5rem;">📝</div>
                          <div>Blog Post</div>
                        </div>
                      </div>
                    `;
                  }}
                />
              ) : (
                <div style={{ 
                  width: '100%',
                  height: '300px',
                  background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666',
                  fontSize: '1rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>📝</div>
                    <div>Blog Post</div>
                    <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7 }}>
                      No image in frontmatter
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col col--8">
              <div className="padding--lg" style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'visible' }}>
                <div>
                  <time style={{ 
                    color: '#888', 
                    fontSize: '0.875rem', 
                    marginBottom: '0.5rem',
                    display: 'block'
                  }}>
                    {getPostDate(post)}
                  </time>
                  
                  <h3 style={{ marginBottom: '1rem', fontSize: '1.75rem', fontWeight: '700' }}>
                    <Link 
                      to={post.permalink}
                      style={{ 
                        textDecoration: 'none',
                        color: 'var(--ifm-heading-color)'
                      }}
                    >
                      {post.title}
                    </Link>
                  </h3>
                  
                  {post.description && (
                    <p style={{ 
                      marginBottom: '1rem', 
                      color: '#888',
                      fontSize: '1rem',
                      lineHeight: '1.6'
                    }}>
                      {post.description}
                    </p>
                  )}
                </div>
                
                <div className="latest-post-tags">
                  {post.tags?.map((tag, index) => (
                    <span 
                      key={index} 
                      className="tag"
                      onClick={() => handleTagClick(tag.label)}
                      style={{
                        fontSize: '0.8rem',
                        padding: '0.3rem 0.6rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        backgroundColor: selectedTags.includes(tag.label) ? '#2563eb' : '#fff',
                        color: selectedTags.includes(tag.label) ? 'white' : '#000',
                        borderRadius: '8px',
                        display: 'inline-block',
                        border: '1px solid #ddd'
                      }}
                      onMouseOver={(e) => {
                        if (!selectedTags.includes(tag.label)) {
                          e.target.style.backgroundColor = '#e0e7ff';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!selectedTags.includes(tag.label)) {
                          e.target.style.backgroundColor = '#fff';
                        }
                      }}
                    >
                      {tag.label}
                    </span>
                  ))}
                  {post.authors?.length > 0 && (
                    <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#888' }}>
                      By {post.authors.map(author => author.name).join(', ')}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </article>
      );
    }
    
    return (
      <article className="card shadow--md" 
               style={{ 
                 height: '100%', 
                 display: 'flex', 
                 flexDirection: 'column',
                 overflow: 'hidden'
               }}>
        <div style={{ position: 'relative', paddingBottom: '200px', overflow: 'hidden' }}>
          {finalImageUrl ? (
            <img
              src={finalImageUrl}
              alt={post.title}
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%', 
                height: '200px',
                objectFit: 'cover',
                borderRadius: '8px 8px 0 0'
              }}
              onError={(e) => {
                console.error('Image failed to load:', finalImageUrl);
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = `
                  <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 200px;
                    background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #666;
                    font-size: 1rem;
                    border-radius: 8px 8px 0 0;
                  ">
                    <div style="text-align: center;">
                      <div style="font-size: 2rem; margin-bottom: 0.5rem;">📝</div>
                      <div>Blog Post</div>
                    </div>
                  </div>
                `;
              }}
            />
          ) : (
            <div style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '200px',
              background: 'linear-gradient(135deg, #f0f0f0, #e0e0e0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#666',
              fontSize: '1rem',
              borderRadius: '8px 8px 0 0'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</div>
                <div>Blog Post</div>
                <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', opacity: 0.7 }}>
                  No image
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="padding--lg" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <time style={{ 
            color: '#888', 
            fontSize: '0.875rem', 
            marginBottom: '0.5rem',
            display: 'block'
          }}>
            {getPostDate(post)}
          </time>
          
          <h3 style={{ marginBottom: '1rem', flex: 1 }}>
            <Link 
              to={post.permalink}
              style={{ 
                textDecoration: 'none',
                color: 'var(--ifm-heading-color)',
                fontSize: '1.25rem',
                fontWeight: '600'
              }}
            >
              {post.title}
            </Link>
          </h3>
          
          {post.description && (
            <p style={{ 
              marginBottom: '1rem', 
              color: '#888',
              fontSize: '0.95rem',
              lineHeight: '1.5'
            }}>
              {post.description}
            </p>
          )}
          
          <div style={{ marginTop: 'auto' }}>
            {post.tags?.map((tag, index) => (
              <span 
                key={index} 
                className="badge badge--secondary margin-right--sm margin-bottom--sm"
                onClick={() => handleTagClick(tag.label)}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: selectedTags.includes(tag.label) ? '#2563eb' : undefined,
                  color: selectedTags.includes(tag.label) ? 'white' : undefined
                }}
                onMouseOver={(e) => {
                  if (!selectedTags.includes(tag.label)) {
                    e.target.style.backgroundColor = '#e0e7ff';
                  }
                }}
                onMouseOut={(e) => {
                  if (!selectedTags.includes(tag.label)) {
                    e.target.style.backgroundColor = '';
                  }
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  };

  if (!posts.length) {
    return (
      <Layout title="Dev Diaries" description="Latest developer insights from Midnight">
        <main className="container margin-vert--lg">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>No Blog Posts Found</h1>
            <p style={{ color: '#888' }}>Please check your blog configuration and ensure you have blog posts in your blog folder.</p>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout title="Dev Diaries" description="Latest developer insights from Midnight">
      <main className="container margin-vert--lg">
        <section style={{
          padding: '3rem 1rem',
          background: 'linear-gradient(135deg, #2563eb, #000)',
          color: 'white',
          textAlign: 'center',
          marginBottom: '2rem',
          borderRadius: '12px',
          position: 'relative',
          overflow: 'hidden',
          animation: 'fadeInUp 1s ease-out'
        }}>
          {/* Animated Background Elements */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            animation: 'shimmer 3s infinite linear',
            pointerEvents: 'none'
          }} />
          
          {/* Floating Code Elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            fontSize: '1rem',
            opacity: 0.3,
            animation: 'float 6s ease-in-out infinite',
            fontFamily: 'monospace'
          }}>
            {'{ }'}
          </div>
          <div style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            fontSize: '1.2rem',
            opacity: 0.2,
            animation: 'float 4s ease-in-out infinite reverse',
            fontFamily: 'monospace'
          }}>
            {'< />'}
          </div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '20%',
            fontSize: '0.9rem',
            opacity: 0.25,
            animation: 'float 5s ease-in-out infinite',
            fontFamily: 'monospace'
          }}>
            {'console.log()'}
          </div>

          {/* Main Content */}
          <div style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            color: 'white',
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
            fontFamily: '"Courier New", Courier, monospace',
            position: 'relative',
            zIndex: 2,
            animation: 'glow 2s ease-in-out infinite alternate'
          }}>
            <Typewriter
              words={['Welcome to Dev Diaries', 'Explore our latest updates', 'Learn with Midnight']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </div>

          {/* CSS Animations */}
          <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes shimmer {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }

            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            @keyframes glow {
              from {
                text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
              }
              to {
                text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(37, 99, 235, 0.5);
              }
            }

            @keyframes pulse {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
            }
          `}</style>
        </section>

        <section className="margin-bottom--xl">
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '700' }}>
            Latest Post
          </h2>
          {latestPost && (
            <div style={{ width: '100%' }}>
              <PostCard post={latestPost} isLatest={true} />
            </div>
          )}
        </section>

        <section className="margin-bottom--lg">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', margin: 0 }}>
              Filters
            </h2>
            <button
              onClick={() => {
                setSelectedTags([]);
                setSelectedAuthor('');
                setSortOrder('desc');
              }}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
            >
              Reset Filters
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
            <div style={{ flex: '0 0 32%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Tags: {selectedTags.length > 0 && <span style={{ color: '#2563eb', fontSize: '0.875rem' }}>({selectedTags.length} selected)</span>}
              </label>
              <select
                multiple
                value={selectedTags}
                onChange={(e) =>
                  setSelectedTags(Array.from(e.target.selectedOptions, (o) => o.value))
                }
                style={{ 
                  height: '60px', 
                  width: '100%',
                  padding: '0.25rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '0.875rem',
                  overflowY: 'auto'
                }}>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
              <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>
                Hold Ctrl/Cmd to select multiple
              </div>
            </div>
            
            <div style={{ flex: '1' }}></div>
            
            <div style={{ flex: '0 0 18%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Author:
              </label>
              <select
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '0.875rem'
                }}>
                <option value="">All Authors</option>
                {allAuthors.map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
              </select>
            </div>
            
            <div style={{ flex: '0 0 16%' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                Sort by:
              </label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  fontSize: '0.875rem'
                }}>
                <option value="desc">Newest First</option>
                <option value="asc">Oldest First</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedTags.length > 0 || selectedAuthor) && (
            <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#666' }}>Active filters:</span>
              
              {selectedTags.map((tag) => (
                <span 
                  key={tag}
                  style={{
                    background: '#2563eb',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  {tag}
                  <button
                    onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      padding: 0,
                      fontSize: '0.875rem'
                    }}
                  >
                    ×
                  </button>
                </span>
              ))}
              
              {selectedAuthor && (
                <span 
                  style={{
                    background: '#059669',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}
                >
                  Author: {selectedAuthor}
                  <button
                    onClick={() => setSelectedAuthor('')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      padding: 0,
                      fontSize: '0.875rem'
                    }}
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </section>

        <section className="margin-bottom--xl">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: '700' }}>
            All Posts
          </h2>
          <div className="row">
            {filteredPosts.filter(post => post.permalink !== latestPost?.permalink).map((post) => (
              <div key={post.permalink} className="col col--4 margin-bottom--lg">
                <PostCard post={post} />
              </div>
            ))}
          </div>
          {filteredPosts.filter(post => post.permalink !== latestPost?.permalink).length === 0 && (
            <p style={{ textAlign: 'center', color: '#888', fontSize: '1.125rem' }}>
              No additional posts found.
            </p>
          )}
        </section>
      </main>
    </Layout>
  );
}