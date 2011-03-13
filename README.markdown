PhantomJS Example: The StartupBus Game
======================================

Example of a script utilizing phantomjs & nodejs for the purposes of gaming the SXSW 2011 StartupBus Game.  

I wanted a meatier example of phantomjs so that I could eventually replace our firefox-based selenium server with a simple phantomjs script for enterprise use.

Instructions:
---------------

Build & Install phantomjs (instructions are for Debian)

    apt-get install libqt4-dev
    git clone git://github.com/ariya/phantomjs.git && cd phantomjs
    qmake && make
    cp bin/phantomjs /usr/bin
    
Install nodejs via nvm:

    git clone git://github.com/creationix/nvm.git ~/.nvm
    source ~/.nvm/nvm.sh
    nvm install v0.4.2

Make a fake xserver display (phantomjs needs this)

    nohup Xvfb :4 -screen -ac 640x480x16 &> /dev/null &

Run gold_rush.js:

    export DISPLAY=:4
    node gold_rush.js

