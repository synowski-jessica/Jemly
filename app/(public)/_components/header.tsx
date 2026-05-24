"use client";

import Image from 'next/image'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { PrimaryLink } from '@/app/components/button/primaryLink';
import Link from 'next/link';

export default function Header () {
    const [click, setClick]= useState(false);
    const handleClick=()=>setClick(!click)

    return (
        <>
            <header className="bg-bg-primary p-4 shadow-sm  fixed top-0 w-full z-20">
                <nav className='flex justify-between items-center text-text-secondary'>
                    <Image src="/logo.svg" alt="logo jemly" 
                        width={50}
                        height={50}
                        loading="eager"
                        className='w-15 lg:w-32'
                        style={{ height: 'auto' }}/>
                    <div className='hidden lg:block'>
                        <ul className='flex gap-6'>
                            <li>
                                <Link href='/#accueil' onClick={handleClick} className='hover:underline'>Accueil</Link>
                            </li>
                            <li>
                                <Link href='/#services' onClick={handleClick} className='hover:underline'>Services</Link>
                            </li>
                            <li>
                                <Link href='/#creations' onClick={handleClick} className='hover:underline'>Créations</Link>
                            </li>
                            <li>
                                <Link href='/#apropos' onClick={handleClick} className='hover:underline'>A propos</Link>
                            </li>
                            <li>
                                <PrimaryLink label='On se lance ?' link='/#contact' onclick={handleClick}/>
                            </li>
                        </ul>
                    </div>
                    <button className='block lg:hidden text-2xl' name="menu de la navbar" onClick={(e) => { e.stopPropagation(); handleClick(); }}>
                        <RxHamburgerMenu className='text-2xl' />
                    </button>
                </nav>
            </header>

            {click && (
                <>
                    <div 
                    className='fixed inset-0 z-20'
                    onClick={() => setClick(false)}
                    />
                    
                    <div className='fixed right-0 w-full z-30 lg:hidden'>
                        <ul className='flex flex-col items-center gap-2 right-0 absolute top-13.5 z-40  bg-bg-primary w-full shadow-sm py-5'>
                            <li>
                                <Link href='/#accueil' onClick={handleClick}>Accueil</Link>
                            </li>
                            <li>
                                <Link href='/#services' onClick={handleClick}>Services</Link>
                            </li>
                            <li>
                                <Link href='/#creations' onClick={handleClick}>Créations</Link>
                            </li>
                            <li>
                                <Link href='/#apropos' onClick={handleClick}>A propos</Link>
                            </li>
                            <li className='py-2'>
                                <PrimaryLink label='On se lance ?' link='/#contact' onclick={handleClick}/>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </>
    )
}