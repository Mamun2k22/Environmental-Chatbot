/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import Link from "next/link";

export function Banner() {
  return (
    <>
      <Card className=" w-[36rem] overflow-hidden  mx-auto bg-transparent shadow-none mt-10">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <small className="text-black flex justify-center">
            An AI tool made for conversion rate optimization
          </small>
          <h1 className=" text-3xl text-black flex justify-center mt-5 font-semibold">
            Use LLMs to access <br /> Global Sustainability <br />
            Data{" "}
          </h1>
          <div className="flex justify-center ">
            <Link href="/signUp">
              <button className="bg-black text-white px-5 py-2 rounded w-40 mt-5">
                Create account
              </button>
            </Link> 
          </div>
        </CardHeader>
        <CardBody>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="ui/ux review check"
          />
        </CardBody>
      </Card>
    </>
  );
}
