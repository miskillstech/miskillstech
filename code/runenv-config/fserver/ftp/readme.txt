We are using: https://github.com/stilliard/docker-pure-ftpd

We need this so that scanner can scan the documents directly to the ftp server.

What are the commands to start it?
1. docker pull stilliard/pure-ftpd:hardened
2. docker run -d --name ftpd_server -p 21:21 -p 30000-30009:30000-30009 -e "PUBLICHOST=localhost" stilliard/pure-ftpd:hardened
3. docker exec -it ftpd_server /bin/bash
4. pure-pw useradd scantoemr -u ftpuser -d /home/ftpusers/scantoemr
Password: jaikalima
Enter it again: jaikalima
5. root@eb56d58d04e2:/# pure-pw mkdb
6. In the browser enter ftp://www.savantcare.com login: scantoemr password: jaikalima
