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
RUN apt-get -y install wget lsb-release
RUN wget http://repo.mysql.com/mysql-apt-config_0.8.0-1_all.deb && dpkg -i mysql-apt-config_0.8.0-1_all.deb
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server


EXPOSE 3306/tcp


# copying the config file
COPY etc-mysql-my.cnf /etc/mysql/my.cnf
# Done by VK on 18th dec 2015 since otherwise the mysqld deamon ignores this file
RUN chmod 444 /etc/mysql/my.cnf
COPY etc-supervisor-conf.d-services.conf /etc/supervisor/conf.d/services.conf

# if the initial mysql db does not exist on the host server than it needs to be created using:
# mysql_install_db --user=mysql 
# Why? This docker container uses the volume statement inside docker-compose.yml to load the mysql data directory from the host server.
# Ref: https://github.com/sameersbn/docker-mysql look at entrypoint.sh
RUN chmod -R 777 /var/lib/mysql

# if its a new DB than permission needs to be given for a user to log in from a different ip
# mysql> CREATE USER 'monty'@'%' IDENTIFIED BY 'some_pass';
# mysql> GRANT ALL PRIVILEGES ON *.* TO 'monty'@'%' WITH GRANT OPTION;
# now from the webserver give the command:
# mysql -u monty -h 172.17.0.2 -p
# instead of 172.17.0.2  you should give dbdocker since in docker-compose "dbdocker" has been linked.
# ref: http://dev.mysql.com/doc/refman/5.7/en/adding-users.html

# install the monitoring client
RUN apt-get -y install munin-node

# To see the network interfaces on which mysql is listening >netstat -tlpn

# give correct permissions to the data directory
# we cannot use the RUN command to set the permission since the RUN command is run when the image is made. This folder is not available when the image is made. This folder becomes available when the container is created from the image using the docker-compose
# RUN chown -R mysql:mysql /gt/savantcare.com/mysqldata/live/
# ref: http://stackoverflow.com/questions/31706416/permissions-issue-with-docker-volumes

CMD ["/usr/bin/supervisord", "-n","-c","/etc/supervisor/supervisord.conf"]