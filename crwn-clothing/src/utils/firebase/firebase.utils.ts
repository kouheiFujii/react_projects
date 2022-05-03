import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  Auth,
  User,
} from "firebase/auth";
import { FirebaseOptions } from "@firebase/app";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

// Initialize
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBIli4308cQhnvtqL1de-ix8cyR8YpAAe4",
  authDomain: "u-crwn-project.firebaseapp.com",
  projectId: "u-crwn-project",
  storageBucket: "u-crwn-project.appspot.com",
  messagingSenderId: "660186853806",
  appId: "1:660186853806:web:bf4e7e3cd8faa74d4e583f",
};
const firebaseApp = initializeApp(firebaseConfig);

// Authentication of Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account", // https://developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Firestore
const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth: User) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};
