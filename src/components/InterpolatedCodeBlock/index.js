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

import React, { useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

/**
 * InterpolatedCodeBlock - Interactive code block with editable variables
 * 
 * Creates a code block that allows users to customize variable values.
 * Variables are defined directly in the code using [[VAR:NAME:default]] syntax.
 * 
 * Features:
 * - Automatically detects variables in the code
 * - Generates input fields for each variable
 * - Populates input fields with default values
 * - Updates the code in real-time as users type
 * - Works with any language syntax highlighting
 * 
 * Usage Example:
 * ```jsx
 * <InterpolatedCodeBlock
 *   code={`# Create a Kubernetes namespace
 * kubectl create namespace [[VAR:NAMESPACE:my-namespace]]
 * 
 * # Set up Helm with custom values
 * helm install my-app ./chart --set region=[[VAR:REGION:us-west-1]]`}
 *   language="bash"
 * />
 * ```
 * 
 * @param {string} code - The code block content with variables in [[VAR:NAME:default]] format
 * @param {string} language - Language for syntax highlighting (default: "bash")
 */
const InterpolatedCodeBlock = ({ code = '', language = 'bash' }) => {
  // Parse variables using [[VAR:name:default]] pattern
  const varPattern = /\[\[VAR:([^:]+):([^\]]*)\]\]/g;
  
  // Extract all variables from the code
  const initialVariables = {};
  let match;
  
  // Create a copy of the pattern to avoid state issues with regex
  const patternForMatching = new RegExp(varPattern);
  
  if (typeof code === 'string') {
    // Find all variables in the code
    while ((match = patternForMatching.exec(code)) !== null) {
      initialVariables[match[1]] = match[2];
    }
  }

  const [values, setValues] = useState(initialVariables);

  // Replace placeholders with values for rendering
  const processedCode = typeof code === 'string' 
    ? code.replace(varPattern, (_, name) => {
        return values[name] || initialVariables[name] || '';
      })
    : code;

  // Skip rendering the interactive UI if no variables found
  if (Object.keys(initialVariables).length === 0) {
    return <CodeBlock language={language}>{code}</CodeBlock>;
  }

  // Simple wrapper with light grey background
  return (
    <div className="interpolated-code-wrapper" style={{ 
      marginBottom: 'var(--ifm-leading)',
      border: '1px solid var(--ifm-color-emphasis-300)',
      borderRadius: 'var(--ifm-code-border-radius)',
      backgroundColor: 'rgba(0, 0, 0, 0.02)',
      padding: '1rem'
    }}>
      {/* Variable Input Container */}
      <div className="interpolated-code-inputs" style={{
        marginBottom: '1rem'
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: 'var(--ifm-color-emphasis-600)',
          marginBottom: '8px',
          fontStyle: 'italic'
        }}>
          Modify the following with your specific values to generate a copyable command:
        </div>
        {Object.entries(initialVariables).map(([key, defaultValue]) => (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.5rem',
              fontFamily: 'var(--ifm-font-family-monospace)',
            }}
          >
            <label
              style={{ 
                minWidth: '150px',
                color: 'var(--ifm-font-color-base)', /* Regular text color */
                fontSize: '0.9rem',
                fontWeight: '600', /* Semi-bold for emphasis */
                marginRight: '10px'
              }}
            >
              {key}
            </label>
            <input
              type="text"
              value={values[key] || ''}
              onChange={(e) => setValues(prev => ({ ...prev, [key]: e.target.value }))}
              placeholder={defaultValue}
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: 'var(--ifm-global-radius)',
                padding: '0.3rem 0.5rem',
                color: 'var(--ifm-font-color-base)',
                fontFamily: 'var(--ifm-font-family-monospace)',
                fontSize: '0.9rem',
                width: '100%',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--ifm-color-primary)';
                e.target.style.boxShadow = '0 0 0 1px var(--ifm-color-primary)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--ifm-color-emphasis-300)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Code Block Container */}
      <div>
        <CodeBlock language={language}>
          {processedCode}
        </CodeBlock>
      </div>
    </div>
  );
};

export default InterpolatedCodeBlock;