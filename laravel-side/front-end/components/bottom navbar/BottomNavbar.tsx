import React from 'react';
import Link from 'next/link'
import { BiCategory, BiHomeAlt } from 'react-icons/Bi';
import { VscAccount } from 'react-icons/Vsc';
import { HiOutlineShoppingBag } from 'react-icons/Hi';


const BottomNavbar = () => {
    return (
        <div className="flex justify-between items-center py-[0.5%] px-[8%] sticky bottom-0 bg-white shadow-inner lg:hidden">  
            <Link href="/" className="grid justify-items-center">
                <VscAccount className="text-[1.4rem] opacity-[0.75]"/>
                <h1 className="text-[1rem] text-gray-500">حسابي</h1>
            </Link>
            <Link href="/" className="grid justify-items-center relative py-2">
                <div className="absolute bg-C2 top-0 left-7 px-[0.3rem] border-transparent rounded-full text-white text-[0.7rem]">3</div>
                <HiOutlineShoppingBag className="text-[1.4rem] opacity-[0.75]"/>
                <h1 className="text-[1rem] text-gray-500">المشتريات</h1> 
            </Link>
            <Link href="/" className="grid justify-items-center">
                <BiCategory className="text-[1.4rem] opacity-[0.75]"/>
                <h1 className="text-[1rem] text-gray-500">التصنيفات</h1>
            </Link>
            <Link href="/" className="grid justify-items-center">
                <BiHomeAlt className="text-[1.4rem] opacity-[0.75]"/>
                <h1 className="text-[1rem] text-gray-500">الرئيسية</h1>
            </Link>
        </div>
    )
}

export default BottomNavbar