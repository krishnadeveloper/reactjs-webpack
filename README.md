# reactjs and express

Creat package.json
> npm init -y

Create directory "server" inside main directory
Create new file under server sirectory index.js

Install babel-cli packages
> npm i --save-dev babel-cli

Create .babelrc file and put below lines in that file
{"presets":["es2015"]}

Now install babel-press
> npm i --save-dev babel-preset-es2015

Put below in package.json under script object

"server":"babel-node server/index.js",

Now you are ready to run the server using express with react
> npm run server

Next, To run the server automatic after save the changes
> npm i --save-dev nodemon

Change aagain package.json file and write below in next to server under script object
> nodemon --watch server --exec babel-node -- server/index.js

Now install rect and react-dom
> npm i --save-dev react react-dom
Install webpack and webpack-middleware
> npm i --save-dev webpack webpack-middleware
Install babel loader
>npm i --save-dev babel-loader

-- Install react hot loader and webpack-hot-loader
-- > npm i --save-dev react-hot-loader webpack-hot-middleware

Install react router 
> npm i --save-dev react-router

Install react router  deom
> npm i --save-dev react-router-dom

Install react-redux, thunk and redux
> npm i --save-dev react-redux thunk redux 
