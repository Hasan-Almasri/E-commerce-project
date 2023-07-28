'use client'
import React, { useState } from 'react';
import { Drawer } from 'antd';
import Link from 'next/link'
import { PiListBold } from 'react-icons/Pi';
import { RiShoppingCartFill } from 'react-icons/Ri'
import { BiSearch } from 'react-icons/Bi'
import  { BiUser } from 'react-icons/Bi'
import  { HiOutlineShoppingBag } from 'react-icons/Hi'
import { CiLogin } from 'react-icons/Ci'
import { VscAccount } from 'react-icons/Vsc'
import { HiOutlineMail } from 'react-icons/Hi'
import { FaConnectdevelop } from 'react-icons/Fa'
import { IoIosPeople }  from 'react-icons/Io'
import LgNavbar from '../lg navbar/LgNavbar';

const Navbar = () => {
  
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [search, setSearch] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer2 = () => {
    setOpen2(true);
  };

  const onClose2 = () => {
    setOpen2(false);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center py-[0.8rem] pr-[6%] xs:pl-[3%] lg:pl-[4.3%] bg-white">  
          <div className="flex justify-between items-center gap-x-3">
            <div className="relative xs:p-[0.45rem] lg:p-[0.7rem] lg:bg-gray-100 lg:border lg:rounded-full lg:border-transparent">
              <div className="absolute bg-C2 top-0 right-0 border-transparent rounded-full px-[0.30rem] text-white text-[0.7rem]">3</div>
              <HiOutlineShoppingBag className="text-[1.4rem] opacity-[0.5] cursor-pointer"/> 
            </div>
            <BiUser className="text-[1.4rem] opacity-[0.5] cursor-pointer lg:bg-gray-200 lg:border lg:border-transparent lg:rounded-full lg:text-[2.8rem] lg:p-[0.5rem]"/> 
            <BiSearch className="text-[1.4rem] opacity-[0.5] cursor-pointer lg:hidden" onClick={showDrawer2}/>
          </div> 
          <div className="xs:hidden lg:flex justify-center relative">
            <input type="text" placeholder="ما الذي تبحث عنه؟" className="lg:w-[34rem] xl:w-[40rem] border border-gray-500 rounded-md py-2 pl-9" onChange={inputHandler}/>  
            <BiSearch className="absolute top-[0.60rem] left-2 text-xl opacity-[0.5]"/>
          </div>
          <div className="flex items-center xs:text-xl lg:text-2xl text-C1">
            <RiShoppingCartFill />
            <h1 className="font-medium">بازار</h1>
          </div>
          <PiListBold className="text-[1.4rem] opacity-[0.5] cursor-pointer lg:hidden" onClick={showDrawer}/> 
          <Drawer title="" placement="left" onClose={onClose} open={open}>
            <div className="grid items-center gap-y-6 text-[1.06rem] pl-7">
              <div className="flex items-center gap-x-2">
                <IoIosPeople className="text-xl"/> 
                <Link href="/">من نحن</Link>
              </div>
              <div className="flex items-center gap-x-2">
                <CiLogin className="text-xl"/> 
                <Link href="/">تسجيل دخول</Link>
              </div>
              <div className="flex items-center gap-x-2">
                <VscAccount className="text-xl"/> 
                <Link href="/">إنشاء حساب جديد</Link>
              </div>
              <div className="flex items-center gap-x-2">
                <FaConnectdevelop className="text-xl"/> 
                <Link href="/">رؤيتنا</Link>
              </div>
              <div className="flex items-center gap-x-2">
                <HiOutlineMail className="text-xl"/> 
                <Link href="/">تواصل معنا</Link>
              </div>
            </div>
          </Drawer>  
          <Drawer title="ابحث في بازار" placement="top" onClose={onClose2} open={open2}>
            <div className="flex justify-center relative">
              <input type="text" placeholder="ما الذي تبحث عنه؟" className="w-full border border-gray-400 rounded-md pl-9 py-2" onChange={inputHandler}/>  
              <BiSearch className="absolute top-[0.60rem] left-2 text-xl opacity-[0.5]"/>
            </div>
          </Drawer>
      </div>
      <LgNavbar />
    </div>
  )
}

export default Navbar