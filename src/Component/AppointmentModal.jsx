"use client";

import { authClient } from "@/app/lib/auth-client";
import { Button, Card, Select, Input, Label, ListBox, Modal, Surface, TextField, Calendar, DatePicker, DateField, Form } from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { BiEnvelope } from "react-icons/bi";

export function AppointmentModal({ doctor }) {
    // console.log(doctor)
    const {
                data: session,
                isPending
            } = authClient.useSession();
    const user = session?.user;
    // console.log(user)
    const onsubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const Udata = Object.fromEntries(formData.entries());
        // console.log(Udata)
        const bookingDoctorData = {
            userId: user?.id,
            userEmail: user?.email,
            doctorName: doctor?.name,
            doctorImage: doctor?.image,
            patientName: Udata.name,
            patientPhoneNumber: Udata.phone,
            patientGender: Udata.gender,
            patientAge: Udata.age,
            BokingDate: Udata.date,
        }

        const res = await fetch('http://localhost:8000/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDoctorData)
        })
        const data = await res.json();
        if (data) {
            alert('Booking succesfull')
            redirect('/all-doctors')
        }
    }
    // console.log(doctor)
    return (
        <Modal>
            <Button variant='outline' className="btn border clt">Book Appointment</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <h1 className='text-2xl font-semibold'>{doctor.name}</h1>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form onSubmit={onsubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Gender</Label>
                                        <select name="gender" className="w-full p-2 shadow rounded-2xl">
                                            <option value="">Select one</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </TextField>
                                    

                                    <TextField className="w-full" name="age" type="tel">
                                        <Label>Age</Label>
                                        <Input placeholder="Enter your Age" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel">
                                        <Label>Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    <DatePicker className="w-full" name="date">
                                        <Label>Date</Label>
                                        <DateField.Group fullWidth>
                                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                            <DateField.Suffix>
                                                <DatePicker.Trigger>
                                                    <DatePicker.TriggerIndicator />
                                                </DatePicker.Trigger>
                                            </DateField.Suffix>
                                        </DateField.Group>
                                        <DatePicker.Popover>
                                            <Calendar aria-label="Event date">
                                                <Calendar.Header>
                                                    <Calendar.YearPickerTrigger>
                                                        <Calendar.YearPickerTriggerHeading />
                                                        <Calendar.YearPickerTriggerIndicator />
                                                    </Calendar.YearPickerTrigger>
                                                    <Calendar.NavButton slot="previous" />
                                                    <Calendar.NavButton slot="next" />
                                                </Calendar.Header>
                                                <Calendar.Grid>
                                                    <Calendar.GridHeader>
                                                        {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                                    </Calendar.GridHeader>
                                                    <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                                                </Calendar.Grid>
                                                <Calendar.YearPickerGrid>
                                                    <Calendar.YearPickerGridBody>
                                                        {({ year }) => <Calendar.YearPickerCell year={year} />}
                                                    </Calendar.YearPickerGridBody>
                                                </Calendar.YearPickerGrid>
                                            </Calendar>
                                        </DatePicker.Popover>
                                    </DatePicker>
                                    <Modal.Footer>
                                        <Button type="submit" className={'w-full'}>Submit</Button>
                                    </Modal.Footer>
                                </Form>
                            </Surface>
                        </Modal.Body>
                        
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}