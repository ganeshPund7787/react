import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { toast } from "react-hot-toast";

const OAuth = () => {
  const handleCick = async () => {
    try {
      const Provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const data = await signInWithPopup(auth, Provider);
      const user = data.user;

      const responce = await fetch("/api/user/googleAuth", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({
          username: user.displayName,
          email: user.email,
          profileImage: user.photoURL,
        }),
      });

      const userData = await responce.json();
      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        onClick={handleCick}
        className="px-2 py-2 w-full rounded-lg bg-green-600 hover:bg-green-500 text-white"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default OAuth;
