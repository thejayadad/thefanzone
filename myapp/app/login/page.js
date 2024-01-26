
import React from 'react'
import {getServerSession} from "next-auth";
import { authOptions } from '../api/auth/[...nextauth]/route';
import LoginWithGoogle from '@/components/Buttons/LoginWithGoogle';

const LoginPage = async () => {
    const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex items-center justify-center">
            {!!session && (
            <>
            <Link href={'/dashboard'}>
                Dashboard
            </Link>
            </>
          )}
          {!session && (
            <>
            <LoginWithGoogle />
            </>
          )}
    </div>
  )
}

export default LoginPage