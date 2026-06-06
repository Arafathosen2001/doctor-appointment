"use client";
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Button, FieldError, Form, Input, Label, Modal, Spinner, Surface, TextField } from "@heroui/react";
import { ImProfile } from "react-icons/im";
import { authClient } from '@/app/lib/auth-client';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';

const ProfileUpdateModal = () => {
    const { data: session, status, isPending } = authClient.useSession();
        const user = session?.user;
        // console.log(user);
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
            redirect("/dashboard");
        }
        if (error) {
            toast.error(`${error.message}`);
        }
    };

    return (
            <Modal>
                <Button variant="soft" className={'clt border'}>Update Profile</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <ImProfile />
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
                                               
                                            />
                                            <FieldError />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type='submit' >Update</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                            
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
       
    );
};

export default ProfileUpdateModal;