Q1) What are the steps taken for first time install?

1. Install laravel installer
   composer is already installed inside DockerFile
   > composer global require "laravel/installer"
  
2. Create frame of laravel app
   root@7b1c770d82ca:/gt/sc-repos/sc-ce-profile/server/var-www-html/api# /root/.composer/vendor/laravel/installer/laravel new profile

3. Initialize the vendor folder
   Since vendor folder is not kept inside git so on a new git pull you will need to do:
   root@9de3c69f70c3:/var/www/html/api/profile# composer update --no-scripts  
   This command will create the folder /var/www/html/api/profile/vendor

   Vendor folder 
   -------------
   The vendor folder is very large and we do not want to keep it inside git.
   It is already ignored using gitignore of a default installation of laravel from step 2 command.

4. Enable the .env file
   vk@Vikass-Air ~/d/s/s/s/v/a/profile> mv .env.example .env

5. Remove .env from gitignore
   vk@Vikass-Air ~/d/s/s/s/v/a/profile> nano .gitignore

6. Set the app key inside the .env file
   app key has to be of size 32  

7. give permission to storage folder.
   > chmod -R 777 storage/

8. Now when you access 
   http://127.0.0.1/api/profile/public/index.php
   you will get the laravel welcome page.

Q2) What steps are needed for first time checkout from git?
1. Step 3.
2. Step 7.