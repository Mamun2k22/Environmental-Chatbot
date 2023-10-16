import { useResetPasswordMutation } from '@/redux/chatSlice/chatApi';
import { removeOtp } from '@/redux/chatSlice/chatSlice';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reset = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { otp, token, email } = useSelector(state => state.chat)
    const { register, formState: { errors }, handleSubmit } = useForm()

    const [resetPassword, { isLoading, isSuccess, isError }] = useResetPasswordMutation()

    const onSubmit = async data => {
        console.log(data)
        if (data.new_password !== data.confirm_password) {
            toast.error("new password and confirm password must have to same")
        } else {
            const resetInfo = {
                email: email,
                password: data.confirm_password,
                otp: otp,
                token: token
            }
            console.log(resetInfo)
            await resetPassword(resetInfo)
        }

    }

    useEffect(() => {
        if (isSuccess && !isLoading) {
            toast.success("successfully reset your password")
            dispatch(removeOtp())
            router.push('/login')

        }
        if (isError) {
            toast.error("something went wrong")
        }
    }, [isLoading, isSuccess, isError])
    return (
        <div>
            <div class="min-h-screen bg-gray-100 flex items-center justify-center">
                <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full border border-indigo-600">
                    <h1 class="text-center text-2xl font-bold mb-6">Change Password</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="email">
                                New Password
                            </label>
                            <input
                                {...register("new_password", { required: { value: true, message: "new password is required" } })}
                                class="appearance-none border rounded outline-none focus:border-indigo-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="new password" />
                        </div>
                        {errors.new_password?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.new_password.message}</p>}
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="email">
                                Confirm Password
                            </label>
                            <input
                                {...register("confirm_password", { required: { value: true, message: "confirm password is required" } })}
                                class="outline-none focus:border-indigo-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="confirm password" />
                        </div>

                        {errors.confirm_password?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.confirm_password.message}</p>}

                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline w-full mt-6" type="submit">
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Reset;