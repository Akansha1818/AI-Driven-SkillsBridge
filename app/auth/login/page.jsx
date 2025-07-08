"use client";

import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const Admin = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error === "unauthenticated") {
      toast.warning("Please sign in to access.");
    } else if (error === "unauthorized") {
      toast.error("You are not authorized to access.");
    }
  }, [error]);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signIn("google", { callbackUrl: "/admin" });
    } catch (err) {
      console.error("Sign-in error:", err);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Access</h1>
        <p className="text-gray-600 mb-8">
          Sign in with your Google account.
        </p>

        <button
          onClick={handleSignIn}
          disabled={loading}
          className={`w-full flex items-center justify-center gap-3 px-6 py-3 text-neutral-600 cursor-pointer bg-gray-50 border rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-100"
          }`}
          aria-label="Sign in with Google"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          ) : (
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-google-logo-icon-download-in-svg-png-gif-file-formats--brands-pack-logos-icons-189824.png?f=webp"
              alt="Google logo"
              className="w-5 h-5"
            />
          )}
          <span className="font-medium">
            {loading ? "Signing in..." : "Sign in with Google"}
          </span>
        </button>
      </div>
    </main>
  );
};

export default Admin;
