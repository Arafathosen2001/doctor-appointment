import { Spinner } from "@heroui/react";

export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-[60vh]">
            <Spinner size="lg" label="Loading bookings..." />
            Loading bookings...
        </div>
    );
}