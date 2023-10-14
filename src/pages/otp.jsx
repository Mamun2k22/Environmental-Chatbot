import Link from 'next/link';
import React from 'react';

function OTPVerificationForm() {
    return (
        <div className="max-w-md mx-auto border border-indigo-600  mt-20 rounded">
            <form className="shadow-md px-4 py-6 ">
            <h1 class="text-center text-2xl font-bold mb-6">Enter your OTP</h1>
                <div className="flex justify-center gap-2 mb-6">
                    
                    <input
                        className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-indigo-500"
                        type="text"
                        maxLength="1"
                        pattern="[0-9]"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        required
                    />
                    <input
                        className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-indigo-500"
                        type="text"
                        maxLength="1"
                        pattern="[0-9]"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        required
                    />
                    <input
                        className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-indigo-500"
                        type="text"
                        maxLength="1"
                        pattern="[0-9]"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        required
                    />
                    <input
                        className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-indigo-500"
                        type="text"
                        maxLength="1"
                        pattern="[0-9]"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                  <Link href='/reset'>
                  <button
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Verify
                    </button></Link>
                    <a
                        className="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800 ml-4"
                        href="#"
                    >
                        Resend OTP
                    </a>
                </div>
            </form>
        </div>
    );
}

export default OTPVerificationForm;
