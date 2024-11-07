import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_ENV_LOCAL_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_ENV_LOCAL_AUTHDOMAIN,
    databaseURL: "https://portfolio-19ea2-default-rtdb.firebaseio.com",
    projectId: "portfolio-19ea2",
    storageBucket: "portfolio-19ea2.appspot.com",
    messagingSenderId: "644851104228",
    appId: process.env.NEXT_PUBLIC_ENV_LOCAL_APPID,
    measurementId: process.env.NEXT_PUBLIC_ENV_LOCAL_MEASUREMENTID
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export { db, storage };