import DoctorCard from '@/Component/DoctorCard';
import React from 'react';

const AllDoctorsPage = async () => {
    const res = await fetch('http://localhost:8000/doctors');
    const doctors = await res.json();
    // console.log(doctors)
    return (
        <div className='container'>
            <h1>All Doctors</h1>
            <div className="grid grid-cols-3 gap-3">
                {
                    doctors.map(doctor => <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default AllDoctorsPage;