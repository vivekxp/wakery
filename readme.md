## Quick Setup

1. Make sure node and npm are installed in your system
    > sudo npm install npm -g 
2. Install grunt cli
    > sudo npm install grunt-cli -g
3. Clone project from above github repo
4. Change into project folder
5. Install project dependencies 
    > npm install
6. Run project (also runs unit tests)
    > grunt
7. Open http://localhost:8080/ in your favourite browser.

## About Wakery

Wakery is a SPA written with scability in mind. Although the App currently only support basic CURD features. The APP can be easily extended to add more features. 

### App libraries
Wakery is written in AngularJS. 
To minimize the styling work, Angular Material is used.
ngRoute is used for routing within the application

### Build libraries
* Grunt is used for running the build tasks
* Jasmine tests are run within PhantomJS browser using Karma runner
* Concat, Copy, Jshint, clean are used for building the deployable version of App in 'dist' folder
* Watch and connect are used for acclerated development.
