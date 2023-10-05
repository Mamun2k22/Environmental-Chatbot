/* eslint-disable react-hooks/exhaustive-deps */
import { useGetHistoryQuery } from "@/redux/chatSlice/chatApi";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { removeChat, removeHistory, setHistory } from "@/redux/chatSlice/chatSlice";

const History = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.chat)
    const { data, isLoading, isSuccess, isError, error } = useGetHistoryQuery(token)


    useEffect(() => {
        if (isLoading) {
            return;
        }
        const filteredResults = data?.filter((response) =>
            `${response?.user_question}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    }, [isSuccess, data, searchTerm]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAction = (history) => {
        dispatch(setHistory(history))
        dispatch(removeChat())
    }

    const startNewChat = () => {
        dispatch(removeHistory())
        dispatch(removeChat())
    }

    return (
        <div>
            <div className="border-b-2 py-4 px-2">
                <input
                    type="text"
                    placeholder="searching.."
                    className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                    onChange={handleSearch}
                />
            </div>
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold py-4 pl-2">Contacts</p>
                <button onClick={startNewChat} className="w-16  bg-green-400 text-white rounded-lg p-2 ">new</button>
            </div>

            <div className="sm:h-80 sticky overflow-auto">
                {
                    isLoading ? <Loader loading={isLoading} /> :
                        searchResults && searchResults?.map(history => {
                            return (
                                <div className=" hover:cursor-pointer" onClick={() => handleAction(history)} key={history?.id}>
                                    <h2 className="py-2 px-2 mt-2 rounded-2xl w-11/12 ml-2 border border-gray-200 ">
                                        {history?.user_question}
                                    </h2>
                                </div>
                            )
                        })
                }
            </div>

        </div>
    );
};

export default History;