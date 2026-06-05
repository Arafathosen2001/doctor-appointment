import { FaUserMd, FaCalendarCheck, FaShieldAlt, FaHeadset } from "react-icons/fa";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FaUserMd className="text-4xl clt" />,
            title: "Verified Doctors",
            description:
                "Consult with experienced and verified healthcare professionals."
        },
        {
            icon: <FaCalendarCheck className="text-4xl clt" />,
            title: "Easy Booking",
            description:
                "Book appointments quickly with a simple and user-friendly process."
        },
        {
            icon: <FaShieldAlt className="text-4xl clt" />,
            title: "Secure Platform",
            description:
                "Your personal information and appointments remain protected."
        },
        {
            icon: <FaHeadset className="text-4xl clt" />,
            title: "24/7 Support",
            description:
                "Get assistance whenever you need help with appointments."
        }
    ];

    return (
        <section className="container py-16">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">
                    Why Choose DocAppoint?
                </h2>
                <p className="mt-3 text-gray-500">
                    A smarter way to connect patients with trusted doctors.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-2xl p-6 text-center hover:shadow-lg transition"
                    >
                        <div className="flex justify-center mb-4 text-blue-500">
                            {item.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                        </h3>

                        <p className="text-gray-500">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;