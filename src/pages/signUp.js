import Loader from "@/Components/Loader";
import { useRegisterUserMutation } from "@/redux/chatSlice/chatApi";
import { Input } from "@material-tailwind/react";
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
    <div>
      <div className="bg-gray-200 lg:w-5/12 mx-auto my-10 rounded">
        <h1 className="text-center py-5 text-2xl">Material 2</h1>
        <div className="mb-20">
          <div className="w-10/12 mx-auto border pb-10 rounded ">
            <form
              onSubmit={handleSubmit(onsubmit)}
              className="bg-white p-5 pb-10 lg:pb-5"
            >
              <div className="my-5">
                <Input
                  {...register("name", {
                    required: { value: true, message: "name is required" },
                  })}
                  className="bg-gray-200 "
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>name</span>}
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500 text-xs italic">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <Input
                {...register("email", {
                  required: { value: true, message: "email is required" },
                })}
                label={<span style={{ padding: "0 10px" }}>email</span>}
                className="bg-gray-200"
                variant="standard"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 text-xs italic">
                  {errors.email.message}
                </p>
              )}
              <div className="my-5">
                <Input
                  {...register("password", {
                    required: { value: true, message: "password is required" },
                  })}
                  className="bg-gray-200 "
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>password</span>}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="my-5">
                <Input
                  {...register("country", {
                    required: { value: true, message: "country is required" },
                  })}
                  className="bg-gray-200 "
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>country</span>}
                />
                {errors.country?.type === "required" && (
                  <p className="text-red-500 text-xs italic">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className="my-5">
                <Input
                  {...register("address1", {
                    required: { value: true, message: "address 1 is required" },
                  })}
                  className="bg-gray-200 "
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>Address 1</span>}
                />
                {errors.address1?.type === "required" && (
                  <p className="text-red-500 text-xs italic">
                    {errors.address1.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  {...register("address2", {
                    required: { value: true, message: "address 2 is required" },
                  })}
                  className="bg-gray-200  "
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>Address 2</span>}
                />
                {errors.address2?.type === "required" && (
                  <p className="text-red-500 text-xs italic">
                    {errors.address2.message}
                  </p>
                )}
              </div>
              <div className=" my-5">
                <Input
                  {...register("city", {
                    required: { value: true, message: "city  is required" },
                  })}
                  className="bg-gray-200"
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>City</span>}
                />
                {errors.city?.type === "required" && (
                  <p className="text-red-500 text-xs italic">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div className="lg:flex gap-5">
                <div>
                  <Input
                    {...register("state", {
                      required: { value: true, message: "required" },
                    })}
                    className="bg-gray-200  "
                    variant="standard"
                    label={<span style={{ padding: " 0 10px" }}>State</span>}
                  />
                  {errors.state?.type === "required" && (
                    <p className="text-red-500 text-xs italic">
                      {errors.state.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("zipcode", {
                      required: {
                        value: true,
                        message: "required",
                      },
                    })}
                    className="bg-gray-200 mt-5 lg:mt-0 "
                    variant="standard"
                    label={<span style={{ padding: "0 10px" }}>Zip</span>}
                  />
                  {errors.zipcode?.type === "required" && (
                    <p className="text-red-500 text-xs italic">
                      {errors.zipcode.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#069C6F] text-white mt-6 px-4 py-1 rounded "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
