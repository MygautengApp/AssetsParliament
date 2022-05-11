# AssetsParliament
Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Installing A step by step series of examples that tell you have to get a development env running

Step 1: Install NODE.js and NPM in your system

If you are using MAC or WINDOWS system you can download from below URL

https://nodejs.org/en/download

Or you are using ubuntu system follow below steps.

curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo apt-get install -y build-essential

Step 2: Install ionic in your system follow below steps. Open terminal of your system.

If you are using WINDOWS system then open CMD of node.js and write this command in terminal.

npm install -g cordova ionic

Step 3: Get git clone to your local system.

Step 4: Go to your project directory in terminal.

cd to/your/project/path

Step 4: Install all dependencies of your project

npm install

Step 5: Add your platform (android & ios)

ionic cordova platform add android

ionic cordova platform add ios

Step 6: All setup is done let’s run project with.

ionic serve
