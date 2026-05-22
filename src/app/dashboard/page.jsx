import BookingData from "@/Component/BookingData";
import Profile from "@/Component/Profile";
import { Tabs } from "@heroui/react";
import React from 'react';

const Dashboard = async () => {
    return (
        <div className='container py-20'>
            <h1>Dashbord</h1>
            <Tabs className="w-full">
                <Tabs.ListContainer>
                    <Tabs.List aria-label="Options">
                        <Tabs.Tab id="overview">
                            My Booking
                            <Tabs.Indicator />
                        </Tabs.Tab>
                        <Tabs.Tab id="analytics">
                            Profile
                            <Tabs.Indicator />
                        </Tabs.Tab>
                       
                    </Tabs.List>
                </Tabs.ListContainer>
                <Tabs.Panel className="pt-4" id="overview">
                    <BookingData></BookingData>
                </Tabs.Panel>
                <Tabs.Panel className="pt-4" id="analytics">
                    <Profile></Profile>
                </Tabs.Panel>
                
            </Tabs>
            
        </div>
    );
};

export default Dashboard;