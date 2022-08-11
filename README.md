# react-express-app

## About the app

Actually, there are two separated apps. The Client which serves the FrontEnd (using React), and the API (in Node/Express).

## How to run the API

1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.

## How to run the Client

1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## Check if they are connected

1. With the two apps running, open your browser in http://localhost:3000/.
2. If you see a webpage saying `Welcome to React`, it means the FrontEnd is working.
3. If the same webpage has the phrase `API is working properly`, it means the API is working.
4. Enjoy!

### Docker on client directory

docker build -f Dockerfile -t client .

docker run -it -p 4001:3000 client

Here, we are exposing port 3000 (the port that runs the React application) to port 4001 outside the container—run the above command. If you open http://localhost:4001 on a browser now, you will see that the React app is working inside Docker.

### Docker on api directory

docker build -f Dockerfile -t api .

docker run -it -p 4002:3001 api

Here, we are exposing port 3001 (the port that is running the Node.js server application) to port 4002 outside the container—run the above command.
If you now open http://localhost:4002/ on a browser, you can see that the Node.js home route is okay and the app is working inside Docker.

### Docker on root directory

docker-compose build

docker-compose up

to have Client, API, and Database, all running in separated containers with only one command.
