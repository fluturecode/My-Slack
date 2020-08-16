import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHsRzslXJuHGCGgquMWnmisr3zlCiS_xY",
  authDomain: "my-slack-a305a.firebaseapp.com",
  databaseURL: "https://my-slack-a305a.firebaseio.com",
  projectId: "my-slack-a305a",
  storageBucket: "my-slack-a305a.appspot.com",
  messagingSenderId: "186326341400",
  appId: "1:186326341400:web:369311532bde55c84b306d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
