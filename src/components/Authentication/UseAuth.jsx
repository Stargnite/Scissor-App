import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {setDoc, doc } from 'firebase/firestore'
import { auth, db  } from "./../Authentication/Firebase/firebase";

const UseAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        const ref = doc(db, "users", user.uid)
        const randomUser = {name: user.displayName, value: "your-link"}
         setDoc(ref, randomUser);
        console.log(user)
      } else {
        setCurrentUser(null);
      }
    });
    return unsubscribed;
  }, []);

  return currentUser;
};

export default UseAuth;
