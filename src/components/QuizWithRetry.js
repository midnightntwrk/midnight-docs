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
import { useAuth0 } from '@auth0/auth0-react';

// Use the actual script endpoint, not a proxy
const LOGGING_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyNBKszSjg_2kJf7IulZVTpj7bPze3G8bT3csK4lcHycV6fwEYTM8ghAp9mRSFJ-KKj/exec';

const styles = {
  container: {
    margin: '40px 0',
    padding: '24px',
    border: '1px solid var(--ifm-color-emphasis-200)',
    borderRadius: '12px',
    backgroundColor: 'var(--ifm-background-color)',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    color: 'var(--ifm-font-color-base)',
  },
  title: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '32px',
  },
  question: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '16px',
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  },
  radio: {
    marginRight: '8px',
  },
  buttonWrapper: {
    paddingTop: '24px',
    paddingBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: 'var(--ifm-color-primary)',
    color: 'var(--ifm-button-color)',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  },
  retryButton: {
    padding: '8px 16px',
    backgroundColor: 'var(--ifm-color-emphasis-200)',
    color: 'var(--ifm-font-color-base)',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '16px',
  },
  correct: {
    color: 'var(--ifm-color-success)',
    fontWeight: '600',
    paddingTop: '16px',
  },
  incorrect: {
    color: 'var(--ifm-color-danger)',
    fontWeight: '600',
    paddingTop: '16px',
  },
};

const Question = ({ question, options, answer, onSubmit }) => {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selected === null) return;
    const correct = selected === answer;
    setIsCorrect(correct);
    setSubmitted(true);

    if (typeof onSubmit === 'function') {
      onSubmit(question, options[selected], correct);
    }
  };

  const handleRetry = () => {
    setSelected(null);
    setSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <div style={styles.container}>
      <p style={styles.question}>{question}</p>
      <form>
        {options.map((opt, index) => (
          <div key={index} style={styles.option}>
            <input
              type="radio"
              id={`${question}-${index}`}
              name={question}
              value={index}
              checked={selected === index}
              onChange={() => setSelected(index)}
              disabled={submitted}
              style={styles.radio}
            />
            <label htmlFor={`${question}-${index}`}>
              {String.fromCharCode(65 + index)}. {opt}
            </label>
          </div>
        ))}
      </form>

      {!submitted ? (
        <div style={styles.buttonWrapper}>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={selected === null}
            style={styles.button}
          >
            Check Answer
          </button>
        </div>
      ) : isCorrect ? (
        <p style={styles.correct}>
          ✅ Correct Answer: {String.fromCharCode(65 + answer)}.
        </p>
      ) : (
        <>
          <p style={styles.incorrect}>❌ Incorrect. Try again.</p>
          <button type="button" onClick={handleRetry} style={styles.retryButton}>
            Retry
          </button>
        </>
      )}
    </div>
  );
};

const QuizWithRetry = ({ questions, module = 'Unknown' }) => {
  const { user, isAuthenticated } = useAuth0();

  const logAttempt = async (question, selected, correct) => {
    if (!isAuthenticated || !user?.nickname) return;

    const payload = {
      nickname: user.nickname,
      module,
      question,
      selected,
      correct,
    };

    try {
      await fetch(LOGGING_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors', // key change
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('📋 Attempt logged (no-cors, no feedback)');
    } catch (err) {
      console.error('❌ Failed to log quiz data:', err);
    }
  };

  return (
    <div>
      {questions.map((q, i) => (
        <Question key={i} {...q} onSubmit={logAttempt} />
      ))}
    </div>
  );
};

export default QuizWithRetry;
