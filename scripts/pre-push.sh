#!/bin/sh
echo "Checking pnpm lockfile consistency..."
pnpm install --frozen-lockfile --ignore-scripts 2>&1
if [ $? -ne 0 ]; then
  echo ""
  echo "Error: pnpm lockfile is out of sync with package.json."
  echo "Run 'pnpm install' and commit the updated lockfile before pushing."
  exit 1
fi
echo "Lockfile OK."
