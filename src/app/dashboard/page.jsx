import React from 'react';
import { auth } from '../lib/auth';
import { headers } from 'next/headers';
import { BokingDoctorCard } from '@/Component/BokingDoctorCard';

const Dashboard = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userId = session?.user.id;
    // console.log(session.user.id)
    const res = await fetch(`http://localhost:8000/appointments/${userId}`);
    const data = await res.json();
    // console.log(data)
    return (
        <div className='container py-20'>
            <h1>Dashbord</h1>

            <div className="space-y-3">
                {
                    data.length === 0 ? (<><h1>No Data</h1></>) :
                        (
                            data.map(doct => <BokingDoctorCard key={doct._id} doct={doct}></BokingDoctorCard>)
                        )
                }
            </div>
        </div>
    );
};

export default Dashboard;