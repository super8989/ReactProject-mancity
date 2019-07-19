import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6---0nA5yWrZsyI52EFZck84g4oZHo00",
    authDomain: "m-city-aa2ea.firebaseapp.com",
    databaseURL: "https://m-city-aa2ea.firebaseio.com",
    projectId: "m-city-aa2ea",
    storageBucket: "m-city-aa2ea.appspot.com",
    messagingSenderId: "190119154776",
    appId: "1:190119154776:web:bc31e5ce6249476a"
  };

  firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions');


export {
  firebase,
  firebaseMatches,
  firebasePromotions
}
