"use client";

import Image from 'next/image'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { PrimaryLink } from '@/app/components/button/primaryLink';

export default function Header () {
    const [click, setClick]= useState(false);
    const handleClick=()=>setClick(!click)

    return (
        <>
            <header className="bg-bg-primary p-2 shadow-sm">
                <nav className='flex justify-between items-center text-text-secondary'>
                    <Image src="/logo.png" alt="logo jemly" 
                        width={50}
                        height={50}
                        loading="eager"
                        style={{ width: 'auto', height: 'auto' }}/>
                    <div className='hidden lg:block'>
                        <ul className='flex gap-6'>
                            <li>
                                <a href='#accueil' onClick={handleClick} className='hover:underline'>Accueil</a>
                            </li>
                            <li>
                                <a href='#services' onClick={handleClick} className='hover:underline'>Services</a>
                            </li>
                            <li>
                                <a href='#creations' onClick={handleClick} className='hover:underline'>Créations</a>
                            </li>
                            <li>
                                <a href='#apropos' onClick={handleClick} className='hover:underline'>A propos</a>
                            </li>
                            <li>
                                <PrimaryLink label='On se lance ?' link='#contact' onclick={handleClick}/>
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
                                <a href='#accueil' onClick={handleClick}>Accueil</a>
                            </li>
                            <li>
                                <a href='#services' onClick={handleClick}>Services</a>
                            </li>
                            <li>
                                <a href='#creations' onClick={handleClick}>Créations</a>
                            </li>
                            <li>
                                <a href='#apropos' onClick={handleClick}>A propos</a>
                            </li>
                            <li className='py-2'>
                                <PrimaryLink label='On se lance ?' link='#contact' onclick={handleClick}/>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </>
    )
}