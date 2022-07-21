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
  DocumentReference,
  getDocFromCache
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

export function streamMessages({ caseId }) {

  const { firestore } = getFirebase()
  const messagesCol = collection(firestore, 'supportCases', caseId, 'messages')
  const messageQuery = query(messagesCol, orderBy('timestamp'))

  const stream = (callback) => onSnapshot(messageQuery, snapshot => {
    var messages = snapshot.docs.map(doc => {

      const isDelivered = !doc.metadata.hasPendingWrites;

      return {
        isDelivered,
        id: doc.id,
        ...doc.data()
        }
      },        

    );

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

// chatAdmin returns ADMINISTRATOR ARRAY: List of all administrators
// to be CSS decorated.
// We hardcode because, there exist asynchronous issues 
// multiple disparate DB queries.

export const chatAdmin = () => {
  const hardcodedAdmin = ['tCQuN6AGShHFCNUYLRyweio3b1Wm']
  //return hardcodedAdmin.find((element => element === caseId) ? true : false)
  //return hardcodedAdmin[0]
  return hardcodedAdmin
}

// NOTES

// export const chatAdmin = async({ caseId }) => {
//   const { firestore } = getFirebase()
//   const docRef = doc(firestore, 'supportCases', caseId)
//   const resultwork = await getDoc(docRef)
//   console.log("CHECK OUT chatADMIN result ", resultwork.data().adminid)
//   return resultwork.data().adminid
// }

// export function streamMessages({ caseId }) {

//   const { firestore } = getFirebase()
//   const messagesCol = collection(firestore, 'supportCases', caseId, 'messages')
//   const messageQuery = query(messagesCol, orderBy('timestamp'))
  
  //var that = new Object

  // const stream = (callback) => onSnapshot(messageQuery, snapshot => {
  //   var messages = snapshot.docs.map(doc => {

      // streamMessages.x = doc.data()

      // console.log("How does streamMessages.x show up? ", streamMessages.x )
      // console.log("How does doc.data show up? ", doc.data() )
      
      // var { streamArray } = adminArray()
      // console.log("What is the administration array ", zzz)

      // streamArray( workArray => console.log("What is streamArray(workArray) ", workArray) )

      //const zzz = streamArray(workArray => {return workArray})
      //console.log("What does streamArray(workArray) look like: ", zzz)

      // var promiseMe = Promise.resolve( true
        
        //  zzz = streamArray( workArray => { 
        //   return workArray.find(element => element['id'] == streamMessages.x['uid']) ? true : false} 
        //   )

        //streamArray(workArray => zzz = { 
        //   //console.log("workArray[0] ", workArray[0]['id']);
        //   //console.log("workArray[1] ", workArray[1]['id']);
        //   //console.log("streamMessages.x ", streamMessages.x['uid']);
        //istrulyAdmin : workArray.find( element => element['id'] == streamMessages.x['uid']) ? true : false 

      //);
        
      // const returnResult = () => { promiseMe.then( 
        
      //   isworkAdmin => {

      //     console.log("What is isworkAdmin? ", isworkAdmin)

      //  const isDelivered = !doc.metadata.hasPendingWrites;

        // console.log("Print out that.x before RETURN: ", streamMessages.x)
        // console.log("Print out doc.data() before RETURN: ", doc.data())

        // return {
        //   ...streamMessages.x,
        //   istrulyAdmin: isworkAdmin,
        //   isDelivered,
        //   id: doc.id,
        //   }
        // },

        // return {
        //   istrulyAdmin: isworkAdmin,
        //   isDelivered,
        //   id: doc.id,
        //   ...doc.data()
        //   }
        // },        
        // // console.log("Print istrulyAdmin  ", zzz.istrulyAdmin),
        // console.log("Print isDelivered  ", zzz.isDelivered),
        // console.log("Print id  ", zzz.id),

        // );

        //  return true

        //}
      
        // const returnResult = (callback) => promiseMe.then( zzz = ((isworkAdmin) => {

        //   const isDelivered = !doc.metadata.hasPendingWrites;
  
        //   // console.log("Print out that.x before RETURN: ", streamMessages.x)
        //   console.log("Print out doc.data() before RETURN: ", doc.data())
  
        //   return {
        //     ...streamMessages.x,
        //     istrulyAdmin: isworkAdmin,
        //     isDelivered,
        //     id: doc.id,
        //     }
        //   }), 
          
        //   console.log("Print istrulyAdmin  ", zzz.istrulyAdmin),
        //   console.log("Print isDelivered  ", zzz.isDelivered),
        //   console.log("Print id  ", zzz.id),
  
        //   callback (zzz) );



      // console.log("What is returnResult REALLY? ", returnResult)  
      // return returnResult

    //})

//    callback(messages);
//  })

//   const addMessage = (message) => addDoc(messagesCol, {
//     timestamp: serverTimestamp(),
//     ...message,
//   });

//   return { stream, addMessage };
// }


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

// export function adminArray() {
//   // always consult admin authorizations and generally roles first for latest changes
//   // return hash of "key:values" as "userid:roles" for admins here. First admin roles
//   // are 'agent'

//   const { firestore } = getFirebase()
//   const adminCol = collection(firestore, 'users/roles/admin')
//   const adminQuery = query(adminCol, where("details", "==", "agent") )
//   const streamArray = (callback) => onSnapshot(adminQuery, snapshot => {
//     var workArray = snapshot.docs.map(doc => {
//       return {
//         id: doc.id, 
//         details: doc.data().details,
//         name: doc.data().name
//       }
//     });
//     callback(workArray)
//   })

// return { streamArray }
// }

