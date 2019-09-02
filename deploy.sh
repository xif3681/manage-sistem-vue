#!/bin/bash

function selectBranch
{
  git checkout ${1:-master}
}

function build
{
  yarn build
}

function package
{
  zip -r dist.zip dist
  # zip -r html.zip dist
}

function deployTEST
{
  echo 'Deploy to TEST'

  # scp -P60022 ./dist.zip zhuxg@118.89.18.229:/opt/booking
  scp -P60022 ./dist.zip booking@193.112.245.108:/opt/booking/nginx/html

  # ssh -p60022 zhuxg@118.89.18.229 'cd /opt/booking && rm -rf dist && unzip dist.zip'
  ssh -p60022 booking@193.112.245.108 'cd /opt/booking/nginx/html && rm -rf dist && unzip dist.zip'

}

function deployUAT
{
  echo 'Deploy to UAT'

  scp -P60022 ./dist.zip booking@203.195.133.39:/usr/local/nginx/html

  ssh -p60022 booking@203.195.133.39 'cd /usr/local/nginx/html && rm -rf dist && unzip dist.zip'

}

function deploy
{
  case $1 in
    test) deployTEST
    ;;

    uat) deployUAT
    ;;
  esac
}

function cleanPackage
{
  rm dist.zip
}

function main
{
  selectBranch $1

  build

  package

  deploy $2

  cleanPackage

  # selectBranch master


}

main $1 $2
