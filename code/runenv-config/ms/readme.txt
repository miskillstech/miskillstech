To start the containers:
   > cd /ms/miskillstech.com/code/runenv-config/ms/
   > docker-compose -f docker-compose.core.yml -f docker-compose.prod.additional.yml up -d


Q5) How to stop only the core?
docker-compose -f docker-compose.core.yml stop


Q6) Why do we need docker-compose.prod.additional.yml?
We need to expose mysql port to the mail server only on production server.


Q7) How to build a single container?
>docker-compose -f docker-compose.core.yml build php7docker



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

