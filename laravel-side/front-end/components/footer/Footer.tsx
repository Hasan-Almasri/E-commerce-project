import React from 'react'
import { RiShoppingCartFill } from 'react-icons/Ri'
import { FiPhoneCall  } from 'react-icons/Fi'
import { BiLogoFacebookSquare, BiLogoInstagram, BiLogoTwitter } from 'react-icons/Bi'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
        <div className="flex xs:flex-col md:flex-row-reverse items-center bg-C1 py-12 xs:gap-8 md:gap-0 md:justify-between xs:px-[3%] lg:px-[8%]">
            <div className="flex items-center xs:text-3xl lg:text-4xl text-white">
                <RiShoppingCartFill />
                <h1 className="font-medium">بازار</h1>
            </div>
            <div className="flex items-center xs:gap-x-4 md:gap-x-2 lg:gap-x-4 text-white">
                <div className="flex flex-col items-end">
                    <p className="xs:text-[1rem] md:text-[0.8rem] lg:text-[1rem]">لديك أسئلة؟اتصل بنا</p>
                    <p className="xs:text-[1.4rem] md:text-[1.2rem] lg:text-[1.4rem]">(+963)0935224558</p>
                </div>
                <FiPhoneCall className="xs:text-5xl md:text-3xl lg:text-4xl"/> 
            </div>
            <div className="flex flex-col items-center xs:text-[1.2rem] md:text-[1rem] lg:text-[1.2rem] text-white">
                <h1>:عنوان الشركة</h1>
                <p>الجميلية، سنتر اسكندرون</p>
                <p>مفرق جامع سعد_021/2223333</p>
            </div>
            <div className="flex justify-between xs:text-2xl lg:text-3xl xs:w-[40%] md:w-[20%] lg:w-[15%]">
                <Link href="/">
                    <BiLogoFacebookSquare className="bg-C1 text-white"/>
                </Link>
                <Link href="/">
                    <BiLogoInstagram className="bg-C1 text-white"/>
                </Link>
                <Link href="/">
                    <BiLogoTwitter className="bg-C1 text-white"/>
                </Link>
            </div>
        </div>
        <div className="flex justify-end items-center bg-C3 py-2 pr-[13%]">
            <p className="text-[1rem]">جميع الحقوق محفوظة<span className="text-[0.9rem]">-bazar.com&copy;</span></p>
        </div>
        </>
    )
}

export default Footer