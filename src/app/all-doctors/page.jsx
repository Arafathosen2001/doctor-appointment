import DoctorSearch from "@/Component/DoctorSearch";

export const metadata = {
    title: "All Doctors",
    description: "Browse our list of qualified doctors",
};

const AllDoctorsPage = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`
    );

    const doctors = await res.json();

    return (
        <div className="container">
            

            <DoctorSearch doctors={doctors} />
        </div>
    );
};

export default AllDoctorsPage;