import React from 'react'
import {getServerSession} from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';


const AuthLinks = async () => {
    const session = await getServerSession(authOptions);

  return (
    <div className='flex items-center'>
             {!!session && (
            <>
                <Link href={'/dashboard'}>
                    Dashboard
                </Link>
            </>
          )}
          {!session && (
            <>
            <Link href={'/post'}>Post</Link>
            <LoginWithGoogle />
            </>
          )}
    </div>
  )
}

export default AuthLinks