import Link from "next/link";

export const metadata = {
    title: "404 - Page Not Found",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-8xl font-bold text-red-500">
                4<span className="clt">0</span>4
            </h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page <span className="clt">not</span> Found
            </h2>

            <p className="text-gray-500 mt-3 max-w-md">
                Sorry, the page you are looking for does not exist
                or has been moved.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 rounded-lg transition btn border clt"
            >
                Back To Home
            </Link>
        </div>
    );
}