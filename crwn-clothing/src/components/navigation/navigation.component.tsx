import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserCtx } from "../../context/user.context";
import { firebase } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";
import { User } from "@firebase/auth";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserCtx);
  const { signOutUser } = firebase;

  const isEmpty = Object.keys(currentUser).length === 0;

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser({} as User);
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {isEmpty ? (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          ) : (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
