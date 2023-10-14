import React from 'react';

const reset = () => {
    return (
        <div>
            <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full border border-indigo-600">
        <h1 class="text-center text-2xl font-bold mb-6">Change Password</h1>
        <form>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email Address
                </label>
                <input class="outline-none focus:border-indigo-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    New Password
                </label>
                <input class="appearance-none border rounded outline-none focus:border-indigo-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    Confirm Password
                </label>
                <input class="outline-none focus:border-indigo-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" />
            </div>
            
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full mt-6" type="submit">
                Reset Password
            </button>
        </form>
    </div>
</div>
        </div>
    );
};

export default reset;