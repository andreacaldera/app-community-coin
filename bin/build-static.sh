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

PORT=3003 node src/server/index.js &
_node_server_pid=$!
echo $_node_server_pid
yarn build

 _pwd=$(pwd)

if [[ $_pwd == *app-community-coin ]] ;
then
  rm -fr static
  mkdir -p static/communitycoin
  cp dist/* static/communitycoin
  cp -a images static/communitycoin
  curl http://localhost:3003/ -o static/index.html
  ls static
  kill $_node_server_pid
  if [[ $1 == --start-server ]] ;
  then
    http-server static -p 8082
  fi
else
  echo Run this script from the project root
fi
