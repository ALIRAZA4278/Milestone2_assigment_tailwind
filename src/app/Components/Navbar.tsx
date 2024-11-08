import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
  return (
    <div className="font-sans">
      <nav className='flex w-[90%] m-auto justify-between items-center p-3 text-[#2859b6] hover: max-lg:flex-col max-lg:items-center max-lg:w-full max-sm:text-xs'>
        {/* Logo Section */}
        <div className='flex items-center gap-4'>
          <Image src="/logo.svg" alt="Logo" width={72} height={16} />
          <div>
            <h2 className='text-2xl max-sm:text-lg'>ChoosEquality</h2>
            <p className='text-sm max-sm:text-xs'>Education For All</p>
          </div>
        </div>


        <ul className='flex gap-4 items-center lg:flex-row lg:ml-auto w-full lg:w-auto lg:justify-end lg:gap-6 mt-4 lg:mt-0 max-lg:justify-center max-sm:text-xs'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Projects">Projects</Link></li>
          <li><Link href="/Team">Team</Link></li>
          <li><Link href="/News">News</Link></li>
          <li><Link href="/Contact">Contact</Link></li>

          <div className='flex gap-1 max-sm:hidden'>
            <Image src="/Login.svg" alt="Login Icon" width={32} height={16} />
            <button>Log in</button>
          </div>
        </ul>

      </nav>

    </div>
  )
}
