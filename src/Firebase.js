import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebase=()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyD48elpKvOWguYLLgsbrVrVgLYAaJD46WE",
    authDomain: "cooking-bf835.firebaseapp.com",
    projectId: "cooking-bf835",
    storageBucket: "cooking-bf835.appspot.com",
    messagingSenderId: "729102161378",
    appId: "1:729102161378:web:325a6bbd50a387ec4415bb"
  };
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}


export default firebase;