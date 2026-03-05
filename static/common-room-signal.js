(function () {
    if (typeof window === 'undefined') return;
    if (typeof window.signals !== 'undefined') return;
  
    var script = document.createElement('script');
    script.src =
      'https://cdn.cr-relay.com/v1/site/e75e3581-02c2-4663-aa43-e1f315bd9d40/signals.js';
    script.async = true;
  
    window.signals = Object.assign(
      [],
      { _opts: { apiHost: 'https://api.cr-relay.com' } },
      ['page', 'identify', 'form'].reduce(function (acc, method) {
        acc[method] = function () {
          signals.push([method, arguments]);
          return signals;
        };
        return acc;
      }, {})
    );
  
    document.head.appendChild(script);
  })();