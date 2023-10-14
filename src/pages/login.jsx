import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isLoggedIn } from "@/redux/chatSlice/chatSlice";
import { useLoginUserMutation } from "@/redux/chatSlice/chatApi";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function login() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useRouter()
    const dispatch = useDispatch()

    const [loginUser, { data: loginData, isSuccess, isLoading, error, isError }] = useLoginUserMutation()

    console.log('login error', error)

    console.log({ loginData })

    const onSubmit = data => {
        loginUser(data)
        console.log("mamun", data)
    }
    


    useEffect(() => {
        if (isSuccess && !isLoading) {
            navigate.push('/')
            dispatch(isLoggedIn(loginData))
            toast("successfully logged in")
        }
        if (isError && !isLoading) {
            toast.error(error?.data?.detail || 'something went wrong')
        }
    }, [isLoading])
  return (
    <div>
  
  <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-lg m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 w-full p-6 sm:p-12">
          
          <div className=" ">
          <section className="flex items-center justify-center h-screen font-poppins">
      <div className="flex-1">
        <div className="px-0 mx-auto max-w-7xl lg:px-4">
          <div className="relative">
            <div className="relative px-4 py-4 shadow-lg dark:bg-gray-900 md:py-11 sm:px-8 border rounded-3xl border-indigo-500">
              <div className="max-w-lg mx-auto text-center">
                <a href="#" className="inline-block mb-4 text-blue-900 dark:text-gray-400 lg:mb-7">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                    className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                </a>
                <h2 className="mb-4 text-2xl font-bold text-gray-700 lg:mb-7 md:text-5xl dark:text-gray-300">
                  Login your account
                </h2>
                <p className="text-gray-500 dark:text-gray-400">Your credentials here</p>
                
                <form onSubmit={handleSubmit(onSubmit)}
                 className="mt-4 lg:mt-7">
                  <div>
                    <input
                      type="email"
                      className="w-full px-4 py-2 mt-2 bg-white rounded-lg lg:py-2 dark:text-gray-300 border-2 border-gray-200 outline-none focus:border-indigo-500 "
                      {...register("email", { required: { value: true, message: "Email is required" } })}
                      name="email"
                      placeholder="Enter your email"
                    />
                    {errors.email?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                  </div>
                  <div className="mt-4 lg:mt-7">
                    <div>
                      <div>
                        <input
                          type="password"
                          className="w-full px-4 py-2 bg-white rounded-lg lg:py-2 dark:text-gray-300 border-2 border-gray-200 outline-none focus:border-indigo-500"
                          {...register("password", { required: { value: true, message: "Password field is required" } })}
                          name="password"
                          placeholder="Enter password"
                        />
                      {errors.password?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between mt-4 lg:mt-7">
                    <label htmlFor="" className="flex dark:text-gray-300">
                      <input type="checkbox" className="mt-1 mr-4" />
                      <span className="text-sm">Remember me</span>
                    </label>
                    <Link href="/resetpassword" className="mt-2 text-sm font-semibold text-blue-500 lg:mt-0 dark:text-blue-300 hover:underline">
                      forgot password?
                    </Link>
                  </div>
                  <button
                    className="w-full py-2 text-lg font-bold text-gray-300 uppercase bg-blue-700 rounded-md lg:mt-7 mt-7 dark:text-gray-300 dark:bg-blue-700 px-11 md:mt-7 hover:bg-blue-900 dark:hover:bg-blue-900"
                    type="submit">
                    LOGIN
                  </button>
                  <p className="mt-4 text-xs text-gray-700 lg:mt-7 dark:text-gray-400 lg:text-base">
                    Need an account?
                    <Link href="/signup" className="font-semibold text-blue-400 hover:text-blue-600">
                      Create an account
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
         
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"
            }}
          >
          </div>
        </div>
      </div>
    </div>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default login;
