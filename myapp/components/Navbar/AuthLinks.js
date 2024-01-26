import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LoginWithGoogle from '../Buttons/LoginWithGoogle'


const AuthLinks = ({ user }) => {
  return (
    <div className='flex items-center'>
 {
            !user
              ? <div>
               <LoginWithGoogle />

                </div>

              : <>
                    <Link href={`/profile/${user?._id}`} className='avatar'>
                    <Image src={user?.avatar} alt={user?.name}
                    width={40} height={40} sizes='25vw' />
                  </Link>
              </>
          }
    </div>
  )
}

export default AuthLinks