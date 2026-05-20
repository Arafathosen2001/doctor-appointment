import React from 'react';
import { auth } from '../lib/auth';
import { headers } from 'next/headers';

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
        <div className='container'>
            <h1>Dashbord</h1>

            {
                data.length === 0 ? (<><h1>No Data</h1></>) :
                    (
                        data.map(doct => <h1 key={doct._id} > {doct.doctorName }</h1>)
                    )
            }
        </div>
    );
};

export default Dashboard;