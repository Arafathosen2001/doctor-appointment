"use client";

import { authClient } from "@/app/lib/auth-client";
import {
    Button,
    FieldError,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ImProfile } from "react-icons/im";
import { FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";

const ProfileUpdateModal = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: res, error } = await authClient.updateUser({
            name: data?.name,
            image: data?.imageUrl,
        });

        if (error) {
            return toast.error(error.message);
        }

        toast.success("Profile Updated Successfully");
        router.push("/dashboard");
        router.refresh();
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-2xl mx-auto">

                <div className="flex items-center gap-3 mb-6">
                    

                    <h1 className="text-3xl font-bold">
                        Update Profile
                    </h1>
                </div>

                <div className=" shadow-xl rounded-3xl p-8 border">

                    <div className="flex flex-col items-center mb-8">

                        <div className="relative w-32 h-32 overflow-hidden rounded-full border-4 border">
                            <Image
                                src={
                                    user?.image
                                }
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h2 className="text-2xl font-semibold mt-4">
                            {user?.name}
                        </h2>

                        <p className="text-gray-500">
                            {user?.email}
                        </p>
                    </div>

                    <form
                        onSubmit={onSubmit}
                        className="space-y-5"
                    >
                        <TextField
                            isRequired
                            defaultValue={user?.name}
                            name="name"
                            variant="secondary"
                        >
                            <Label>Full Name</Label>
                            <Input placeholder="Enter your name" />
                        </TextField>

                        <TextField
                            isDisabled
                            defaultValue={user?.email}
                            name="email"
                            variant="secondary"
                        >
                            <Label>Email Address</Label>
                            <Input />
                        </TextField>

                        <TextField
                            isRequired
                            name="imageUrl"
                            defaultValue={user?.image}
                        >
                            <Label>Profile Image URL</Label>

                            <Input
                                type="url"
                                placeholder="https://example.com/profile.jpg"
                            />

                            <FieldError />
                        </TextField>

                        <div className="flex gap-3 pt-4">
                            <Button
                                variant="bordered"
                                className="flex-1 border"
                                onPress={() => router.back()}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                className="flex-1 btn border clt"
                            >
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdateModal;