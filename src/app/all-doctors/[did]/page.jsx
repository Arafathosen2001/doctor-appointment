
import { AppointmentModal } from '@/Component/AppointmentModal';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiHospital1,  CiLocationOn } from 'react-icons/ci';
import { FcRating } from 'react-icons/fc';

const DoctorDeatilesPage = async({ params }) => {
    const { did } = await params;
    const res = await fetch(`http://localhost:8000/doctors/${did}`)
    const doctor = await res.json();
    // console.log(doctor)
    return (
        <div className='container py-10'>
            <Card className=" border">
                <div className="flex gap-5">
                    <div className=''>
                        <Image
                            src={doctor.image}
                            alt='doctor'
                            height={300}
                            width={300}
                        className='rounded-3xl'/>
                        <h1 className='text-2xl font-semibold'>{doctor.name}</h1>
                        <h1 className=''>{doctor.specialty}</h1>
                        <h1 className='flex items-center'>Top <FcRating /><FcRating /><FcRating /><FcRating /><FcRating /></h1>
                    </div>
                    <div className="space-y-3 pl-10">
                        <h2 className="text-3xl font-bold clt">{doctor.name}</h2>
                        <p className="text-xl">Specialty: <span className="clt">{doctor.specialty}</span></p>
                        <p>{doctor.description}</p>
                        <p className="text-xl font-semibold">Experience: <span className="clt">{doctor.experience}</span></p>
                        <div className="flex justify-between items-center gap-10">
                            <div className="">
                                <p className="text-3xl font-bold">Location</p>
                                <p className=" clt flex items-center"><CiLocationOn /> {doctor.location}</p>
                            </div>
                            <div className="">
                                <p className="text-3xl font-bold">Hospital</p>
                                <p className="clt flex items-center"><CiHospital1 /> {doctor.hospital}</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="text-3xl font-bold">Availabile</p>
                            <p className="clt">{doctor.availability}</p>
                        </div>
                        <p className="text-2xl font-semibold">Fee: <span className="clt">${doctor.fee}</span></p>
                        <div className="">
                            <AppointmentModal doctor={doctor}></AppointmentModal>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DoctorDeatilesPage;