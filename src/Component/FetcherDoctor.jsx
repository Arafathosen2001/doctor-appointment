import React from 'react';
import DoctorCard from './DoctorCard';

const FetcherDoctor = async() => {
    const res = await fetch('http://localhost:8000/doctors');
    const doctors = await res.json();
    console.log(doctors)
    return (
        
            <div className='container py-10'>
                <h1>Our Top Doctors</h1>
                <div className="grid grid-cols-3 gap-3">
                    {
                        doctors.slice(0,3).map(doctor => <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>)
                    }
                </div>
            </div>
        
    );
};

export default FetcherDoctor;