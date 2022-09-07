import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAk3ReiH6ndFt6oA3HmR5NcVkA4k2MI__8",
    authDomain: "newestever-3f6b9.firebaseapp.com",
    projectId: "newestever-3f6b9",
    storageBucket: "newestever-3f6b9.appspot.com",
    messagingSenderId: "1080947564160",
    appId: "1:1080947564160:web:53de0a040055ee2e2a5065"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

// console.log('@@@@@@@@@@@@@@@@', storage)


