# Buy The Book

## Installion
```sh
npm install

nest start
nest start --watch  //development mode
nest build && nest start --prod   //production mode

OR

npm run start
npm run start --watch  //development mode
npm run build && npm run start --prod   //production mode
```

## Description

After the application is running, you can connect to Swagger from the url below and perform the controls.
```
http://localhost:3000/api
```
You must first register and then get tokens as Login. You can perform the checks by saving the token you have received in the Authorize field at the top right in Swagger. All operations will be performed by the logged in user. The user is recognized by the application through the token.

## Used technologies

| Technology |
| ------ |
| Typescript |
| Nestjs |
| MongoDb | 
| JWT (Json Wb Token) & Passport.Js | 
| MongoDb Cloud | 
| Swagger |

