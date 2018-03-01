var admin = require("firebase-admin");


function getServiceAccount() {
	return JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
}

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: process.env.FIREBASE_DATABASEURL
});

var db = admin.database();
var ref = db.ref()

module.exports = ref;