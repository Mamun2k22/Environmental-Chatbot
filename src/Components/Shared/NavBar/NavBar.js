import { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logOut, removeChat } from "@/redux/chatSlice/chatSlice";

export function StickyNavbar() {
  const dispatch = useDispatch();
  const [openNav, setOpenNav] = useState(false);
  const { isAdmin, isLogin, token } = useSelector((state) => state.chat);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLogOUt = () => {
    dispatch(logOut());
    dispatch(removeChat());
  };

  const navList = (
    <ul className="mb-4 mt-2 flex  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20 text-black">
      {isAdmin && (
        <li className="p-1 font-normal">
          <Link href="/dashboard" className="flex items-center">
            Dashboard
          </Link>
        </li>
      )}
      <li className="p-1 font-normal">
        <Link href="/feature" className="flex items-center">
          Features
        </Link>
      </li>
      {isLogin && (
        <li className="p-1 font-normal">
          <Link href="/chatbot" className="flex items-center">
            Chatbot
          </Link>
        </li>
      )}
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center">
          Pricing
        </a>
      </li>
      <li className="p-1 font-normal">
        <a href="#" className="flex items-center">
          About Us
        </a>
      </li>
    </ul>
  );

  return (
    <div className="shadow-none">
      <div className="text-black bg-[#069C6F] max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 shadow-none   border-none">
        <div className="flex items-center justify-between  ">
          <Link href="/" className="mr-4 cursor-pointer py-1.5 font-medium">
            Environmental Sustainability
          </Link>

          <div className="mr-4 hidden lg:flex justify-between">{navList}</div>
          <div className="flex items-center gap-4">
            <li className="p-1 font-normal">
              {isLogin ? (
                <Link
                  onClick={handleLogOUt}
                  href="/login"
                  className="flex items-center"
                >
                  LogOUt
                </Link>
              ) : (
                <Link href="/login" className="flex items-center">
                  Login
                </Link>
              )}
            </li>
            <li className="p-1 font-normal bg-black text-white px-3 rounded">
              <Link href="/signUp" className="flex items-center">
                Sign up
              </Link>
            </li>
            <button
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* <div open={openNav}>
          {navList}
          <button className="mb-2">
            <span>Buy Now</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}
