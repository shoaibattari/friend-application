import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDh6_zoJwZxYz5TIU9HguGVVCDslAMUMng",
    authDomain: "friends-application-adc4a.firebaseapp.com",
    projectId: "friends-application-adc4a",
    storageBucket: "friends-application-adc4a.appspot.com",
    messagingSenderId: "738224052295",
    appId: "1:738224052295:web:68d05d45c7390fb3373962",
    measurementId: "${config.measurementId}"
  };

  const app = initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);
  
        