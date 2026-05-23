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
import Link from "next/link";
const SignInPage=()=> {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const Udata = Object.fromEntries(formData.entries());
        // console.log(Udata)
        const { data, error } = await authClient.signIn.email({
            email: Udata.email, // required
            password: Udata.password, // required
            rememberMe: true,
        });
        if (data) { 
            alert("Login Successfull");
            redirect("/");
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
        <div className="container flex items-center justify-center  p-10">
            <Surface className="w-xl min-w-[320px] border border-surface-variant rounded-3xl p-6">
                <Form onSubmit={onSubmit}>
                    <Fieldset className="w-full">
                        <Fieldset.Legend className="text-center text-3xl font-bold">Please Login</Fieldset.Legend>
                        <Fieldset.Group>
                        
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
                            
                        </Fieldset.Group>
                        <Fieldset.Actions>
                            <Button type="submit" variant="primary" className='w-full'>
                                <CiFloppyDisk />
                                Log In
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
                <div className="">
                    <div className="divider">OR</div>
                    <Button onClick={handelGoogleSignIn} className='w-full'><FcGoogle />Sign In With Google</Button>
                </div>
                <div className="flex justify-center items-center mt-5"><span>Dont have an account? </span>
                    <span><Link href={"/signup"} className="text-primary">Sign Up</Link></span>
                </div>
                
            </Surface>
        </div>
    );
}
export default SignInPage;