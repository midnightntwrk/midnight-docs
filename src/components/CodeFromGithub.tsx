import React, { useEffect, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

interface Props {
  url: string;
  language: string;
}

function parseGithubUrl(url: string): {
  rawUrl: string;
  startLine?: number;
  endLine?: number;
} {
  const match = url.match(/#L(\d+)(?:-L(\d+))?$/);
  let startLine, endLine;

  if (match) {
    startLine = parseInt(match[1], 10);
    endLine = match[2] ? parseInt(match[2], 10) : startLine;
    url = url.split('#')[0]; // Remove #Lxx-Lyy
  }

  const rawUrl = url
    .replace('https://github.com/', 'https://raw.githubusercontent.com/')
    .replace('/blob/', '/');

  return { rawUrl, startLine, endLine };
}

export default function CodeFromGithub({ url, language }: Props) {
  const [code, setCode] = useState<string>('Loading...');

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const { rawUrl, startLine, endLine } = parseGithubUrl(url);
        const response = await fetch(rawUrl);
        const text = await response.text();

        const lines = text.split('\n');
        const snippet =
          startLine && endLine
            ? lines.slice(startLine - 1, endLine).join('\n')
            : text;

        setCode(snippet);
      } catch (err) {
        setCode(`// Error loading file from GitHub:\n// ${err}`);
      }
    };

    fetchCode();
  }, [url]);

  return <CodeBlock language={language}>{code}</CodeBlock>;
}
