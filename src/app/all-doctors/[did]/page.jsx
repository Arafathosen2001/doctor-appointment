
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
        <div className="container mx-auto px-3 md:px-5 py-10">
            <Card className="border rounded-3xl p-4 md:p-8">

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Image
                            src={doctor.image}
                            alt="doctor"
                            width={400}
                            height={400}
                            className="w-full max-w-[320px] h-[250px] sm:h-[320px] object-cover rounded-3xl"
                        />
                        <div className="mt-5 space-y-2">
                            <h1 className="text-2xl md:text-3xl font-bold">
                                {doctor.name}
                            </h1>
                            <h1 className="text-base md:text-lg text-gray-500">
                                {doctor.specialty}
                            </h1>
                            <h1 className="flex items-center justify-center lg:justify-start gap-1 text-lg font-medium">
                                Top
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                            </h1>
                        </div>
                    </div>

                    <div className="w-full lg:w-[65%] space-y-5">

                        <h2 className="text-3xl md:text-4xl font-bold clt">
                            {doctor.name}
                        </h2>

                        <p className="text-lg md:text-xl">
                            Specialty:{" "}
                            <span className="clt font-medium">
                                {doctor.specialty}
                            </span>
                        </p>

                        <p className="text-sm md:text-base leading-7 text-gray-600">
                            {doctor.description}
                        </p>

                        <p className="text-lg md:text-xl font-semibold">
                            Experience:{" "}
                            <span className="clt">
                                {doctor.experience}
                            </span>
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className=" rounded-2xl p-4">
                                <p className="text-xl md:text-2xl font-bold mb-2">
                                    Location
                                </p>

                                <p className="clt flex items-center gap-2 text-sm md:text-base">
                                    <CiLocationOn />
                                    {doctor.location}
                                </p>
                            </div>

                            <div className=" rounded-2xl p-4">
                                <p className="text-xl md:text-2xl font-bold mb-2">
                                    Hospital
                                </p>

                                <p className="clt flex items-center gap-2 text-sm md:text-base">
                                    <CiHospital1 />
                                    {doctor.hospital}
                                </p>
                            </div>

                        </div>

                        <div className=" rounded-2xl p-4">
                            <p className="text-xl md:text-2xl font-bold mb-2">
                                Available
                            </p>

                            <p className="clt text-sm md:text-base">
                                {doctor.availability}
                            </p>
                        </div>

                        <p className="text-2xl md:text-3xl font-semibold">
                            Fee:{" "}
                            <span className="clt">
                                ${doctor.fee}
                            </span>
                        </p>

                        <div className="pt-3">
                            <AppointmentModal doctor={doctor} />
                        </div>

                    </div>
                </div>
            </Card>
        </div>
    );
};

export default DoctorDeatilesPage;