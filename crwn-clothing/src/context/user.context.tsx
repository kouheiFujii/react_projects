import { createContext, useState, useEffect } from "react";
import { User } from "firebase/auth";

import { firebase } from "../utils/firebase/firebase.utils";

interface UserContext {
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}

type Props = {
  children: React.ReactNode;
};

export const UserCtx = createContext<UserContext>({} as UserContext);

export const UserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState({} as User);

  const { onAuthStateChangedLisner, createUserDocumentFromAuth } = firebase;

  useEffect(() => {
    const unsubscribe = onAuthStateChangedLisner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
        setCurrentUser(user);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserCtx.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserCtx.Provider>
  );
};
