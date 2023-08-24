#!/bin/sh
docker run --rm --net host  -ti -v $XAUTHORITY:/dot.xauthority  -v /tmp/.X11-unix:/tmp/.X11-unix -e DISPLAY=${DISPLAY} --env-file My-Env  splunkbase-pw /bin/bash


# Upon entry in the container `xauth merge /dot.xauthority
# Probably should run as a specific user
