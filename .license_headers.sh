export LC_ALL=C


find . -type f -name '*.mdx' -print0 |
while IFS= read -r -d '' file; do
  # Skip files that already contain the marker
  if grep -q -- 'SPDX-License-Identifier' "$file"; then
    continue
  fi

  # Docusaurus MDX partial files should not contain front matter
  if ! grep -q -- '---' "$file"; then
    continue
  fi

  tmpfile="$(mktemp)"
  # Build new file: comment start, header, comment end, then original file
  {
    printf '%s\n' '---'
    printf "SPDX-License-Identifier: Apache-2.0\n"
    printf 'copyright: This file is part of midnight-docs. Copyright (C) 2025 Midnight Foundation. Licensed under the Apache License, Version 2.0 (the "License"); You may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'
    printf '\n'
    sed '1d' "$file"
  } > "$tmpfile"

  # Replace atomically
  mv -- "$tmpfile" "$file"
done

find . -type f \( -name "*.js" -o -name "*.ts" \) | while IFS= read -r file; do
    if ! grep -q "SPDX-License-Identifier" "$file"; then
        tmpfile=$(mktemp)
        sed 's/^/\/\/ /' .midnight.txt >> "$tmpfile"
        echo "" >> $tmpfile
        cat $file >> $tmpfile
        mv $tmpfile $file
    fi
done

find . -type f -name "*.sh" | while IFS= read -r file; do
    if ! grep -q "SPDX-License-Identifier" "$file"; then
        tmpfile=$(mktemp)
        echo "#!/usr/bin/env bash" >> $tmpfile
        echo "" >> $tmpfile
        sed 's/^/# /' .midnight.txt >> "$tmpfile"
        echo "" >> $tmpfile
        cat $file >> $tmpfile
        mv $tmpfile $file
        chmod +x $file
    fi
done
