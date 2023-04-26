// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let db = false;

export const getDb = () => {
  if (!db) {
    const firebaseConfig = {
      apiKey: 'AIzaSyCNoasNWaStmV8Wdwigc_VhQmOZg8QNM8k',
      authDomain: 'wordle-six.firebaseapp.com',
      projectId: 'wordle-six',
      storageBucket: 'wordle-six.appspot.com',
      messagingSenderId: '337458251131',
      appId: '1:337458251131:web:faabcbd8b5bba7c74de9de',
    };

    const app = initializeApp(firebaseConfig);

    db = getFirestore(app);
  }

  return db;
};
