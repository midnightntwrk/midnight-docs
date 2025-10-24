"""
Aggressive pass: apply more sweeping replacements, including common British->American variants and more risky replacements.
This is intentionally aggressive — it will change words like 'behaviour'->'behavior', 'utilise'->'utilize', 'colour'->'color', etc.
Skips code fences but may still change prose style.

Use with care. Edits will remain in working tree; no commits done.
"""
from pathlib import Path
import re

ROOTS = ["docs", "blog"]
REPLACEMENTS = {
    # British -> American (style)
    'behaviour': 'behavior',
    'behaviours': 'behaviors',
    'behavioural': 'behavioral',
    'utilise': 'utilize',
    'utilises': 'utilizes',
    'utilised': 'utilized',
    'utilising': 'utilizing',
    'organisation': 'organization',
    'organisations': 'organizations',
    'optimise': 'optimize',
    'optimised': 'optimized',
    'optimising': 'optimizing',
    'colour': 'color',
    'colours': 'colors',
    'labour': 'labor',
    'catalogue': 'catalog',
    'catalogues': 'catalogs',
    'analyse': 'analyze',
    'analysed': 'analyzed',
    'analyses': 'analyses',
    'centre': 'center',
    'centres': 'centers',
    'metre': 'meter',
    'metres': 'meters',
    'licence': 'license',
    'licences': 'licenses',
    'theatre': 'theater',
    'programme': 'program',
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
        try:
            text = fp.read_text(encoding='utf-8')
        except Exception:
            continue
        new_lines = []
        in_code = False
        changed = False
        for line in text.splitlines(keepends=True):
            if line.lstrip().startswith('```'):
                in_code = not in_code
                new_lines.append(line)
                continue
            if in_code:
                new_lines.append(line)
                continue
            processed = line
            for wrong, right in REPLACEMENTS.items():
                pattern = re.compile(r"\\b(" + re.escape(wrong) + r")\\b", flags=re.IGNORECASE)
                processed = pattern.sub(lambda m: replace_preserve_case(m, right), processed)
            if processed != line:
                changed = True
            new_lines.append(processed)
        out = ''.join(new_lines)
        if changed and out != text:
            fp.write_text(out, encoding='utf-8')
            changed_files.append(str(fp))
            count += 1

print(f"Aggressive pass applied fixes to {count} files")
for f in changed_files[:200]:
    print(f"Fixed: {f}")
if count > 200:
    print(f"...and {count-200} more files")
