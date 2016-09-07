Q1) What are the commandd to start after a server reboot?

- on prod server
  To create the RAM disk
   > mount -t tmpfs -o size=4G,mode=0755 tmpfs code

  To copy the code from hdd to ram disk:
  > cp -rf code-on-hdd code

  To start the containers:
   > cd /gt/savantcare.com/code/runenv-config/emr/
   > docker-compose -f docker-compose.core.yml -f docker-compose.ui-update.yml -f docker-compose.batch.yml -f docker-compose.prod.additional.yml up -d

  For chat to work:
  > cd /gt/savantcare.com/code/runenv-config/chat/
  > docker-compose up -d mongo
  > docker-compose up -d server
  > docker-compose up -d hubot_adapter_socketio
  Wait for 10 mins and once you are able to login to chat http://www.savantcare.com:3000/
  To start the hubot adapter of rocketchat:
  > docker-compose up -d hubot_adapter_rocketchat
  
  For automated phone call reminders to work: 
  > cd daemon-call-plivo-api/
  > docker-compose up -d

  For the mobile app to work:
  > cd phone-api/
  > docker-compose up -d

  For Scan to EMR to work:
  > cd fserver/ftp
  > more readme.txt
  > docker run -d --name ftpd_server -p 21:21 -p 30000-30009:30000-30009 -e "PUBLICHOST=localhost" stilliard/pure-ftpd:hardened
  > docker exec -it ftpd_server /bin/bash

  For the manual to work:
   > ln -sf /gt/savantcare.com/sc-issues.wiki/manual/_book/ /gt/savantcare.com/code/runenvs/webForInternalUsers/book
   > cd /gt/savantcare.com/code/runenv-config/manual # this will do gitpull and gitbook build everytime on git commit
   > docker-compose up -d   

  For JS and CSS mification called through .drone.yml to work:
   > cd /gt/savantcare.com/code/runenv-config/gulp
   > docker-compose up -d
   > go inside the docker container and give the command gulp to make sure gulp is running.
   > if not give the command:
   > npm install gulp -g
   
  For phpmyadmin to work:
   Follow steps in Q10.



- On drone (test) server
  >docker-compose -f docker-compose.core.yml -f docker-compose.ui-update.yml -f docker-compose.batch.yml -f docker-compose.drone.additional.yml up -d
  
  If nginx is restarted or the first time nginx may start before the socket_io has started and hence
  The following optional-locations need to be restarted for nginx to load their configuration"
  >docker restart emr_nodejs_socketio_for_publish_1   -> /dev/shm/nginx.socketio.conf
  >docker restart scbrain_api_intermediary_1          -> /dev/shm/nginx.scbrain-api-intermediary.conf
  >docker restart chat_hubot_adapter_socketio_1       -> On restart it will create /dev/shm/nginx.hubot-socketio.conf
  >docker restart oauth_serverside_1                  -> /dev/shm/nginx.oauth.conf
  >docker restart muninserver_from_sc_nginx_1         -> /dev/shm/nginx.muninserver.conf
  >docker restart jira_from_sc_nginx_1                -> /dev/shm/nginx.jira.conf
  >docker restart phoneapi_server_1                   -> /dev/shm/nginx.phone-api.conf  



- On dev server
  >docker-compose -f docker-compose.core.yml -f docker-compose.dev.additional.yml up -d   # for nginx / php and mysql
  >docker-compose -f docker-compose.ui-update.yml up -d                                   # for nodejs and redis
  >docker-compose -f docker-compose.batch.yml up -d                                       # for cron / daemon / events /pandoc
  
- On backup server to check if data is ok
  >docker-compose -f docker-compose.core.yml -f docker-compose.backup.additional.yml up -d


Q2) How to check if socketid is working?
For prod: https://www.savantcare.com/internal/test/
For drone: https://drone.savantcare.com/internal/test/

Q3) Why broken down into 3 smaller files?
1. During development there is no need to run docker-compose.batch.yml that contains daemon and cron
2. This allows to effect of starting the daemon and cron on the load average.
3. In scenario:
   Trying to find the incrased load average of daemon and cron there is no need to run docker-compose.ui-update.yml

Q4) How to build only the core?
docker-compose -f docker-compose.core.yml build


Q5) How to stop only the core?
docker-compose -f docker-compose.core.yml stop


Q6) Why do we need docker-compose.prod.additional.yml?
We need to expose mysql port to the mail server only on production server.


Q7) How to build a single container?
>docker-compose -f docker-compose.core.yml build php7docker


Q8) How to open backup site in browser?
https://sc1.duckdns.org:444/
Here I am specifying port 444 since docker-compose-backup-additional tells to docker that port 444 externally is redirected to nginx container port 443.


Q9) Why is phpMyAdmin docker configuration kept as a submodule?
Advantages:
1. By using the official docker configuration of phpmyadmin we get the improvements that are made from time to time by the open source community.

In production environment we stop the phpmyadmin container once our work with it is over.


Q10) Why is phpmyadmin a seperate docker container and not part of nginx and php container?
phpmyadmin on prod is only needed during testing. Hence we do not want to run it in prod all the time. This reduces the attack surface.

Q) How to build and run phpmyadmin?

Step 1:
------
root@12.ps.cd:/gt/savantcare.com/code/runenv-config/emr> git submodule init phpmyadmin/
Submodule 'code/runenv-config/emr/phpmyadmin' (https://github.com/phpmyadmin/docker) registered for path 'phpmyadmin'

Step 2:
------
root@12.ps.cd:/gt/savantcare.com/code/runenv-config/emr> git submodule update phpmyadmin/
Cloning into 'code/runenv-config/emr/phpmyadmin'...
remote: Counting objects: 268, done.
remote: Total 268 (delta 0), reused 0 (delta 0), pack-reused 268
Receiving objects: 100% (268/268), 46.97 KiB | 0 bytes/s, done.
Resolving deltas: 100% (137/137), done.
Checking connectivity... done.
Submodule path 'phpmyadmin': checked out '8eb6c0357293ef4de7f160373f0146853fe769df'

Step 3:
------
> docker-compose -f docker-compose.core.yml -f docker-compose.dev.additional.yml build phpmyadmin   # for build

Step 4:
------
> docker-compose -f docker-compose.core.yml -f docker-compose.dev.additional.yml up -d phpmyadmin   # for running

Step 5:
------
In browser: http://ipaddress:83/  # to access

Step 6:
------
> docker-compose -f docker-compose.core.yml -f docker-compose.dev.additional.yml stop phpmyadmin   # for stopping

Q) How to start nginx and mysql docker?
> docker-compose -f docker-compose.core.yml -f docker-compose.dev.additional.yml up -d nginxdocker
> docker-compose -f docker-compose.core.yml -f docker-compose.dev.additional.yml up -d mysqldocker

Q) How to confirm that other servers like mail server and voip server are able to connect to the emr_mysql server?
From the command line give the command:
>mysql -h 10.53.35.12 -u root -p
>docker ps # this will show the ports that have been forwarded.

Q) How to start the google calendar docker?
>docker-compose -f docker-compose.batch.yml up -d googlecalendar

Q) How to start only the gulp container?
root@13.ps.cd:/gt/savantcare.com/code/runenv-config/emr> docker-compose -f docker-compose.batch.yml up -d gulp

