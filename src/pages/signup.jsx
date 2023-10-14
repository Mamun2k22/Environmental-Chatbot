import Loader from "@/Components/Loader";
import { useRegisterUserMutation } from "@/redux/chatSlice/chatApi";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [registerUser, { isLoading, isSuccess, isError }] =
    useRegisterUserMutation();

  if (isLoading) <Loader />;

  const onsubmit = (data) => {
    registerUser(data);
  };

  useEffect(() => {
    if (isSuccess && !isLoading) {
      router.push("/login");
    }
  });
  return (
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">

              <aside class="">
                <div class="bg-gray-100 p-8 rounded">
                  <h2 class="font-bold text-2xl">Instructions</h2>
                  <ul class="list-disc mt-4 list-inside">
                    <li>All users must provide a valid email address and password to create an account.</li>
                    <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information</li>
                    <li>Users must not create multiple accounts for the same person.</li>
                  </ul>
                </div>
              </aside>
              <Link
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-stone-100 hover:text-teal-accent-700 bg-blue-600 px-5 py-3 rounded-full lg:mt-6 mt-6"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>

            {/* Sign up here */}
            <div className=" flex items-center justify-center lg:px-5 px-0 py-5">
              <div className="bg-white shadow  text-gray-500 rounded-3xl w-full overflow-hidden" style={{ maxWidth: '480px' }}>
                <div className="md:flex w-full">

                  <div className="w-full  py-10 px-5 md:px-10">
                    <div className="text-center mb-10">
                      <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                      <p>Enter your information to register</p>
                    </div>
                    {/* form */}
                    <form onSubmit={handleSubmit(onsubmit)}  >
                      <div className=" ">
                        <div className="w-full mx-10 mb-5 ">
                          <label htmlFor="" className="text-xs font-semibold mr-10 ">
                            Name
                          </label>
                          <div className="">
                            <div className="w-10 z-10  text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-email-outline text-gray-400 text-lg "></i>
                            </div>
                            <input
                              {...register("name", {
                                required: { value: true, message: "name is required" },
                              })}
                              type="text"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="Enter your Name"
                            />
                            {errors.name?.type === "required" && (
                              <p className="text-red-500 text-xs italic">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="w-full mx-10 mb-5">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            Email
                          </label>
                          <div className="">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              {...register("email", {
                                required: { value: true, message: "email is required" },
                              })}
                              type="email"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="johnsmith@example.com"
                            />
                            {errors.email?.type === "required" && (
                              <p className="text-red-500 text-xs italic">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="w-full mx-10 mb-5">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            Password
                          </label>
                          <div className="">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              {...register("password", {
                                required: { value: true, message: "password is required" },
                              })}
                              type="password"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="************"
                            />
                            {errors.password?.type === "required" && (
                              <p className="text-red-500 text-xs italic">
                                {errors.password.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            Country
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              {...register("country", {
                                required: { value: true, message: "country is required" },
                              })}
                              type="text"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="Country"
                            />
                            {errors.country?.type === "required" && (
                              <p className="text-red-500 text-xs italic">
                                {errors.country.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            City
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              {...register("city", {
                                required: { value: true, message: "city  is required" },
                              })}
                              type="text"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="City"
                            />
                            {errors.city?.type === "required" && (
                              <p className="text-red-500 text-xs italic">
                                {errors.city.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex -mx-3">
                        <div className="w-1/2 px-3 mb-5">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            State
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              {...register("state", {
                                required: { value: true, message: "state is required" },
                              })}
                              type="text"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="State"
                            />
                            {errors.state?.type === "required" && (
                              <p className=" text-red-500 text-xs italic">
                                {errors.state.message}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="w-1/2 px-3 mb-5">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            Zip Code
                          </label>
                          <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              {...register("zipcode", {
                                required: {
                                  value: true,
                                  message: "zipcode is required",
                                },
                              })}
                              type="text"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="Zip"
                            />
                            {errors.zipcode?.type === "required" && (
                              <p className="text-red-500 text-xs italic">
                                {errors.zipcode.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <div className="w-full mx-10 mb-5">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            Address 1
                          </label>
                          <div className="">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              {...register("address1", {
                                required: { value: true, message: "address 1 is required" },
                              })}
                              type="text"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="Address 1"
                            />
                            {errors.address1?.type === "required" && (
                              <p className="text-red-500 text-xs italic">
                                {errors.address1.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="w-full mx-10 mb-5">
                          <label htmlFor="" className="text-xs font-semibold px-1">
                            Address 2
                          </label>
                          <div className="">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                              <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                            </div>
                            <input
                              {...register("address2", {
                                required: { value: true, message: "address 2 is required" },
                              })}
                              type="text"
                              className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                              placeholder="Address 2"
                            />
                            {errors.address1?.type === "required" && (
                              <p className="text-red-500 text-xs italic">
                                {errors.address1.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                          <button type="submit" className="block w-full max-w-xs mx-auto bg-blue-600 dark:hover:bg-blue-400 dark:bg-blue-300 text-white rounded-3xl px-3 py-3 font-semibold">
                            SUBMIT NOW
                          </button>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
