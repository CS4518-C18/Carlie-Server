var ref = require('../firebase')

ref.child('shuttles').child('shuttle1').child('trips').child('p1').set(0)
ref.child('shuttles').child('shuttle1').child('trips').child('p2').set(0)
ref.child('shuttles').child('shuttle2').child('trips').child('p3').set(0)
ref.child('shuttles').child('shuttle2').child('trips').child('p4').set(0)
ref.child('shuttles').child('shuttle3').child('trips').child('p5').set(0)