import { useCheckOtpMutation } from '@/redux/chatSlice/chatApi';
import { setOtp } from '@/redux/chatSlice/chatSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function OTPVerificationForm() {
    const { email } = useSelector(state => state.chat)
    const router = useRouter()
    const dispatch = useDispatch()
    const [confirmOtp, setConfirmOtp] = useState('')
    const { register, getValues, handleSubmit } = useForm();
    const [checkOtp, { isSuccess, isLoading, isError }] = useCheckOtpMutation()

    const handleVerify = async () => {
        const otp = getValues();
        const otpString = Object.values(otp).join('');
        const otpInfo = {
            otp: otpString,
            email: email
        }
        setConfirmOtp(otpString)
        await checkOtp(otpInfo)
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success('otp verified')
            dispatch(setOtp(confirmOtp))
            router.push('/reset')
        }
        if (isError) {
            toast.error("something went wrong")
        }
    }, [confirmOtp, dispatch, isError, isLoading, isSuccess, router])

    return (
        <div className="max-w-md mx-auto border border-indigo-600  mt-20 rounded">
            <form onSubmit={handleSubmit(handleVerify)} className="shadow-md px-4 py-6 ">
                <h1 class="text-center text-2xl font-bold mb-6">Enter your OTP</h1>
                <div className="flex justify-center gap-2 mb-6">

                    <input
                        className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-indigo-500"
                        type="text"
                        maxLength="1"
                        pattern="[0-9]"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        {...register('otp1')}
                        required
                    />
                    <input
                        className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-indigo-500"
                        type="text"
                        maxLength="1"
                        pattern="[0-9]"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        {...register('otp2')}
                        required
                    />
                    <input
                        className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-indigo-500"
                        type="text"
                        maxLength="1"
                        pattern="[0-9]"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        {...register('otp3')}
                        required
                    />
                    <input
                        className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-indigo-500"
                        type="text"
                        maxLength="1"
                        pattern="[0-9]"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        {...register('otp4')}
                        required
                    />
                    <input
                        className="w-12 h-12 text-center border rounded-md shadow-sm outline-none focus:border-indigo-500"
                        type="text"
                        maxLength="1"
                        pattern="[0-9]"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        {...register('otp5')}
                        required
                    />
                </div>
                <div className="flex items-center justify-center">

                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                    >
                        Verify
                    </button>

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
