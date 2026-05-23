"use client";

import { authClient } from "@/app/lib/auth-client";
import { Button, Card, Select, Input, Label, ListBox, Modal, Surface, TextField, Calendar, DatePicker, DateField, Form } from "@heroui/react";
import React, { useState } from "react";
import { parseDate } from "@internationalized/date";
import { redirect } from "next/navigation";
export function UpdateAppointmentModal({ doct }) {
    const [date, setDate] = useState(
        doct?.BokingDate
            ? parseDate(doct.BokingDate.split("T")[0])
            : null
    );
    // console.log(doct)
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
        const updateData = {
            patientName: Udata.name,
            patientGender: Udata.gender,
            patientAge: Udata.age,
            patientPhoneNumber: Udata.phone,
            BokingDate: Udata.date,
        };
        if (Udata.date === "") {
            return alert('please select date')
        }
        const res = await fetch(
            `http://localhost:8000/appointments/${doct._id}`,
            {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
                body: JSON.stringify(updateData)
        })
        const data = await res.json();
        if (data) {
            alert('Update succesfull')
            redirect('/dashboard')
        }
    }
    // console.log(doctor)
    return (
        <Modal>
            <Button variant='outline' className="btn border clt">Update</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form onSubmit={onsubmit} className="flex flex-col gap-4">
                                    <TextField defaultValue={doct.patientName} isRequired className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input  placeholder="Enter your name" />
                                    </TextField>
                                    <TextField 
                                         className="w-full" name="name" type="text">
                                        <Label>Gender</Label>
                                        <select name="gender" className="w-full p-2 shadow rounded-2xl">
                                            <option value="">{doct.patientGender}</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </TextField>


                                    <TextField defaultValue={doct.patientAge} isRequired className="w-full" name="age" type="tel">
                                        <Label>Age</Label>
                                        <Input placeholder="Enter your Age" />
                                    </TextField>
                                    <TextField defaultValue={doct.patientPhoneNumber} isRequired className="w-full" name="phone" type="tel">
                                        <Label>Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    <DatePicker value={date}
                                        onChange={setDate} className="w-full" name="date">
                                        <Label>Date</Label>
                                        <DateField.Group fullWidth>
                                            <DateField.Input >{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
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
                                        <Button type="submit" className={'w-full'}>Update</Button>
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