"use client";

import { useState } from "react";
import DoctorCard from "./DoctorCard";
import { InputGroup, Label, TextField } from "@heroui/react";
import { BiGlobe } from "react-icons/bi";
import { FaSearchengin } from "react-icons/fa";

const DoctorSearch = ({ doctors }) => {
    const [search, setSearch] = useState("");

    const filteredDoctors = doctors.filter(
        (doctor) =>
            doctor.name.toLowerCase().includes(search.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="my-6 w-full flex flex-col md:flex-row gap-5 justify-center items-center">
                <h1 className="text-3xl font-bold mb-5">
                    <span className="clt">A</span>ll D<span className="clt">o</span>ct<span className="clt">o</span>r<span className="clt">s</span>
                </h1>
                <div className="border rounded-lg flex justify-center items-center flex-1">
                    <input
                        type="text"
                        placeholder="Search doctor name/specialty..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-lg px-4 py-2 "

                    />
                    <FaSearchengin className="text-2xl mr-4 clt" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                {filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor._id} doctor={doctor} />
                ))}
            </div>
        </>
    );
};

export default DoctorSearch;