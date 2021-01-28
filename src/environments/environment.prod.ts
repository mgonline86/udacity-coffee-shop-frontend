export const environment = {
  production: true,
  apiServerUrl: 'https://udacity-coffee-shop-backend.herokuapp.com', // the running FLASK api server url
  auth0: {
    url: 'jimmy0.eu', // the auth0 domain prefix
    audience: 'coffee', // the audience set for the auth0 app
    clientId: 'yLhZx5kn4eqG32MTjrATUOiUAn9qUTVn', // the client id generated for the auth0 app
    callbackURL: 'https://udacity-coffee-shop.herokuapp.com', // the base url of the running ionic application. 
  }
};