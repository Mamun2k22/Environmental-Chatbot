import DynamicChat from "@/Components/ChatComponents/DynamicChat";
import History from "@/Components/ChatComponents/History";
import { useGetHistoryQuery } from "@/redux/chatSlice/chatApi";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Chatbot = () => {
    const navigate = useRouter()
    const { isLogin } = useSelector(state => state.chat)
    if (!isLogin) navigate.push('/login')

    return (
        <div className="flex justify-center items-center border sm:my-12 sm:mx-6">
            <div
                className="container mx-auto shadow-lg rounded-lg 
    ]"
            >
                <div className="flex flex-row justify-between">

                    <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">

                        <div>
                            <History />
                        </div>
                    </div>

                    <div className="w-full">
                        <DynamicChat />
                    </div>

                    {/* End Message */}
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
