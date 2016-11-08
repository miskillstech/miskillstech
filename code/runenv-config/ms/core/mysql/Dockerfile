FROM ubuntu:16.04

RUN ln -s /bin/true /sbin/initctl
RUN echo "deb http://archive.ubuntu.com/ubuntu precise main universe" > /etc/apt/sources.list
RUN apt-get update && \
 apt-get -y upgrade && \
 apt-get install -y telnet inetutils-ping net-tools --no-install-recommends && \
 DEBIAN_FRONTEND=noninteractive apt-get install -y supervisor --no-install-recommends 
ENV TERM screen
RUN apt-get -y install wget lsb-release
RUN wget http://repo.mysql.com/mysql-apt-config_0.8.0-1_all.deb && dpkg -i mysql-apt-config_0.8.0-1_all.deb
RUN apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y mysql-server
EXPOSE 3306/tcp
COPY etc-mysql-my.cnf /etc/mysql/my.cnf
RUN chmod 444 /etc/mysql/my.cnf
COPY etc-supervisor-conf.d-services.conf /etc/supervisor/conf.d/services.conf
RUN chmod -R 777 /var/lib/mysql
RUN apt-get -y install munin-node
CMD ["/usr/bin/supervisord", "-n","-c","/etc/supervisor/supervisord.conf"]