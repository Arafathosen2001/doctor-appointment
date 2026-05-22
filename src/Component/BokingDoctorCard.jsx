import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import { UpdateAppointmentModal } from "./UpdateAppointmentModal";
import { serverSession } from "@/app/lib/data";
import { DeleteButton } from "./DeleteButton";

export const BokingDoctorCard = async({ doct })=> {
    const sess = await serverSession();
    // console.log(sess)
    // console.log(doct)
    return (
        <Card className="w-8/12 mx-auto items-stretch md:flex-row">
            <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                <Image
                    alt="Cherries"
                    className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                    loading="lazy"
                    src={doct.doctorImage}
                    width={300}
                    height={300}
                />
            </div>
            <div className="flex flex-1 flex-col gap-3">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8">{doct.doctorName}</Card.Title>
                    <Button variant="danger-soft" className={'absolute top-3 right-3'}>Delete</Button>
                    <DeleteButton data={doct}></DeleteButton>
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium clt">Patient Name: {doct.patientName}</span>
                        <span className="text-xs text-muted">BokingDate: {doct.BokingDate }</span>
                    </div>
                    <UpdateAppointmentModal doct={doct}></UpdateAppointmentModal>
                </Card.Footer>
            </div>
        </Card>
    );
}