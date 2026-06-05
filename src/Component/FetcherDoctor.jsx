import React from 'react';
import DoctorCard from './DoctorCard';

const FetcherDoctor = async () => {

   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
   const doctors = await res.json();
    // console.log(doctors);

 
    return (
        <div className='container py-10'>
            <h1 className='font-semibold text-center text-3xl my-5'>Our Top Doctors</h1>

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