"use client"

import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { useRouter } from 'next/navigation';
import { FaHeartbeat } from 'react-icons/fa';
import { authClient } from '@/app/lib/auth-client';

const NavBar = () => {

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
        <div className="shadow-sm">
            <nav className='container flex justify-between items-center py-2'>

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

                <ul className='flex justify-between items-center gap-3'>
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/all-doctors'}>All Appointment</NavLink></li>
                    <li><NavLink href={'/dashboard'}>Dashboard</NavLink></li>
                </ul>

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
                                className='btn border clt'
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
                                    <Button variant='outline' className='btn border clt'>
                                        Sign Up
                                    </Button>
                                </NavLink>
                            </li>
                        </>
                    )}

                </ul>
            </nav>
        </div>
    );
};

export default NavBar;