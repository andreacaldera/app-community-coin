#!/bin/bash

_local_deployment_path=../community-coin.github.io
_output_folder=static
_pwd=$(pwd)

echo
echo
echo =========================== USAGE ===========================
echo
echo Deploying community coin to https://community-coin.github.io/
echo
echo  Using local path $_local_deployment_path and output folder $_output_folder
echo
echo =============================================================
echo
echo

if [[ $_pwd == *app-community-coin ]] ;
then
  cp -a $_output_folder/* $_local_deployment_path
  echo Static resources copied
  cd $_local_deployment_path
  echo Changing folder to $_local_deployment_path
  git add . && git commit -m 'automatic deployment' && git pull --rebase && git push
else
  echo Run this script from the project root
fi
