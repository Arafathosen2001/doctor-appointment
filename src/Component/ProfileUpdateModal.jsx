import { MdOutlineModeEditOutline } from 'react-icons/md';
import { Button, FieldError, Form, Input, Label, Modal, Spinner, Surface, TextField } from "@heroui/react";

import { FaUserCog } from 'react-icons/fa';
import { authClient } from '@/app/lib/auth-client';

const ProfileUpdateModal = ({ handleEdit }) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // console.log(data);


        const { data: res, error } = await authClient.updateUser({
            name: data.name,
            image: data.image,
            redirect: "/profile",
        })
        if (error) {
            alert(`${error.message}`);
        }
        alert(`Update Successful`); 
    };

    return (
        <div className="">
            <Modal>
                <Button variant="secondary">Update</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                </Modal.Icon>
                                <Modal.Heading>Contact Us</Modal.Heading>
                                
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>
                                        <TextField className="w-full" name="email" type="email" variant="secondary">
                                            <Label>Email</Label>
                                            <Input placeholder="Enter your email" />
                                        </TextField>
                                        
                                    </form>
                                </Surface>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button slot="close">Send Message</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default ProfileUpdateModal;