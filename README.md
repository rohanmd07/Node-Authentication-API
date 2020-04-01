## Node Authentication API

API for registering users with mongodb and authentication using a JWT (json web token). This app uses passport and passport-jwt and uses a JWT strategy

### Version

2.2.1

### Usage

> npm install

> npm start

Endpoints

>POST /users/register

>POST /users/authenticate   // Gives back a token

>GET /users/profile         // Needs json web token to authorize

**(Note: While using GET always remember to send Authenticate (bearer) sceme in the headers.)**
