import { useResetPasswordRequestMutation } from '@/redux/chatSlice/chatApi';
import { setEmail } from '@/redux/chatSlice/chatSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { token } = useSelector(state => state.chat)
  const [resetPasswordRequest, { isLoading, isSuccess, isError }] = useResetPasswordRequestMutation()
  const onSubmit = async data => {
    const info = {
      token: token,
      email: data.email
    }
    dispatch(setEmail(data.email))
    await resetPasswordRequest(info)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success("check email to get the verification code")
      router.push('/otp')
    }
    if (isError) {
      toast.error("something went wrong")
    }
  }, [isError, isLoading, isSuccess, router])

  return (
    <div>
      <main id="content" role="main" class="w-full  max-w-md mx-auto p-6">
        <div class="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
          <div class="p-4 sm:p-7">
            <div class="text-center">
              <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?
                <a class="text-blue-600 decoration-2 hover:underline font-medium" href="#">
                  Login here
                </a>
              </p>
            </div>

            <div class="mt-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="grid gap-y-4">
                  <div>
                    <label for="email" class="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
                    <div class="relative">
                      <input  {...register("email", { required: { value: true, message: "Email is required" } })} type="email" id="email" name="email" class="py-2 px-4 block w-full border-2 border-gray-200 rounded-md text-sm  outline-none focus:border-indigo-500" required aria-describedby="email-error" />
                    </div>
                    {errors.email?.type === 'required' && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                  </div>

                  <button type="submit" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Continue</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;