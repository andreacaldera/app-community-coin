#!/bin/bash

yarn start &
yarn build

 _pwd=$(pwd)

if [[ $_pwd == *app-community-coin ]] ;
then
  rm -fr static
  mkdir static
  cp -a dist static/
  cp -a images static/
  curl http://localhost:3002/ -o static/index.html
  ls static
  if [[ $1 == --start-server ]] ;
  then
    http-server static
  fi
else
  echo Run this script from the project root
fi
