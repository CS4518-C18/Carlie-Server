# Carlie Server

## Getting Started

### Prerequisites
- Node.js v8.4.0

### Installing
To install the dependencies, run the following command:

 ```npm install```

## Running

To start the server, run the following command:

```npm start```

### API

To request a new trip, send a get request to `http://localhost:3000/passengers/:passengerId/trips/new`, where `:passengerId` is the Passenger ID used by Firebase Authentication ID.

## Deployment

To deploy the server to heroku, please follow [this](https://devcenter.heroku.com/articles/git) tutorial. 

## Authors

[Haofan Zhang](https://github.com/hzhang1902) - **Initial works**

## License

This project is licensed under the MIT License
