import BookingData from "@/Component/BookingData";
import Profile from "@/Component/Profile";
import { Tabs } from "@heroui/react";
import React from 'react';

export const metadata = {
    title: "Dashboard",
    description: "Learn more about our company",
};
const Dashboard = () => {
    
    return (
        <div className='container py-20'>
            <h1 className="text-3xl font-bold mb-5">Dashboard</h1>
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