"use client";

import {
    Button,
    Description,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextArea,
    TextField,
} from "@heroui/react";
import React from "react";
import { CiFloppyDisk } from "react-icons/ci";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
const SignUpPage=()=> {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const Udata = Object.fromEntries(formData.entries());
        console.log(Udata)
        const { data, error } = await authClient.signUp.email({
            name:Udata.name,
            email: Udata.email, // required
            password: Udata.password, // required
            image: Udata.imageUrl,
            rememberMe: true,
            autoSignIn: false,
        });
        console.log(data,error)
        if (data) { 
            await authClient.signOut();
            alert("User signed up:", data.message);
            redirect("/signin");
        };
        if (error) {
            alert(error.message);
        }
    };
    const handelGoogleSignIn = async() => {
        const data = await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    }

    return (
        <div className="container flex items-center justify-center rounded-3xl bg-surface p-6">
            <Surface className="w-xl min-w-[380px] border border-surface-variant rounded-3xl p-6">
                <Form onSubmit={onSubmit}>
                    <Fieldset className="w-full">
                        <Fieldset.Legend className="text-center">Profile Settings</Fieldset.Legend>
                        <Description className="text-center">Update your profile information.</Description>
                        <Fieldset.Group>
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }

                                    return null;
                                }}
                            >
                                <Label>Name</Label>
                                <Input placeholder="Enter your name" variant="secondary" />
                                <FieldError />
                            </TextField>
                            <TextField isRequired name="email" type="email">
                                <Label>Email</Label>
                                <Input placeholder="Enter your email" variant="secondary" />
                                <FieldError />
                            </TextField>
                            <TextField
                                isRequired
                                minLength={8}
                                name="password"
                                type="password"
                                validate={(value) => {
                                    if (value.length < 8) {
                                        return "Password must be at least 8 characters";
                                    }
                                    if (!/[A-Z]/.test(value)) {
                                        return "Password must contain at least one uppercase letter";
                                    }
                                    if (!/[0-9]/.test(value)) {
                                        return "Password must contain at least one number";
                                    }
                                    return null;
                                }}
                            >
                                <Label>Password</Label>
                                <Input placeholder="Enter your password" />
                                <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                <FieldError />
                            </TextField>
                            <TextField name="imageUrl">
                                <Label>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-2xl"
                                />
                                <FieldError />
                            </TextField>
                        </Fieldset.Group>
                        <Fieldset.Actions>
                            <Button type="submit" variant="primary" className='w-full'>
                                <CiFloppyDisk />
                                Create Account
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
                <div className="">
                    <div className="divider">OR</div>
                    <Button onClick={handelGoogleSignIn} className='w-full'><FcGoogle />Sign In With Google</Button>
                </div>
            </Surface>
        </div>
    );
}
export default SignUpPage;