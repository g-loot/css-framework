#!/bin/bash
set -e

rm -rf dist
mkdir dist
cp -r assets/styles dist
cp -r assets/fonts dist
cp tailwind.config.js dist
cp framework/README.md dist
cp framework/package-framework.json dist/package.json