const fs = require('fs');
const path = require('path');
const {SourceMapConsumer} = require('source-map');

// EDIT these to the filenames/positions from your console:
const targets = [
  { map: 'build/assets/main.9b11bc67.js.map', line: 2, column: 1751233 },
  { map: 'build/assets/main.9b11bc67.js.map', line: 2, column: 493585   },
  // add other frames if you want
];

(async () => {
  for (const t of targets) {
    const sm = JSON.parse(fs.readFileSync(path.resolve(t.map), 'utf8'));
    await SourceMapConsumer.with(sm, null, consumer => {
      const pos = consumer.originalPositionFor({ line: t.line, column: t.column });
      console.log(`${t.map} @ ${t.line}:${t.column} →`, pos);
    });
  }
})();
