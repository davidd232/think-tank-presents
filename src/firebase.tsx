import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBz9UlsdvirmSy0Z7g5nG51uw0VnB6c2HE',
  authDomain: 'think-tank-presents.firebaseapp.com',
  projectId: 'think-tank-presents',
  storageBucket: 'think-tank-presents.appspot.com',
  messagingSenderId: '960399027446',
  appId: '1:960399027446:web:9458119a3b762d44ee90d7',
  databaseURL: 'https://think-tank-presents-default-rtdb.firebaseio.com/',
  measurementId: 'G-H61F7G5FJP'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getDatabase(app);
connectAuthEmulator(auth, 'http://localhost:9099');

export {
  app,
  auth,
  db
}