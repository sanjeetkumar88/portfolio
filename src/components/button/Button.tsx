import Link from 'next/link';
import React from 'react'



interface ButtonProps {
    text: string;
    url: string;
}

function Button({ text, url }: ButtonProps) {

    return (
        <Link href={url} >
            <button className='w-fit px-6 py-3 bg-[#53c28b] text-white rounded-lg hover:bg-green-200 transition duration-300 cursor-pointer'>{text}</button>
        </Link>
    )
}

export default Button
