# Carlie Server

## Getting Started

### Prerequisites
- Node.js v8.4.0

- A Firebase admin JSON file. Edit `databaseURL` and file URL in `firebase.js`

### Installing
To install the dependencies, run the following command:

 ```npm install```

## Running

To start the server, run the following command:

```npm start```

### API Usage

To request a new trip, send a GET request to 

`http://localhost:3000/passengers/:passengerId/trips/new`

where `:passengerId` is the trip Passenger's ID, which is also his/her Firebase ID. 

If you deployed it on Heroku, GET from 

`http://:your-app-name.herokuapp.com/passengers/:passengerId/trips/new`

where `:your-app-name` is your heroku app's name.


## Details
### Response Value

The response is a JSON object, which contains:
```
{
    "shuttleId": "",
    "status": ""
}
```

Both of the two attributes are string. `shuttleId` is the shuttle ID the requesting trip is assigned to. `status` is either `existed`, meaning the trip already exists and is ongoing, or `new`, meaning the trip is new. If the trip already exists, `shuttleId` will be the shuttle ID of the existing trip.

### What Happened Inside?

The server itself does not modify data in firebase. It simply keeps track of the environment and assign passengers to shuttles without passenger clients assigning themselves, thus avoids race condition. 

## Deployment

To deploy the server on heroku, follow [this](https://devcenter.heroku.com/articles/git) guide. 

## Authors

[Haofan Zhang](https://github.com/hzhang1902) - **Initial works**

## License

This project is licensed under the MIT License
