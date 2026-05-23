"use client";
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Button, FieldError, Form, Input, Label, Modal, Spinner, Surface, TextField } from "@heroui/react";

import { FaUserCog } from 'react-icons/fa';
import { authClient } from '@/app/lib/auth-client';
import { redirect } from 'next/navigation';

const ProfileUpdateModal = () => {
    const { data: session, status, isPending } = authClient.useSession();
        const user = session?.user;
        console.log(user);
    const onSubmit = async (e) => {
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());


        const { data: res, error } = await authClient.updateUser({
            name: data.name,
            image: data.imageUrl,
            redirect: "/dashboard",
        })
        if (error) {
            alert(`${error.message}`);
        }
        alert(`Update Successful`);
    };

    return (
        <div className="">
            <Modal>
                <Button variant="soft" className={'clt border'}>Update Profile</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                </Modal.Icon>
                                <Modal.Heading>Update Your Profile</Modal.Heading>

                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        <TextField isRequired defaultValue={user?.name} className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>
                                        <TextField isDisabled defaultValue={user?.email} className="w-full" name="email" type="email" variant="secondary">
                                            <Label>Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>
                                        <TextField isRequired name="imageUrl">
                                            <Label>Image URL</Label>
                                            <Input
                                                type="url"
                                                placeholder="https://example.com/bali-paradise.jpg"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type='submit' slot="close">Update</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                            
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default ProfileUpdateModal;