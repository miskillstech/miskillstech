**Q1) How to test modelphp app?**
1. git checkout https://gitlab.com/savantcare/sc-modelphp.git

2.  > docker-compose -f docker-compose.yml  -f docker-compose.dev.additional.yml up -d   -> in this case this app's nginx server will be exposed on port 80

3. Initialize the larvel vendor folder.
> docker exec -ti scmodelphp_php_1 bash
> cd /gt/sc-repos/sc-modelphp/server/var-www-html/v3/api/modelphp
> /gt/sc-repos/sc-modelphp/server/var-www-html/v3/api/modelphp# composer update --no-scripts 

4. give 777 to storage folder
> /gt/sc-repos/sc-modelphp/server/var-www-html/v3/api/modelphp# chmod -R 777 storage/

5. Once the above commands is issued then you can access:

http://127.0.0.1/ -> you will get the output jaikalima
http://127.0.0.1/v3/api/modelphp/public/  -> you will get "Welcome to laravel"


**Q2) How to create your own app from model app?**

1. Create a repo on gitlab called "sc-myapp"

2. copy sc-modelphp to sc-myapp make sure to copy folders and files seperately otherwise the .git folder will get copied.
> cp -rf ../sc-modelphp/README.md .
> cp -rf ../sc-modelphp/server .
> cp -rf ../sc-modelphp/client .
> cp -rf ../sc-modelphp/docker-compose.dev.additional.yml .
> cp -rf ../sc-modelphp/docker-compose.yml .
> cp -rf ../sc-modelphp/.gitignore .

Do a git and then commit.
Make sure sc-myapp has the code by logging into gitlab

3. emacs client/etc-nginx-sites-enabled-default : Replce scmodelphp_php_1 to scmyapp_php_1
   emacs docker-compose.yml: replace sc-modelphp with sc-myapp

4. Rename modelphp to myapp
/gt/sc-repos/sc-modelphp/server/var-www-html/v3/api/# git mv modelphp myapp

5. give 777 to storage folder
/gt/sc-repos/sc-modelphp/server/var-www-html/v3/api/modelphp# chmod -R 777 storage/

6. Start the containers
On prod server:
docker-compose up -d   -> in this case the requests will be proxied by the master nginx server

On dev server;
docker-compose -f docker-compose.yml  -f docker-compose.dev.additional.yml up -d   -> in this case this app's nginx server will be exposed on port 80

7. Initialize the larvel vendor folder.
> docker exec -ti scmyapp_php_1 bash
> cd /gt/sc-repos/sc-modelphp/server/var-www-html/v3/api/myapp
>root@997e77826343:/gt/sc-repos/sc-modelphp/server/var-www-html/v3/api/myapp# composer update --no-scripts 

8. Once the above commands is issued then you can access:

http://127.0.0.1/ -> you will get the output jaikalima
http://127.0.0.1/v3/api/modelphp/public/index.php -> you will get "Welcome to laravel"
