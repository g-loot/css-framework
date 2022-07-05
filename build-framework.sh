#!/bin/bash
set -e

rm -rf framework/assets framework/tailwind.config.js
cp -r assets/styles framework
cp tailwind.config.js framework