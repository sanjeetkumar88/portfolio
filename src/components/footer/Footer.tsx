import React from 'react'
import Image from 'next/image'

function Footer() {
    return (
        <footer className='flex h-[50px] items-center justify-between'>
            <p>© 2025 My Portfolio</p>
            <div className='flex space-x-2'>
                <Image src="/1.png" alt="Facebook" width={15} height={15} className="relative top-[-2px] cursor-pointer opacity-0.6" />
                <Image src="/2.png" alt="Instagram" width={15} height={15} className="relative top-[-2px] cursor-pointer opacity-0.6" />
                <Image src="/3.png" alt="Twitter" width={15} height={15} className="relative top-[-2px] cursor-pointer opacity-0.6" />
                <Image src="/4.png" alt="Youtube" width={15} height={15} className="relative top-[-2px] cursor-pointer opacity-0.6" />
            </div>
        </footer>
    )
}

export default Footer
