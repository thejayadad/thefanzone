import React from 'react'
import {getServerSession} from "next-auth";
import { authOptions } from '../api/auth/[...nextauth]/route';
import Link from 'next/link';
import LoginWithGoogle from '@/components/Buttons/LoginWithGoogle';



const LoginPage = async () => {
    const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex items-center justify-center">

        {!!session && (
      <div
      style={{marginTop: '-200px'}}
      className="text-center flex flex-col text-white">   
             <img 
        
        src='../logo.png' alt="Logo" className="h-64 text-grey" />     
      <Link href={'/dashboard'}>
            Dashboard
        </Link>
        </div>
        )}
          {!session && (
            <div className="min-h-screen flex items-center justify-center">
            <LoginWithGoogle/>
            </div>
          )}
    </div>
  )
}

export default LoginPage