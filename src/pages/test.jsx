/* eslint-disable @next/next/no-img-element */
import { logOut, removeChat } from '@/redux/chatSlice/chatSlice';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Test = () => {
    const dispatch = useDispatch();
    const { isAdmin, isLogin, token } = useSelector((state) => state.chat);
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => {
        setOpen(!open);
    };

    const handleLogOUt = () => {
        dispatch(logOut());
        dispatch(removeChat());
    };

    return (
        <section className="shadow-md font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="relative flex items-center justify-between py-4">
                    <a href="" className="text-3xl font-semibold leading-none dark:text-gray-400">
                        <img className='w-auto h-16' src="https://i.ibb.co/6ysDYhD/logo.png" alt="" srcset="" />
                    </a>
                    <div className="lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 text-blue-600 border border-blue-200 rounded dark:text-gray-400 navbar-burger hover:text-blue-800 hover:border-blue-300 lg:hidden"
                            onClick={toggleSidebar}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>
                    </div>
                    <ul className={`lg:w-auto lg:space-x-12 lg:items-center lg:flex ${open ? '' : 'hidden'}`}>

                        {isAdmin && (
                            <li className="menu-item p-1 font-normal">
                                <Link href="/dashboard" className="flex items-center">
                                    Dashboard
                                </Link>
                            </li>
                        )}



                        <li>
                            <Link href="/" className="menu-item text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                                Home
                            </Link >
                        </li>
                        <li>
                            <Link href="/about" className="menu-item text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link href="/feature" className="menu-item text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                                Features
                            </Link >
                        </li>
                        <li>
                            <Link href="/product" className="menu-item text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                                Our Product
                            </Link >
                        </li>
                        {isLogin && (
                            <li className="menu-item p-1 font-normal">
                                <Link href="/chatbot" className="flex items-center">
                                    Chatbot
                                </Link>
                            </li>
                        )}
                        <li>
                            <Link href="/price" className="menu-item text-sm text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500">
                                Pricing
                            </Link >
                        </li>
                    </ul>
                    <div className="hidden lg:block">
                        {isLogin ? (
                            <Link
                                onClick={handleLogOUt}
                                href="/login"
                                className="inline-block px-4 py-3 mr-2 text-xs font-semibold leading-none text-blue-600 border border-blue-200 rounded dark:hover:border-blue-300 dark:hover:text-blue-300 dark:text-gray-400 dark:border-gray-400 hover:text-blue-700 hover:border-blue-300"
                            >
                                Log Out
                            </Link>
                        ) : (
                            <Link href="/login" className=" inline-block px-4 py-3 mr-2 text-xs font-semibold leading-none text-blue-600 border border-blue-200 rounded dark:hover:border-blue-300 dark:hover:text-blue-300 dark:text-gray-400 dark:border-gray-400 hover:text-blue-700 hover:border-blue-300">
                                Log In
                            </Link>
                        )}
                        <Link
                            href=""
                            className="menu-item inline-block px-4 py-3 mr-2 text-xs font-semibold leading-none text-gray-100 bg-blue-600 border border-blue-200 rounded dark:hover:bg-blue-400 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700"
                        >
                            Sign Up
                        </Link >
                    </div>

                </div>
                {/* Mobile Sidebar */}
                <div className={`fixed inset-0 w-full bg-gray-900 opacity-25 dark:bg-gray-400 lg:hidden ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}></div>
                <div className={`absolute inset-0 z-10 h-screen p-3 text-gray-400 duration-500 transform bg-blue-50 dark:bg-gray-800 w-80 lg:hidden lg:transform-none lg:relative ${open ? 'translate-x-0 ease-in-opacity-100' : '-translate-x-full ease-out opacity-0'}`}>
                    <div className="flex justify-between lg:">
                        <a className="p-2 text-2xl font-bold text-gray-700 dark:text-gray-400" href="#">
                            Logo
                        </a>
                        <button
                            className="p-2 text-gray-700 rounded-md dark:text-gray-400 hover:text-blue-300 lg:hidden"
                            onClick={toggleSidebar}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <ul className="px-4 text-left mt-7">
                        <li className="pb-3">
                            <Link href="/" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-100">
                                Home
                            </Link >
                        </li>
                        <li className="pb-3">
                            <Link href="/about" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">
                                About us
                            </Link >
                        </li>
                        <li className="pb-3">
                            <Link a href="/feature" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">
                                Features
                            </Link >
                        </li>
                        <li className="pb-3">
                            <Link a href="/product" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">
                                Our Product
                            </Link >
                        </li>
                        <li className="pb-3">
                            <Link a href="/price" className="text-sm text-gray-700 hover:text-blue-400 dark:text-gray-400">
                                Pricing
                            </Link >
                        </li>

                    </ul>
                    <div className="block mt-5 lg:hidden">
                        <Link
                            href="/login"
                            className="inline-block w-full px-4 py-3 mb-4 mr-2 text-xs font-semibold leading-none text-center text-blue-600 border border-blue-400 rounded dark:hover:text-blue-300 dark:text-gray-400 dark:border-gray-400 hover:text-blue-700 hover:border-blue-300"
                        >
                            Log In
                        </Link >
                        <Link
                            href="/signup"
                            className="inline-block w-full px-4 py-3 mr-2 text-xs font-semibold leading-none text-center text-gray-100 bg-blue-600 rounded dark:hover:bg-blue-400 dark:bg-blue-300 dark:text-gray-700 hover:bg-blue-700"
                        >
                            Sign Up
                        </Link >
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Test;
