/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { initializeApp, getApps } from 'firebase/app'
import {
  getFirestore,
  connectFirestoreEmulator,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  enableMultiTabIndexedDbPersistence,
  where,
  doc,
  getDoc,
  DocumentReference
} from 'firebase/firestore'
import { getAuth, connectAuthEmulator, onAuthStateChanged } from 'firebase/auth'
import { config } from './config'
import { async } from '@firebase/util'

function initializeServices() {
  const isConfigured = getApps().length > 0
  const firebaseApp = initializeApp(config.firebase)
  const firestore = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)
  return { firebaseApp, firestore, auth, isConfigured }
}

function connectToEmulators({ auth, firestore }) {
  if (location.hostname === 'localhost') {
    connectFirestoreEmulator(firestore, 'localhost', 8080)
    connectAuthEmulator(auth, 'http://localhost:9099')
  }
}

export function getFirebase() {
  const services = initializeServices()
  if (!services.isConfigured) {
    connectToEmulators(services)
    enableMultiTabIndexedDbPersistence(services.firestore);
  }
  return services
}


// export function isAdmin(checkid) { 
//   const { firestore } = getFirebase()
//   const usersDocRef =  doc(firestore, 'users/roles/admin', checkid)
//   const therecord = (callback) => getDoc(usersDocRef).then( docSnap => {
//     if (docSnap.exists()) {
//       const thedata = docSnap.data().details
//       console.log("Document data, details: ", thedata);
//       callback(thedata)
//     } else {
//       const thedata = ""
//       console.log("No such document! So not an agent");
//       callback(thedata)
//     }
//   })
//   return { therecord }
// } 


export function adminArray() {
  // always consult admin authorizations and generally roles first for latest changes
  // return hash of "key:values" as "userid:roles" for admins here. First admin roles
  // are 'agent'

  const { firestore } = getFirebase()
  const adminCol = collection(firestore, 'users/roles/admin')
  const adminQuery = query(adminCol, where("details", "==", "agent") )
  const streamArray = (callback) => onSnapshot(adminQuery, snapshot => {
    var workArray = snapshot.docs.map(doc => {
      return {
        id: doc.id, 
        details: doc.data().details,
        name: doc.data().name
      }
    });
    callback(workArray)
  })

return { streamArray }
}


export function streamMessages({ caseId }) {

  const { firestore } = getFirebase()
  const messagesCol = collection(firestore, 'supportCases', caseId, 'messages')
  const messageQuery = query(messagesCol, orderBy('timestamp'))
  
  var that = new Object

  const stream = (callback) => onSnapshot(messageQuery, snapshot => {
    var messages = snapshot.docs.map(doc => {

      streamMessages.x = doc.data()

      console.log("How does streamMessages show up? ", streamMessages )
      console.log("How does doc.data show up? ", doc.data() )
      
      var { streamArray } = adminArray()

      var promiseMe = Promise.resolve( 

        streamArray(workArray => {
        return {istrulyAdmin : workArray.find( element => element['id'] == streamMessages.x['uid']) ? true : false };
        }) 

      );
        
      const returnResult = (callback) => promiseMe.then( zzz = (isworkAdmin => {

        const isDelivered = !doc.metadata.hasPendingWrites;

        // console.log("Print out that.x before RETURN: ", streamMessages.x)
        console.log("Print out doc.data() before RETURN: ", doc.data())

        return {
          ...streamMessages.x,
          istrulyAdmin: isworkAdmin,
          isDelivered,
          id: doc.id,
          }
        }), 
        
        callback (zzz) );
        
      return returnResult



    })

    callback(messages);
  })

  const addMessage = (message) => addDoc(messagesCol, {
    timestamp: serverTimestamp(),
    ...message,
  });

  return { stream, addMessage };
}


export function onAuth(callback) {
  const { auth } = getFirebase();
  return onAuthStateChanged(auth, user => {
    console.log(user);
    callback(user);
  })
}

