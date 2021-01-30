import firebase from "firebase";

// firebaseConfig 정보로 firebase 시작
const firebasApp = firebase.initializeApp({
  apiKey: "AIzaSyBoEeYZqWQwpT-Zl2YF5BRWF6Fbe1jTrOk",
  authDomain: "instagram-clone-d1c3f.firebaseapp.com",
  databaseURL: "https://instagram-clone-d1c3f-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-d1c3f",
  storageBucket: "instagram-clone-d1c3f.appspot.com",
  messagingSenderId: "51324401102",
  appId: "1:51324401102:web:59adc218b2b4173b6e679f",
  measurementId: "G-BYKC1F555E"
});
//db
const db = firebasApp.firestore();
//authentication - login, logout
const auth = firebase.auth();
//upload bunch of pictures and stuffs 
const storage = firebase.storage();

export { db,auth,storage };
