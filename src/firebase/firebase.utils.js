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
export default firebase;