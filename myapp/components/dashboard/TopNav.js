import Link from 'next/link'
import React from 'react'
import ThemeToggle from '../Buttons/ThemeToggle'
import getServerUser from '@/lib/getServerUser'
import {Avatar} from "@nextui-org/react";

const TopNav = async () => {
    const user = await getServerUser()
    const userImage = user.image
      return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-grey/10 rounded-lg">
         <div className="flex items-center">
         <Link href="/">
              <h1 className={("md:block text-xl md:text-3xl font-bold text-primary")}>
                TheFitnessForge
              </h1>
            </Link>
    
         </div>
         <div className="flex items-center gap-x-3">
            <ThemeToggle />
            <Avatar src={userImage} />
        </div>        
        </div>
      )
    }
    
    export default TopNav