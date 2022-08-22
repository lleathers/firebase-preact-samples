import route from 'preact-router'
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator, enableMultiTabIndexedDbPersistence } from 'firebase/firestore'
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { config } from '@/config.js'

export function createAccount(user) {
  const { type } = user;
  const { auth } = initialize();
  switch(type) {
    case 'google': {
      // manage redirect here with dummy page - vvvv
      const stateObj = {
        foo: "bar",
      }
    
      history.pushState(stateObj, "intermediate page", "/case")
      // manage redirect here with dummy page - ^^^^

      signInWithRedirect(auth, new GoogleAuthProvider());
      break;
    }
    case 'twitter': {
      // manage redirect here with dummy page - vvvv
      const stateObj = {
        foo: "bar",
      }
    
      // history.pushState(stateObj, "intermediate page", "/case")
      // manage redirect here with dummy page - ^^^^

      signInWithRedirect(auth, new TwitterAuthProvider());
      break;
    }
    case 'email': {
      createUserWithEmailAndPassword(auth, user.email, user.password);
      break;
    }
    default: {
      throw new Error('No idea what provider you are trying to use');
    }
  }
}

export function signIn(user) {
  const { type } = user;
  const { auth } = initialize();
  switch(type) {
    case 'google': {
      // manage redirect here with dummy page - vvvv
      const stateObj = {
        foo: "bar",
      }
    
      history.pushState(stateObj, "intermediate page", "/case")
      // manage redirect here with dummy page - ^^^^

      signInWithRedirect(auth, new GoogleAuthProvider());
      break;
    }
    case 'twitter': {
      // manage redirect here with dummy page - vvvv
      const stateObj = {
        foo: "bar",
      }
    
      history.pushState(stateObj, "intermediate page", "/case")
      // manage redirect here with dummy page - ^^^^
      
      signInWithRedirect(auth, new TwitterAuthProvider());
      break;
    }
    case 'email': {
      signInWithEmailAndPassword(auth, user.email, user.password);
      break;
    }
    default: {
      throw new Error('No idea what provider you are trying to use');
    }
  }
}


export function loggingOut() {

  console.log("We should be logging OUTTTT!")

  const auth = getAuth()

  signOut(auth).then(() => {
    console.log("Logged out successfully!")      
  }).catch((error) => {
    // an error happened.
    console.log("Some logout error occured.")
  });
 }


// This is the less clean way of writing the initialzieServices function 
// in src/firebase.js. This code exists behind the scenes so I can log in
// users for the screencast and only focus on the relevant bits of code.
// What's cool about this code is that we are initializing Firebase multiple
// times in the project and it doesn't throw any errors.
export function initialize() {
  const apps = getApps()
  const isInitialized = apps.length != 0
  if (!isInitialized) {
    const firebaseApp = initializeApp(config.firebase)
    const firestore = getFirestore(firebaseApp)
    const auth = getAuth(firebaseApp)
    if (location.hostname === 'localhost') {
      connectFirestoreEmulator(firestore, 'localhost', 8080)
      connectAuthEmulator(auth, 'http://localhost:9099', {
        disableWarnings: true,
      })
    }
    enableMultiTabIndexedDbPersistence(firestore).catch(console.error);
    return { firebaseApp, firestore, auth }
  } else {
    return { firebaseApp: getApp(), firestore: getFirestore(), auth: getAuth() }
  }
}
