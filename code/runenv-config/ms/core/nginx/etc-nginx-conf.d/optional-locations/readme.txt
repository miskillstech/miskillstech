to enable a optional location:

Step1: copy it to /dev/shm/nginx.x.conf
for e.g.
cp /etc/nginx/conf.d/optional-locations/chat.conf /dev/shm/nginx.chat.conf

Step 2: nginx -s reload
