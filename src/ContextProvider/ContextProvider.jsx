import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase.config/Firbase.config";
import { updateProfile } from "firebase/auth";
// import { toast } from "react-toastify";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);
const ContextProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();

  //  const [viewLand , setViewLand] = useState({})
  //  console.log(viewLand);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubProvider = new GithubAuthProvider();
  const githubSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Logout = () => {
    // setLoading(false)
    signOut(auth);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `LogOut SuccessFul !`,
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  };

  const UpdateUser = (displayName, photoURL, email) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
      email: email,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // get token and store client
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          }
        });
      } else {
        // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      return () => {
        unsubscribe();
      };
    });
  }, [axiosPublic]);

  const info = {
    UpdateUser,
    user,
    googleSignIn,
    githubSignIn,
    signUp,
    login,
    Logout,
    loading,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
