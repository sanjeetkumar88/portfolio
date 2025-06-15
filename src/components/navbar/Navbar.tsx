'use client'
import Link from 'next/link'
import React from 'react'

const data = [
    {
        id: 1,
        title: 'Home',
        url: '/',
    },
    {
        id: 2,
        title: 'Blog',
        url: '/blog',
    },
    {
        id: 3,
        title: 'Portfolio',
        url: '/portfolio',
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard',
    },
    {
        id: 4,
        title: 'About',
        url: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact',
    },
    
]

function Navbar() {

    return (
        <nav className='flex justify-between items-center p-[6px]  text-white h-[100px]'>
            <div><Link href="/" className='text-lg font-semibold'>Sanjeet</Link></div>

            <div className='flex space-x-4 items-center'>
                {data.map((item) => (
                    <Link key={item.id} href={item.url}>
                        {item.title}
                    </Link>
                ))}
                <button className='p-[5px] border: none bg-[#53c28b] color-white cursor-pointer rounded-sm' onClick={() => {
                    // Handle logout logic here
                    console.log('Logout clicked');
                    
                }}>
                    Logout
                </button>
            </div>
            
        </nav>
    )
}

export default Navbar
