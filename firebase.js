var admin = require("firebase-admin");


function getServiceAccount() {
	if(process.env.NODE_ENV == "production")
		return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
	else 
		return require('./carliewpi-ac614-firebase-adminsdk-qhsry-1289cb185e.json')
}


admin.initializeApp({
	credential: admin.credential.cert(getServiceAccount()),
	databaseURL: process.env.FIREBASE_DATABASEURL
});

var db = admin.database();
var ref = db.ref()

module.exports = ref;