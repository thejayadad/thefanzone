import React from 'react'
import AuthLinks from './AuthLinks';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between mx-auto max-w-screen-xl'>
            <Link href={'/'}>LOGO</Link>
            <AuthLinks />
        </nav>
    </header>
  )
}

export default Navbar