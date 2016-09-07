Q1) Why do we run drone and automated tests?
Whenever a git commit is done there is a possibility that some previous functionality stops working.
The goal of running drone and automated tests is to make sure that we do a git commit the previous functionality does not stop working.
In computer science this is also knows as CI (Continous integration) https://en.wikipedia.org/wiki/Continuous_integration


Q2) How to configure so that on each commit github informs drone that a commit has been made hence run the tests?


Side 1: Drone side configuration
--------------------------------
1. docker pull drone/drone

2. docker run \
	--volume /var/lib/drone:/var/lib/drone \
	--volume /var/run/docker.sock:/var/run/docker.sock \
	--env-file ./dronerc \
	--restart=always \
	--publish=88:8000 \
	--detach=true \
	--name=drone \
        drone/drone

3. In the browser open http://ipaddress:88 to enter the drone web interface.

4. The first user that logs in is considered the admin user by drone.

5. In drone there are two types of repositories. Active repositories and Available respositories. The repositories on which drone will run tests are known as "Active repositories"

6. In drone add/make active the repository that you want to run the automated tests on.

Side 2: Github side configuration
---------------------------------

1. In the docker run command above we are saying environment file is dronerc. This environment file has the link to github with the client id and client secret. This environment file github link is used by drone to decide how to authenticate the user and where to take the user after loggin in.

How was the client id and client secret registered given in the above dronerc file?
Go to https://github.com/organizations/grmte/settings/applications and register a new application. Here the URL is given that is used for oauth login through callback.

Results
-------
1. Everytime a commit is made in github the build and test will be done.

2. On each commit the tests that are run are picked from one-time folder


Q3) How to send the code from drone server to production server?
The ssh public key given at: drone webUI -> grmte -> sctech -> settings needs to be copied to 12.ps.cd.grmtech.com:/root/.ssh/authorized_keys
Why?
So that rsync can log into 12.ps.cd to rsync the code after the test passes.
Ref: http://readme.drone.io/plugins/rsync/

Q4) What is the user of .drone.yml file?
Inside .drone.yml we have told drone to start selenium. protractor connects to selenium over port 4444
To see if selenium is starting give the command:
docker run selenium/standalone-chrome

Q5) What alternatives to drone were considered?
1. Jenkins
