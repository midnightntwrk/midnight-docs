

import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

declare global {
  interface Navigator {
    brave?: {
      isBrave: () => Promise<boolean>;
    };
  }
}

const STORAGE_KEY = 'midnight-docs-brave-warning-dismissed';

export default function BraveShieldsWarning() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only run in browser environment.
    if (!ExecutionEnvironment.canUseDOM) return;

    const checkBrave = async () => {
      // Only show on /academy routes
      if (!location.pathname.startsWith('/academy')) {
        setIsVisible(false);
        return;
      }

      // Check if it's Brave browser
      if (typeof navigator !== 'undefined' && navigator.brave !== undefined && (await navigator.brave.isBrave())) {
        // Check if user has already dismissed the warning
        const isDismissed = typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true';
        if (!isDismissed) {
          setIsVisible(true);
        }
      }
    };

    checkBrave();
  }, [location.pathname]);

  const handleDismiss = () => {
    if (ExecutionEnvironment.canUseDOM && typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, 'true');
    }
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200, // Higher than docusaurus navbar/footer
        padding: '1rem',
      }}
    >
      <div className="container">
        <div className="alert alert--warning margin-bottom--none shadow--md" role="alert" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg viewBox="0 0 24 24" style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem', flexShrink: 0 }} fill="currentColor">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <strong>Brave Browser Detected</strong>
            </div>
             <div style={{ marginTop: '0.25rem' }}>
                Brave Shields may interfere with embedded quizzes. If you experience issues, please consider disabling Shields for this site.
             </div>
          </div>
          <button
            onClick={handleDismiss}
            className="button button--secondary button--sm"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
