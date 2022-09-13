import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAk3ReiH6ndFt6oA3HmR5NcVkA4k2MI__8",
    authDomain: "newestever-3f6b9.firebaseapp.com",
    projectId: "newestever-3f6b9",
    storageBucket: "newestever-3f6b9.appspot.com",
    messagingSenderId: "1080947564160",
    appId: "1:1080947564160:web:53de0a040055ee2e2a5065"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
