module.exports = {
  ci: {
    collect: {
      startServerReadyPattern: "started server on",
      numberOfRuns: 1,
      settings: {
        extraHeaders: {
          "x-vercel-protection-bypass": "{{VERCEL_BYPASS_TOKEN}}"
        },
        preset: "desktop"
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};
