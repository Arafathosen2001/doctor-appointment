import { Card } from "@heroui/react";
import Image from "next/image";
import { UpdateAppointmentModal } from "./UpdateAppointmentModal";
import { serverSession } from "@/app/lib/data";
import { DeleteButton } from "./DeleteButton";

export const BokingDoctorCard = async ({ doct }) => {
    const sess = await serverSession();

    return (
        <Card className="w-full max-w-3xl mx-auto p-4 md:p-5 rounded-3xl shadow-lg border">

            <div className="flex flex-col sm:flex-row gap-8 md:gap-16 ">

                <div className="relative w-full sm:w-[180px] h-[220px] sm:h-[180px] overflow-hidden rounded-2xl shrink-0">
                    <Image
                        alt="Doctor"
                        src={doct.doctorImage}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-5">

                    <div className="space-y-3">
                        <h1 className="text-2xl md:text-3xl font-bold">
                            {doct.doctorName}
                        </h1>

                        <div className="space-y-1">
                            <p className="text-sm md:text-base font-medium clt break-words">
                                Patient Name: {doct.patientName}
                            </p>

                            <p className="text-sm md:text-base text-gray-500">
                                Booking Date: {doct.BokingDate}
                            </p>
                        </div>
                    </div>

                    <div className="flex  gap-3">
                        <UpdateAppointmentModal doct={doct} />
                        <DeleteButton data={doct} />
                    </div>

                </div>
            </div>
        </Card>
    );
};