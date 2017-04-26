#!/bin/bash

rm -fr static
mkdir static
cp -a dist static/
cp -a images static/
curl http://localhost:3001/ -o static/index.html
ls static
http-server static
