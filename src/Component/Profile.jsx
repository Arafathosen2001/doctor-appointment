import { serverSession } from '@/app/lib/data';
import React from 'react';
import Image from 'next/image';
import ProfileUpdateModal from './ProfileUpdateModal';

const Profile = async () => {
    const session = await serverSession();
    const user = session?.user;

    return (
        <div className="container mx-auto px-3 md:px-5 py-10">

            <div className="w-full max-w-4xl mx-auto shadow-2xl rounded-3xl p-5 md:p-10 border bg-white">

                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Your Profile
                    </h1>

                    <p className="text-gray-600 mt-2 text-sm md:text-base">
                        Manage your personal information
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

                    <div className="flex justify-center w-full md:w-auto">
                        <div className="relative h-[180px] w-[180px] md:h-[220px] md:w-[220px] overflow-hidden rounded-3xl border shadow-lg">

                            <Image
                                alt="Profile Image"
                                src={user?.image}
                                fill
                                className="object-cover"
                                priority
                            />

                        </div>
                    </div>

                    <div className="flex-1 w-full space-y-2 text-center md:text-left items-center">

                        <div className=" rounded-2xl">
                            <h1 className="text-lg md:text-xl font-bold mb-1">
                                Name
                            </h1>

                            <p className="text-gray-600 break-words">
                                {user?.name}
                            </p>
                        </div>

                        <div className=" rounded-2xl">
                            <h1 className="text-lg md:text-xl font-bold mb-1">
                                Email
                            </h1>

                            <p className="text-gray-600 break-words">
                                {user?.email}
                            </p>
                        </div>

                        <div className="pt-2 flex justify-center md:justify-start">
                            <ProfileUpdateModal />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;