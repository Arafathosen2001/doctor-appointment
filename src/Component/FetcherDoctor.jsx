import React from 'react';
import DoctorCard from './DoctorCard';

const FetcherDoctor = async () => {

    let doctors = [];

    try {

        const res = await fetch(
            'http://localhost:8000/doctors',
            {
                cache: 'no-store'
            }
        );

        doctors = await res.json();

    } catch (error) {
        console.log(error);
    }

    return (
        <div className='container py-10'>
            <h1>Our Top Doctors</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                {
                    doctors?.slice(0, 3).map((doctor) => (
                        <DoctorCard
                            key={doctor._id}
                            doctor={doctor}
                        />
                    ))
                }

            </div>
        </div>
    );
};

export default FetcherDoctor;