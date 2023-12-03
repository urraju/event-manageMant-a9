import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD911odnQDTIbdfqrvEsABLlNDVXqYUF30",
  authDomain: "assignmant-9.firebaseapp.com",
  projectId: "assignmant-9",
  storageBucket: "assignmant-9.appspot.com",
  messagingSenderId: "246855952109",
  appId: "1:246855952109:web:aba338e87305e481824ee4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
