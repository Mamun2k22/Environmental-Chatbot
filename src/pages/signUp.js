import { Input } from "@material-tailwind/react";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <div className="bg-gray-200 lg:w-5/12 mx-auto my-10 rounded">
        <h1 className="text-center py-5 text-2xl">Material 2</h1>
        <div className="mb-20">
          <div className="w-10/12 mx-auto border pb-10 rounded ">
            <div className="bg-white p-5 pb-10 lg:pb-5">
              <Input
                label={<span style={{ padding: "0 10px" }}>Counter</span>}
                className="bg-gray-200"
                variant="standard"
              />
              <div className="my-5">
                <Input
                  className="bg-gray-200 "
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>Address 1</span>}
                />
              </div>
              <div>
                <Input
                  className="bg-gray-200  "
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>Address 2</span>}
                />
              </div>
              <div className=" my-5">
                <Input
                  className="bg-gray-200"
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>City</span>}
                />
              </div>
              <div className="lg:flex gap-5">
                <Input
                  className="bg-gray-200  "
                  variant="standard"
                  label={<span style={{ padding: " 0 10px" }}>State</span>}
                />
                <Input
                  className="bg-gray-200 mt-5 lg:mt-0 "
                  variant="standard"
                  label={<span style={{ padding: "0 10px" }}>Zip</span>}
                />
              </div>
              <div className="flex justify-end">
                <button className="bg-[#069C6F] text-white mt-6 px-4 py-1 rounded ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
