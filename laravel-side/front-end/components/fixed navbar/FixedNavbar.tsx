import { BiLogoTwitter } from 'react-icons/Bi';
import { BiLogoFacebookSquare} from 'react-icons/Bi';
import { BiLogoInstagram} from 'react-icons/Bi';
import React from 'react'
import Link from 'next/link';

const FixedNavbar = () => {
  return (
    <div className="flex justify-between items-center px-[5%] py-2 bg-C1">
        <div className="flex justify-center gap-x-2 text-[1.2rem]">
            <Link href="/">
                <BiLogoTwitter className="bg-C1 text-white"/>
            </Link>
            <Link href="/">
                <BiLogoFacebookSquare className="bg-C1 text-white"/>
            </Link>
            <Link href="/">
                <BiLogoInstagram className="bg-C1 text-white"/>
            </Link>
        </div>
        <div className="flex justify-center items-center gap-x-[5px]">
            <h1 className="text-white">شحن سريع مجاني</h1>
            <h1 className="border border-transparent rounded-full bg-C2 text-white text-[1.1rem] px-2">مميز</h1>
        </div>
    </div>
  )
}

export default FixedNavbar