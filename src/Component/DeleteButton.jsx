"use client"

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export function DeleteButton({ data }) {
    const { _id } = data;
    const handelDeleteButton = async () => {
        // console.log('okkkkk')
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        toast.success('Delete successful');
        redirect('/dashboard');
    };
    return (
        <AlertDialog>
            <Button variant="danger" className="">Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>Booking</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handelDeleteButton} slot="close" variant="danger">
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}