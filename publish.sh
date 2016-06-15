#!/bin/bash

jekyll build
rsync -rvu --delete _site/* didon:/var/www/domain-driven-design.eu
