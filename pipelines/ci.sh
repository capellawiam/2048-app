#!/bin/bash

echo "CI pipeline"

set -e

cd "$(dirname "$0")/.."


pnpm install 
echo "Dependencies installed"

echo "Type checking"
pnpm vue-tsc --noEmit --project tsconfig.json

echo "Linting"
pnpm eslint "**/*.{vue,ts,js}"

echo "Tests unitaires"
pnpm vitest run


echo "Build package (Nuxt - Vite)"
pnpm nuxi build


