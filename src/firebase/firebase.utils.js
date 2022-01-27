import firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCoxSpiI-rctlnmwXBBrzQDuHdXLYtnOIE",
    authDomain: "crwn-db-22b4d.firebaseapp.com",
    projectId: "crwn-db-22b4d",
    storageBucket: "crwn-db-22b4d.appspot.com",
    messagingSenderId: "221980383889",
    appId: "1:221980383889:web:67068a0de0e3a330fffd30",
    measurementId: "G-BGJYYHZDKX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


//
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; //if no user then backoff

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

   try {
     await userRef.set({
       displayName, 
       email,
       createdAt,
       ...additionalData
     })
   } catch (error) {
     console.log('error creating user', error.message);
   }
  }

  return userRef;

};



export default firebase;