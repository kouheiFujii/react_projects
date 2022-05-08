import { firebase } from "../../utils/firebase/firebase.utils";
import { useState, ChangeEvent, FormEvent } from "react";
import { FirebaseError } from "@firebase/util";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } =
    firebase;
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetForm();
    } catch (err: unknown) {
      if (err instanceof FirebaseError) {
        switch (err.code) {
          case "auth/wrong-password":
            alert("Cannot sign in due to incorrect email or password");
            break;

          case "auth/user-not-found":
            alert("Cannot sign in due to not found user");
            break;

          default:
            console.log(err);
            break;
        }
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            name: "email",
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            name: "password",
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />

        <div className="buttons-container">
          <Button children="SIGN IN" otherProps={{ type: "submit" }} />

          <Button
            children="GOOGLE SIGN IN"
            buttonType="google"
            onClick={signInWithGoogle}
            otherProps={{ type: "button" }}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
