"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export const NavLink = ({ href, children }) => {
    const path = usePathname();
    // console.log(path);
    return (
        <Link className={`${path == href && 'text-[#00D2C4] border-b-2 border-t-2 border-[#00D2C4] pb-1 rounded-sm'}`} href={href}>{children}</Link>
    );
};

export default NavLink;