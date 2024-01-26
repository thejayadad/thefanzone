'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {FiHome, FiList, FiPlus} from "react-icons/fi"

const links = [
    { name: 'Home', href: '/dashboard', icon: FiHome },
    {
      name: 'Workouts',
      href: '/dashboard/workout',
      icon: FiList,
    },
    { name: 'Create', href: '/dashboard/new', icon: FiPlus },
  ];

const Aside = () => {
    const pathname = usePathname();
  return (
    <div className="space-y-4 flex flex-col h-full text-grey border-r border-grey/10">
    <div className="p-3 flex-1 flex justify-center">
    <div className="space-y-2">
    <>
  {links.map((link) => {
    const LinkIcon = link.icon;
    return (
      <Link
      key={link.name}
      href={link.href}
      className={clsx(
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-grey hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3',
        {
          'text-secondary': pathname === link.href,
        },
      )}
    >
      <LinkIcon className="w-6" />
      <p className="hidden md:block">{link.name}</p>
    </Link>
    );
  })}
</>
        </div>
    </div>              
</div>
  )
}

export default Aside