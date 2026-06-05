"use client";
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Button, FieldError, Form, Input, Label, Modal, Spinner, Surface, TextField } from "@heroui/react";

import { FaUserCog } from 'react-icons/fa';
import { authClient } from '@/app/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useState } from 'react';

export function ProfileUpdateModal2() {
        const { data: session, status, isPending } = authClient.useSession();
            const user = session?.user;
        // console.log(user);
        const [open, setOpen] = useState(false);
        const router = useRouter();
        const onSubmit = async (e) => {
            e.preventDefault(); 
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
    
    
            const { data: res, error } = await authClient.updateUser({
                name: data.name,
                image: data.imageUrl,
                redirect: "/dashboard",
            })
            if (res) {
                toast.success("Profile updated successfully");
                setOpen(false);
                router.push("/dashboard");
            }
            if (error) {
                toast.error(`${error.message}`);
            }
        };
    return (
        <Modal>
            <Button variant='outline' className="btn border clt">Book Appointment</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            {/* <h1 className='text-2xl font-semibold'>{doctor.name}</h1> */}
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form onSubmit={onsubmit} className="flex flex-col gap-4">
                                    <TextField isRequired className="w-full" name="name" type="text">
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
                                    

                                    <TextField isRequired className="w-full" name="age" type="tel">
                                        <Label>Age</Label>
                                        <Input placeholder="Enter your Age" />
                                    </TextField>
                                    <TextField isRequired className="w-full" name="phone" type="tel">
                                        <Label>Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    
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