import { serverSession } from '@/app/lib/data';
import React from 'react';
import { Button, Card } from "@heroui/react";
import Image from 'next/image';
import ProfileUpdateModal from './ProfileUpdateModal';

const Profile = async () => {
    const session = await serverSession();
    const user = session?.user;
    // console.log(session)
    return (
        <div>
            <Card className="w-4/12 mx-auto items-stretch md:flex-row justify-between gap-5">
                        <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                            <Image
                                alt="Cherries"
                                className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                                loading="lazy"
                                src={user?.image}
                                width={300}
                                height={300}
                            />
                        </div>
                <div className="flex flex-1 flex-col gap-2">
                    <div className="">
                        <h1 className="text-lg font-bold">Name</h1>
                        <p>{user?.name}</p>
                    </div>
                    <div className="">
                        <h1 className="text-lg font-bold">Email</h1>
                        <p>{user?.email}</p>
                    </div>
                    <ProfileUpdateModal></ProfileUpdateModal>
                </div>
            </Card>
        </div>
    );
};

export default Profile;