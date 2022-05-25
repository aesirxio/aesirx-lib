#!/usr/bin/env bash
source .env

microbundle-crl --no-compress

ROOT_DIR=$(pwd)
DIST_DIR="$ROOT_DIR/dist"

rm -rf "$APP_DIR/node_modules/aesirxio-web-service-library/dist";
cp -R $DIST_DIR "$APP_DIR/node_modules/aesirxio-web-service-library/dist";