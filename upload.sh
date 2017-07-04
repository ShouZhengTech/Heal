#! /bin/sh
rsync -avp --exclude .git --exclude tmp  . deployer@119.29.178.236:~/heal/
