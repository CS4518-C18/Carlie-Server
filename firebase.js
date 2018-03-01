var admin = require("firebase-admin");
var serviceAccount = require("./carliewpi-ac614-firebase-adminsdk-qhsry-1289cb185e.json");


admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://carliewpi-ac614.firebaseio.com"
});

var db = admin.database();
var ref = db.ref()

module.exports = ref;