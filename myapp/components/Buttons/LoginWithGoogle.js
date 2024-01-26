'use client';
import {signIn} from "next-auth/react";

export default function LoginWithGoogle() {
  return (
    <button
      onClick={() => signIn('google')}
      className="bg-white text-grey shadow text-center px-12 py-6 flex gap-3 items-center justify-center">
      <span>Sign In with Google</span>
    </button>
  );
}