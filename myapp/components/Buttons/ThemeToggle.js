'use client'
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {FiSun, FiMoon} from "react-icons/fi"

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if(!mounted) return null
  return (
<div className="flex items-center gap-2">
    <div
        onClick={(e) => setTheme("light")}
        className={`toggle ${theme === 'light' ? 'text-yellow-500 bg-gray-200' : 'bg-gray-300'} rounded-full p-1`}
    >
        <FiSun className={`text-white ${theme === 'light' ? 'block' : 'hidden'} fill-current w-6 h-6`} />
    </div>
    <div
        onClick={(e) => setTheme("dark")}
        className={`toggle ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} rounded-full p-1`}
    >
        <FiMoon className={`text-white ${theme === 'dark' ? 'block' : 'hidden'} fill-current w-6 h-6`} />
    </div>
</div>
  )
}

export default ThemeToggle