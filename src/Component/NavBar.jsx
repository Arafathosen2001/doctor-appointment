"use client"
// import { authClient } from '@/app/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { redirect } from 'next/navigation';
import { FaHeartbeat } from 'react-icons/fa';
const NavBar = () => {
    //     const {
    //         data: session
    //     } = authClient.useSession();
    // const user = session?.user;
    // // const { image }= user;
    // // console.log(user)
    // const handelSignOut = async() => { 
    //     await authClient.signOut();
    //     alert("Sign out successfully");
    //     redirect("/signin");
    // }
    
    return (
        <div className="shadow-2xl">
            <nav className='container mx-auto flex justify-between items-center py-2 '>
                <div className="flex justify-center items-center">
                    <Link href={'/'} className='text-[#00D2C4] text-2xl'><FaHeartbeat /></Link>
                    <Link href={'/'}><span className="text-2xl font-bold tracking-wide">
                        Health<span className="text-[#00D2C4]">Link</span>
                    </span></Link>
                </div>
            <ul className='flex justify-between items-center gap-3'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/all-doctors'}>All Appointment</NavLink></li>
            </ul>
            
            <ul className='flex justify-between items-center gap-3'>
                
                
                     <>
                        <Avatar>
                            <Avatar.Image alt="John Doe" src='' />
                            <Avatar.Fallback></Avatar.Fallback>
                        </Avatar>
                        <Button variant='outline' className={'btn border clt'}>Log Out</Button>
                    </> 
                        <>
                        <li><NavLink href='/signin' ><Button variant='outline' className={'btn border clt'}>Login</Button></NavLink></li>
                        <li><NavLink href='/signup' ><Button variant='outline' className={'btn border clt'}>Sign Up</Button></NavLink></li>
                    </>
                
            </ul>
            </nav>
        </div>
    );
};

export default NavBar;