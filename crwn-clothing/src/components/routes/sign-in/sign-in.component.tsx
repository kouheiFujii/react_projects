import { firebase } from "../../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "@firebase/auth";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
  const { signInWithGooglePopup, createUserDocumentFromAuth, auth } = firebase;

  useEffect(() => {
    const redirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    };
    redirect();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
