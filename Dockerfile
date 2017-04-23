FROM node:6-onbuild
MAINTAINER andrea.caldera@gmail.com

# Prepare ubuntu
ENV DEBIAN_FRONTEND noninteractive
ARG CACHEBUST_MONTHLY=1
RUN apt-get update
RUN apt-get install -y curl git man
RUN ln -sf /bin/bash /bin/sh

# Install supervisord
RUN apt-get install -y supervisor
RUN mkdir -p /var/log/supervisor
CMD /usr/bin/supervisord -n -c /etc/supervisor/supervisord.conf

# Configure standard environment
WORKDIR /root/app

COPY ./docker/supervisor.conf /etc/supervisor/conf.d/

COPY package.json /root/app/package.json
RUN yarn

COPY ./ /root/app/

RUN yarn build

EXPOSE 3001
