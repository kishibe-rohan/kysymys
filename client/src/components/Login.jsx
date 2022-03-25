import React from 'react'

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase"

const Login = () => {

  //Function to handle Firebase Google Login
  const handleLogin = async() => {
    await signInWithPopup(auth,provider).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen box-border">
      <div className="flex flex-col items-center">
        <span className="italic">Kysymys</span>
        <button className="p-2 mx-12 bg-orange-400 text-white outline-none border-none rounded tracking-wide cursor-pointer" onClick={handleLogin}>
          Login to continue
        </button>
      </div>
    </div>
  )
}

export default Login
