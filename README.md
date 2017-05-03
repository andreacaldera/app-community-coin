# Community Coin
An attempt at building a resource-sharing network in a block of flats at Omega Works (Hackney Wick, London).

# Development
`yarn` or `npm i`

`yarn watch` or `npm run watch`

`yarn dev` or `npm run dev`


# Production
`yarn` or `npm i`

`yarn build` or `npm run build`

`yarn start` or `npm start`

## Docker
`docker build . -t app-community-coin-VERSION`

`docker run -p 3001:3001 app-community-coin-VERSION` 

Make sure to change VERSION and port mapping.


## Static

`make build-static`

`make serve-static`

`make deploy`
