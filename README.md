# Carlie Server

## Getting Started

### Prerequisites
- Node.js v8.4.0

### Installing
To install the dependencies, run the following command:

 ```npm install```

## Running

To start the server, a firebase admin SKD account is required. Follow [this](https://firebase.google.com/docs/admin/setup) guide, put the JSON file with your service account credentials under project directory, and update `firebase.js` accordingly.

Then run the following command:

```npm start```

### API Usage

To request a new trip, send a GET request to `http://localhost:3000/passengers/:passengerId/trips/new`

where `:passengerId` is the trip Passenger's ID, which is also his/her Firebase ID. 

If you deployed it on Heroku, GET from `http://:your-app-name.herokuapp.com/passengers/:passengerId/trips/new`

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

### What is happening?

The server itself does not modify data in firebase. It simply keeps track of the environment and assign passengers to shuttles without passenger clients assigning themselves, thus avoids race condition. 

## Deployment

To deploy the server on heroku, follow [this](https://devcenter.heroku.com/articles/git) guide. 

Also, in order to not leak your Firebase admin SDK credentials, add your JSON file into `.gitignore`, set environmental variable `FIREBASE_DATABASEURL` to your firebase database url, and `FIREBASE_SERVICE_ACCOUNT` to your JSON file as a string.

## To Do
Race condition can still happen. If a passeneger asks for a trip, but hasn't gotten the result (due to poor network connection) or hasn't updated firebase yet, another passeneger might get assigned to the same shuttle even though it is full. A placeholder should be implemented to reserve the spot and expire after a short period of time.

## Authors

[Haofan Zhang](https://github.com/hzhang1902) - **Initial works**

## License

This project is licensed under the MIT License
