import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";  
import {buttonClick} from "@/constants/index";
const login = ( )=> {
    return ( 
              <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mt-10">Sign In</h1>
            <form className="max-w-md mx-auto mt-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your email" required />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your password" required />
                </div>
                <Button clickprop="loginPage" label="Sign In" variant="green" style="ButtonStyle"/>
            </form>
            <p className="text-center mt-4">
                Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Sign Up</Link>
            </p>
            <p className="text-center mt-2">
                <Link href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
            </p>
            <p className="text-center mt-2">
                <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
            </p>

        </div>
        </div>
     );
}

export default login;