import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyDNJ6lLiUu1HTjIpFjq_FUO_kFxbwDX5Xw",
  authDomain: "newsa-d0eaf.firebaseapp.com",
  databaseURL: "https://newsa-d0eaf.firebaseio.com",
  projectId: "newsa-d0eaf",
  storageBucket: "newsa-d0eaf.appspot.com",
  messagingSenderId: "238294264133",
  appId: "1:238294264133:web:fd5ba88eb94181839ef62c",
  measurementId: "G-MEY4Y8XEGP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true })
const storage = firebase.storage()
export {
  storage, firebase as default
} 