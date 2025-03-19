import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlJou3GAw5xTW_u5UILg0O9upO9e2eEyo",
  authDomain: "agendeja-f1cc1.firebaseapp.com",
  projectId: "agendeja-f1cc1",
  storageBucket: "agendeja-f1cc1.firebasestorage.app",
  messagingSenderId: "457011497130",
  appId: "1:457011497130:web:31788925960253039928d3",
  measurementId: "G-7XD7YME9DT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };