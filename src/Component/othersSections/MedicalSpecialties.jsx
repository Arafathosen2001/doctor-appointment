import {
    FaHeartbeat,
    FaBrain,
    FaChild,
    FaBone,
    FaEye,
    FaTooth
} from "react-icons/fa";

const MedicalSpecialties = () => {
    const specialties = [
        {
            icon: <FaHeartbeat className="clt"/>,
            name: "Cardiology"
        },
        {
            icon: <FaBrain className="clt"/>,
            name: "Neurology"
        },
        {
            icon: <FaChild className="clt"/>,
            name: "Pediatrics"
        },
        {
            icon: <FaBone className="clt"/>,
            name: "Orthopedics"
        },
        {
            icon: <FaEye className="clt"/>,
            name: "Ophthalmology"
        },
        {
            icon: <FaTooth className="clt"/>,
            name: "Dentistry"
        }
    ];

    return (
        <section className="container py-16">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">
                    Medical Specialties
                </h2>

                <p className="mt-3 text-gray-500">
                    Find doctors based on your healthcare needs.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                {specialties.map((specialty, index) => (
                    <div
                        key={index}
                        className="border rounded-2xl p-6 text-center hover:shadow-lg transition cursor-pointer"
                    >
                        <div className="text-4xl text-blue-500 flex justify-center mb-3">
                            {specialty.icon}
                        </div>

                        <h3 className="font-semibold">
                            {specialty.name}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MedicalSpecialties;