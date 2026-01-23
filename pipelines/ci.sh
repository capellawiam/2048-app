#!/bin/bash

echo "CI pipeline"

set -e
pnpm install --ignore-scripts
echo "Dependencies installed"
