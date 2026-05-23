"use client"

import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { useRouter } from 'next/navigation';
import { FaHeartbeat } from 'react-icons/fa';
import { authClient } from '@/app/lib/auth-client';

const NavBar2 = () => {

    const router = useRouter();

    const {
        data: session,
        isPending
    } = authClient.useSession();

    const userA = session?.user;
    // console.log(userA   )

    const handelSignOut = async () => {
        await authClient.signOut();
        alert("Sign out successfully");
        router.push("/signin");
    }

    return (
        <div className="bg-base-200 shadow-sm">
            <div className="navbar container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink href={'/'}>Home</NavLink></li>
                            <li><NavLink href={'/all-doctors'}>All Appointment</NavLink></li>
                            <li><NavLink href={'/dashboard'}>Dashboard</NavLink></li>
                            {
                                userA && <Button
                                    onClick={handelSignOut}
                                    variant='outline'
                                    className='btn border clt'
                                >
                                    Log Out
                                </Button>
                            }
                            
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href={'/'} className='text-[#00D2C4] text-2xl'>
                            <FaHeartbeat />
                        </Link>

                        <Link href={'/'}>
                            <span className="text-2xl font-bold tracking-wide">
                                Health<span className="text-[#00D2C4]">Link</span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='flex justify-between items-center gap-3'>
                        <li><NavLink href={'/'}>Home</NavLink></li>
                        <li><NavLink href={'/all-doctors'}>All Appointment</NavLink></li>
                        <li><NavLink href={'/dashboard'}>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='flex justify-between items-center gap-3'>

                        {isPending ? (
                            <h1>Loading...</h1>
                        ) : userA ? (
                            <>
                                <Avatar>
                                    <Avatar.Image alt={userA.name} src={userA.image} />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar>
                                <Button
                                    onClick={handelSignOut}
                                    variant='outline'
                                    className='btn border clt hidden lg:flex'
                                >
                                    Log Out
                                </Button>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink href='/signin'>
                                        <Button variant='outline' className='btn border clt'>
                                            Login
                                        </Button>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink href='/signup'>
                                        <Button variant='outline' className='btn border clt hidden lg:flex'>
                                            Sign Up
                                        </Button>
                                    </NavLink>
                                </li>
                            </>
                        )}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar2;