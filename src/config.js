// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
    apiKey: "AIzaSyATJfz1DeCxkvHe-SNcZx6A7uQiAP1wgcQ",
    authDomain: "new-image-7f7df.firebaseapp.com",
    projectId: "new-image-7f7df",
    // storageBucket: "new-image-7f7df.appspot.com",
    storageBucket: "gs://new-image-7f7df.appspot.com", // this is the new line
    messagingSenderId: "1035070812711",
    appId: "1:1035070812711:web:888183b4ad031e5b211402"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);