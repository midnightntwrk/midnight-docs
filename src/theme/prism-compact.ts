// @ts-nocheck

Prism.languages.compact = {
  comment: {
    pattern: /\/\/(?:[^\r\n\\])*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  string: {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "class-name":
    /\b(?:Bytes|Boolean|Integer|Field|Opaque|Unsigned|Vector|Counter|Cell|Set|List|Map|MerkleTree|HistoricMerkleTree)\b/,
  keyword:
    /\b(?:as|assert|circuit|constructor|const|do|else|enum|fold|for|if|in|include|ledger|new|map|null|over|pad|pragma|prefix|return|struct|to|witness|import|module|export|pure)\b/,
  function: /\b[a-z_]\w*(?=\s*(\[[a-zA-Z_0-9,\s]*\]\s*)?\()/i,
  number:
    /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  boolean: /\b(?:false|true)\b/i
};
