'use client'
import Link from 'next/link'
import React from 'react'

const data = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Projects', url: '#projects' },
  { id: 3, title: 'Education', url: '#education' },
  { id: 5, title: 'About', url: '#about' },
  { id: 6, title: 'Contact', url: '#contact' },
  { id: 4, title: 'Blog', url: '/blog' },
]

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-[6px] text-white h-[100px]">
      <div>
        <Link href="/" className="text-lg font-semibold">
          Sanjeet
        </Link>
      </div>

      <div className="flex space-x-4 items-center">
        {data.map((item) => {
          const isHash = item.url.startsWith('#');
          return isHash ? (
            <a key={item.id} href={item.url} className="hover:text-blue-400">
              {item.title}
            </a>
          ) : (
            <Link key={item.id} href={item.url} className="hover:text-blue-400" scroll={false}>
              {item.title}
            </Link>
          );
        })}

        <button
          className="p-[5px] border-none bg-[#53c28b] text-white cursor-pointer rounded-sm"
          onClick={() => {
            console.log('Logout clicked')
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
