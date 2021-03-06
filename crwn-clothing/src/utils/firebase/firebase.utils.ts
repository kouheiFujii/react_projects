import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
} from "firebase/auth";
import { FirebaseOptions } from "@firebase/app";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  DocumentReference,
  DocumentData,
} from "firebase/firestore";

/*
  Initialize
*/
// Firebase
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBIli4308cQhnvtqL1de-ix8cyR8YpAAe4",
  authDomain: "u-crwn-project.firebaseapp.com",
  projectId: "u-crwn-project",
  storageBucket: "u-crwn-project.appspot.com",
  messagingSenderId: "660186853806",
  appId: "1:660186853806:web:bf4e7e3cd8faa74d4e583f",
};
initializeApp(firebaseConfig);

// Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account", // https://developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters
});

// Firestore
const db = getFirestore();

/*
  Functions
*/
const auth: Auth = getAuth();

const signInWithGooglePopup = (): Promise<UserCredential> =>
  signInWithPopup(auth, googleProvider);

const signInWithGoogleRedirect = (): Promise<never> =>
  signInWithRedirect(auth, googleProvider);

const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfo = {}
): Promise<DocumentReference<DocumentData>> => {
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
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};

const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const onAuthStateChangedLisner = (callback: NextOrObserver<User>): void => {
  onAuthStateChanged(auth, callback);
};

const signOutUser = async () => await signOut(auth);
export const firebase = {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  onAuthStateChangedLisner,
};
