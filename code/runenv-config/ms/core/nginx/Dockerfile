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
RUN apt-get install -y nginx

# Most users will enter www.savantcare.com in their browser so we need to respod to port 80. Once we respond to port 80 we will redirect to port 85.
EXPOSE 80 443

# remove the default nginx config file otherwise it will display welcome to nginx meesage when someone goes to www.savantcare.com
RUN rm -rf /etc/nginx/sites-available/default  
