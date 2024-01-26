import Aside from '@/components/dashboard/Aside'
import TopNav from '@/components/dashboard/TopNav'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="h-full rounded-lg">
        <TopNav />
        <div className="flex sm:flex-row md:flex mt-16 h-full w-20 fixed inset-y-0">
        <Aside />
        </div>
        <main className="pl-20 md:pl-40 pt-16 h-full">
        {children}
      </main>
    </div>
  )
}

export default layout