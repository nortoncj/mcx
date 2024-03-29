"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {signIn} from "next-auth/react"

export default function LoginWithGoogle() {
 
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-white shadow text-center w-full py-4 flex gap-3 items-center justify-center "
    >
      <FontAwesomeIcon className="h-6" icon={faGoogle} />{" "}
      <span>Sign in with Google</span>
    </button>
  );
}
