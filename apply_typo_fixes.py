"""
Apply a small set of high-confidence typo fixes to .md and .mdx files under docs/ and blog/.
Skips text inside triple-backtick code fences to avoid changing code samples.

Usage: python apply_typo_fixes.py
"""
from pathlib import Path
import re

ROOTS = ["docs", "blog"]
# mapping: lowercase search -> replacement (preserve case via function)
REPLACEMENTS = {
    'intializes': 'initializes',
    'enviroment': 'environment',
    'recieve': 'receive',
    'seperate': 'separate',
    'occured': 'occurred',
    'untill': 'until',
    'adress': 'address',
    'definately': 'definitely',
    'teh': 'the',
}


def replace_preserve_case(match, repl):
    s = match.group(0)
    if s.isupper():
        return repl.upper()
    if s[0].isupper():
        return repl.capitalize()
    return repl


changed_files = []
count = 0
for root in ROOTS:
    p = Path(root)
    if not p.exists():
        continue
    for fp in p.rglob("*.md*"):
        text = fp.read_text(encoding='utf-8')
        new_text = []
        in_code = False
        changed = False
        i = 0
        # Split by lines and process, but maintain code fence state across lines
        for line in text.splitlines(keepends=True):
            # toggle code fence state on lines that begin with ``` (possibly with language)
            if line.lstrip().startswith('```'):
                in_code = not in_code
                new_text.append(line)
                continue
            if in_code:
                new_text.append(line)
                continue
            # not in code: apply replacements using regex word boundaries, case-insensitive
            processed = line
            for wrong, right in REPLACEMENTS.items():
                # regex to match whole word case-insensitive
                pattern = re.compile(r"\\b(" + re.escape(wrong) + r")\\b", flags=re.IGNORECASE)
                processed = pattern.sub(lambda m: replace_preserve_case(m, right), processed)
            if processed != line:
                changed = True
            new_text.append(processed)
        out = ''.join(new_text)
        if changed and out != text:
            fp.write_text(out, encoding='utf-8')
            changed_files.append(str(fp))
            count += 1

print(f"Applied typo fixes to {count} files")
for f in changed_files[:200]:
    print(f"Fixed: {f}")
if count > 200:
    print(f"...and {count-200} more files")
