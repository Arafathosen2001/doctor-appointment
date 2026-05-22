import { headers } from "next/headers";
import { auth } from "./auth";

export const serverSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    return session;
};


export const fetchBookingDataByuserId = async (userId) => {
    const res = await fetch(`http://localhost:8000/appointments/${userId}`);
    return res.json();;
};