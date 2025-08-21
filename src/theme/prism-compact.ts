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
    /\b(?:Bytes|Boolean|Field|Opaque|Uint|Vector|Counter|Set|List|Map|MerkleTree|HistoricMerkleTree)\b/,
  keyword:
    /\b(?:as|assert|circuit|const|constructor|contract|default|disclose|else|enum|export|fold|for|if|import|include|ledger|map|module|of|pad|pragma|prefix|pure|return|sealed|struct|witness)\b/,
  function: /\b[a-z_]\w*(?=\s*(\[[a-zA-Z_0-9,\s]*\]\s*)?\()/i,
  number:
    /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  boolean: /\b(?:false|true)\b/i
};
