import  firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// firebase 에서 웹앱 생성시 config 파일 복사한 것 가져온 것 
//my firebase web app's configuration 
let firebaseConfig = {
    apiKey: "AIzaSyBoEeYZqWQwpT-Zl2YF5BRWF6Fbe1jTrOk",
    authDomain: "instagram-clone-d1c3f.firebaseapp.com",
    databaseURL: "https://instagram-clone-d1c3f-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-d1c3f",
    storageBucket: "instagram-clone-d1c3f.appspot.com",
    messagingSenderId: "51324401102",
    appId: "1:51324401102:web:59adc218b2b4173b6e679f",
    measurementId: "G-BYKC1F555E"
};
// firebase 초기화 
firebase.initializeApp(firebaseConfig);

//스토리지 & 스토어 초기화 
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export{projectStorage, projectFirestore, timestamp}; 