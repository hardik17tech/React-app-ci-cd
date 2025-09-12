// src/pages/Welcome.jsx
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App Login 🚀</h1>
      <p className="mb-6 text-gray-600">Click below to login and continue and move on the login page</p>
      <Link
        to="/login"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go to Login
      </Link>
    </div>
  );
}
