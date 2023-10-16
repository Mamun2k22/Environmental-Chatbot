import { Inter } from "next/font/google";
import { Banner } from "@/Components/Home/Banner/Banner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className}`}>
      <Banner></Banner>
      <ToastContainer />
      {/* <LekhaCompo></LekhaCompo> */}
    </main>
  );
}
