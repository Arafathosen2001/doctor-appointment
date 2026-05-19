import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaHeartbeat, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 
const Footer = () => {
    return (
        <footer className="bg-[#0B192C] text-gray-300 pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">

               
                <div className="md:col-span-1 space-y-4">
                    <div className="flex items-center">
                        <Link href={'/'} className='text-[#00D2C4] text-2xl'><FaHeartbeat /></Link>
                        <Link href={'/'}><span className="text-2xl font-bold tracking-wide">
                            Health<span className="text-[#00D2C4]">Link</span>
                        </span></Link>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        We are always here to take proper care of your health. Book appointments with the best doctors in the country easily and safely from the comfort of your home.
                    </p>
                </div>

                
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#00D2C4] pl-3">
                        Required Links
                    </h3>
                    <ul className="space-y-2.5 text-sm">
                        <li>
                            <Link href="/" className="hover:text-[#00D2C4] transition-colors duration-300">Home</Link>
                        </li>
                        <li>
                            <a href="/all-appointments" className="hover:text-[#00D2C4] transition-colors duration-300">All Doctor</a>
                        </li>
                        <li>
                            <a href="/dashboard" className="hover:text-[#00D2C4] transition-colors duration-300">User Dashboard</a>
                        </li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4 border-l-4 border-[#00D2C4] pl-3">
                        Expert Category
                    </h3>
                    <ul className="space-y-2.5 text-sm text-gray-400">
                        <li>Cardiology (heart disease)</li>
                        <li>Neurology (Brain and Nerves)</li>
                        <li>Pediatrics (childrens diseases)</li>
                        <li>Dermatology (skin diseases)</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-white text-lg font-semibold border-l-4 border-[#00D2C4] pl-3">
                        Contact
                    </h3>
                    <p className="text-sm text-gray-400">
                        Uttara, Dhaka, Bangladesh <br />
                        Hotline-Ibn Sina: 09610009612
                    </p>

                    <div className="flex items-center gap-3 pt-2">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#00D2C4] hover:text-[#0B192C] transition-all duration-300"
                        >
                            <FaFacebookF size={16} />
                        </a>
                        <a
                            href="https://x.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#00D2C4] hover:text-[#0B192C] transition-all duration-300"
                        >
                            <FaXTwitter size={16} /> 
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#00D2C4] hover:text-[#0B192C] transition-all duration-300"
                        >
                            <FaLinkedinIn size={16} />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-[#00D2C4] hover:text-[#0B192C] transition-all duration-300"
                        >
                            <FaYoutube size={16} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} HealthLink. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;