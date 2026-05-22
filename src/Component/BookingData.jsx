import { auth } from '@/app/lib/auth';
import { headers } from 'next/headers';
import React from 'react';
import { BokingDoctorCard } from './BokingDoctorCard';

const BookingData = async() => {
    const session = await auth.api.getSession({
            headers: await headers()
        })
        const userId = session?.user.id;
        // console.log(session.user.id)
        const res = await fetch(`http://localhost:8000/appointments/${userId}`);
        const data = await res.json();
        // console.log(data)
        return (
    
                <div className="space-y-3">
                    {
                        data.length === 0 ? (<><h1>No Data</h1></>) :
                            (
                                data.map(doct => <BokingDoctorCard key={doct._id} doct={doct}></BokingDoctorCard>)
                            )
                    }
                </div>
            
        );
};

export default BookingData;