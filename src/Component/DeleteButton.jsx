"use client"

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";

export function DeleteButton({ data }) {
    const { _id } = data;
    const handelDeleteButton = async () => {
        // console.log('okkkkk')
        const res = await fetch(`http://localhost:8000/appointments/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        alert('Delete susccecfull');
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
                            <AlertDialog.Heading>Delete Destination permanently?</AlertDialog.Heading>
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