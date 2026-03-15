import { Link } from "react-router-dom";

export default function Failed() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl mb-4 text-red-600">Login Failed ❌</h1>
      <p className="mb-6">Invalid credentials. Please try again.</p>
      <Link
        to="/login"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded"
      >
        Back to Login
      </Link>
    </div>
  );
}