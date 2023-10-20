/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export function Banner() {

  return (
   <div>
    <header>


      <div
        className="w-full bg-center bg-cover h-[42rem]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
          <h1 class="block text-xl font-bold text-gray-100 sm:text-xl lg:text-[20px] lg:leading-tight dark:text-white">An AI tool made for</h1>
            <h1 className=" lg:mt-4 text-3xl font-semibold text-white lg:text-6xl">
            Use LLMs to access <br /> <span className="text-blue-400 leading-tight">Global Sustainability
</span> Data
            </h1>
          <Link href='/signup'>
          <button
              className="w-6/12 rounded-full px-5 py-3 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Create account
            </button>
          </Link>
          </div>
        </div>
      </div>
    </header>
   </div>
  );
}
