Why is this needed?
we use one-time when we want to watch the actual browser and the automated test visually. Useful for debugging.


How to use it?

Step 1: Open a 3 pane tmux in each pane go to the folder runenv-config/monitoring/one-time/

Step 2: Start the containers
- Ref: https://gist.github.com/felippenardi/3dec3b8fbbc6518f3be9
-- In tmux pane 1: docker run --rm --net="host" -e VNC_PASSWORD=jaikalima elgalu/selenium
-- In tmux pane 2: docker run -it --rm --net="host" -v `pwd`:/src felippenardi/yo
-- In tmux pane 3: less readme.txt

Step 3: Open a VNC connection to the virtual browser
In safari enter vnc://ipaddress:25900 password: jaikalima

Step 4: Run the tests
- Ref: http://angular.github.io/protractor/#/tutorial
In tmux pane 2:
1. node@vikas-virtual-machine:/src$ protractor conf-manual.js
Using the selenium server at http://localhost:24444/wd/hub
