##### Section 1: Common across all grmtech docker containers. #####
# Q) Why do we keep the following common across all grmtech docker containers?
#  Due to UFS on any physical server the download of ubuntu image/upgrading it and installating telnet ping ifconfig and supervisor will happen only once.
# Q) Why do we use a single RUN statement instead of 4 different?
#  To reduce the number of aufs layers. Instead of 4 this will create 1 layer. Advantages of reducing 3 aufs layers:
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

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y php7.0-fpm php7.0-mysql php7.0-mcrypt php7.0-mbstring php7.0-imap php7.0-zip
RUN phpenmod mcrypt

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y php-xdebug
RUN rm -rf /etc/php/7.0/fpm/conf.d/20-xdebug.ini  # Why? the xdebug.ini will only be mouned from docker-compose for dev environment

# Install php curl to be able to send sms messages
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y php-curl

# Without next command i get the error message unable to create the PID file (/run/php/php7.0-fpm.pid).: No such file or directory
RUN mkdir /run/php

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('SHA384', 'composer-setup.php') === 'e115a8dc7871f15d853148a7fbac7da27d6c0030b848d9b3dc09e2a0388afed865e6a3d6b3c0fad45c48e2b5fc1196ae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php --install-dir=bin --filename=composer
RUN php -r "unlink('composer-setup.php');"

# this is needed by composer to install vendor packages inside laravel
RUN apt install -y php7.0-xml

# git is needed by composer to install packages
RUN apt install -y git 

CMD ["/usr/bin/supervisord", "-n","-c","/etc/supervisor/supervisord.conf"]

