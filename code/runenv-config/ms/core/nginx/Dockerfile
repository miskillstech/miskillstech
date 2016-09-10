##### Section 1: Common across all grmtech docker containers. #####
# Q) Why do we keep the following common across all grmtech docker containers?
#  Due to UFS on any physical server the download of ubuntu image/upgrading it and installating telnet ping ifconfig and supervisor will happen only once.
# Q) Why do we use a single RUN statement instead of 4 different?
#  To reduce the numner of aufs layers. Instead of 4 this will create 1 layer. Advantages of reducing 3 aufs layers:
#  1. Faster build
#  2. Easier to debug since the number of layers is less it is easier to understand what is happening.
FROM ubuntu:16.04
RUN apt-get update && \
 apt-get -y upgrade && \
 apt-get install -y telnet inetutils-ping net-tools --no-install-recommends && \
 DEBIAN_FRONTEND=noninteractive apt-get install -y supervisor --no-install-recommends 

# Q) Why am I exporting the environment variable TERM=screen?
#  1. clear gives the error message TERM environment variable not set.
#  2. ls command will not show dirs in a different color.
ENV TERM screen

##### Section 2: Container specific packages #####

# Installing nginx since the main nginx should be simple and just act as a router to send to this nginx.
# Why?
# 1. So that during testing we can directly access this nginx to make sure it is working.
# 2. The main nginx is getting complicated.
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nginx
# deleting this since it will be made using docker-compose 
RUN rm /etc/nginx/sites-enabled/default 


RUN DEBIAN_FRONTEND=noninteractive apt-get install -y php7.0-fpm php7.0-mysql php7.0-mcrypt php7.0-mbstring php7.0-imap
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y php-zip # this is required by laravel
RUN phpenmod mcrypt

# add config files
COPY code/runenv-config/ms/core/nginx/etc-nginx-conf.d/etc-php-7.0-fpm-pool.d-www.conf /etc/php/7.0/fpm/pool.d/www.conf
COPY code/runenv-config/ms/core/override.php.ini /etc/php/7.0/fpm/conf.d/
COPY code/runenv-config/ms/core/nginx/etc-supervisor-conf.d-services.conf /etc/supervisor/conf.d/services.conf

# Without next command i get the error message nable to create the PID file (/run/php/php7.0-fpm.pid).: No such file or directory
RUN mkdir /run/php

EXPOSE 80

CMD ["/usr/bin/supervisord", "-n","-c","/etc/supervisor/supervisord.conf"]