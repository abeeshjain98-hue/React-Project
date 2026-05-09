"use client";

import { useState } from "react"
import Signup from "../Components/Signup";
import Login from "../Components/Login";


export default function page() {
    const [tabValue, setTabValue] = useState('signup')

    function toggleBtn(value: string) {
        setTabValue(value)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h1>
                    <p className="text-gray-600">Sign in to your account or create a new one</p>
                </div>

                <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => setTabValue('login')}
                        className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${tabValue === 'login'
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-800'
                            }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setTabValue('signup')}
                        className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${tabValue === 'signup'
                            ? 'bg-white text-blue-600 shadow-sm'
                            : 'text-gray-600 hover:text-gray-800'
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {tabValue === 'login' ? (
                    <Login />
                ) : (
                    <Signup />
                )}
            </div>
        </div>
    )
}