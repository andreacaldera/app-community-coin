#!/bin/bash
echo
echo
echo =========================== USAGE ===========================
echo
echo bin/build-static.sh [--start-server]
echo
echo =============================================================
echo
echo

yarn start &
yarn build

 _pwd=$(pwd)

if [[ $_pwd == *app-community-coin ]] ;
then
  rm -fr static
  mkdir -p static/community-coin
  cp -a dist static/community-coin
  cp -a images static/community-coin
  curl http://localhost:3002/ -o static/index.html
  ls static
  if [[ $1 == --start-server ]] ;
  then
    http-server static -p 8082
  fi
else
  echo Run this script from the project root
fi
