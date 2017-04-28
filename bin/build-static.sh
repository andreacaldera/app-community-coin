#!/bin/bash

_output_folder=static
_pwd=$(pwd)

echo
echo
echo =========================== USAGE ===========================
echo
echo bin/build-static.sh [--start-server]
echo
echo Using output folder $_output_folder
echo
echo =============================================================
echo
echo

PORT=3003 node src/server/index.js &
_node_server_pid=$!
yarn build

if [[ $_pwd == *app-community-coin ]] ;
then
  rm -fr $_output_folder
  mkdir -p $_output_folder
  cp dist/* $_output_folder/
  cp -a images $_output_folder/
  curl http://localhost:3003/ -o $_output_folder/index.html
  ls static
  kill $_node_server_pid
  if [[ $1 == --start-server ]] ;
  then
    http-server $_output_folder -p 8082
  fi
else
  echo Run this script from the project root
fi
