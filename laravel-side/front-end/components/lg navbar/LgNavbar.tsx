'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/Io'
import { BiSolidCategory } from 'react-icons/Bi'

const LgNavbar = () => {

  const [option, setOption] = useState(false)
  
  return (
    <div className="xs:hidden lg:flex justify-between items-center pr-[6%] pl-[5%] py-2 bg-white border border-b-gray-200 border-x-transparent border-t-transparent">
        <div className="flex items-center gap-x-5">
            <Link href="/">من نحن</Link>
            <Link href="/">تسجيل دخول</Link>
            <Link href="/">إنشاء حساب جديد</Link>
            <Link href="/">رؤيتنا</Link>
            <Link href="/">تواصل معنا</Link>
        </div>
        <div className="grid relative bg-C3 py-1">
            <div className="flex items-center gap-x-28 px-3">
                <IoMdArrowDropdown onClick={() => setOption(!option)} className="text-2xl cursor-pointer opacity-[0.8]"/>
                <div className="flex items-center gap-x-3">
                    <h1 className="text-xl">جميع الفئات</h1>
                    <BiSolidCategory />
                </div> 
            </div>
            { option &&
            <div className="grid absolute top-11 shadow-lg w-[16.75rem] bg-red-200">
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>الإلكترونيات و الموبايلات</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>الجمال و العطور</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>الأزياء</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>المنزل والمطبخ</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>الرياضة و الأنشطة الخارجية</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>الألعاب</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>منتجات الأطفال</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>الصحة و التغذية</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>المأكولات و لوازم المنزل</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>لوازم السيارات</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>أدوات و لوازم المنزل</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>لوازم الحيوانات الأليفة</Link>
                <Link href="/" className="flex justify-end bg-white hover:bg-gray-200 pr-4 py-[0.50rem]" onClick={() => setOption(!option)}>القرطاسية و مستلزمات الكتب</Link>
            </div>
            }
        </div>
    </div>
  )
}

export default LgNavbar