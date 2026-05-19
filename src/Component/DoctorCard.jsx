import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DoctorCard = ({ doctor }) => {
    console.log(doctor)
    return (
        <div>
            <Card className=" border">
                <div className="flex gap-5">
                    <div className='w-xs h-52'>
                        <Image
                            src={doctor.image}
                            alt='doctor'
                            height={300}
                            width={300}
                            className='rounded-2xl'
                        />
                    </div>
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold">{ doctor.name}</h2>
                        <p className="text-xl font-semibold">{doctor.specialty}</p>
                        <p className="clt">{doctor.availability}</p>
                        <div className="">
                            <Link href={`/all-doctors/${doctor._id}`}><Button variant='outline' className="btn border clt">View Detalise</Button></Link>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DoctorCard;