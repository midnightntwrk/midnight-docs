
#!/bin/bash

CMD="npx playwright test"

# If --update flag is present, add the --update-snapshots option
if [[ "$*" == *"--update"* ]]; then
  CMD="$CMD --update-snapshots"
  echo "Updating baseline screenshots..."
else
  echo "Running tests without updating screenshots..."
fi

exec $CMD