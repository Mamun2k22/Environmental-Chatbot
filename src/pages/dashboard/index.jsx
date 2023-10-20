import Loader from '@/Components/Loader';
import { useApproveUserMutation, useApproveUserQuery, useGetUserQuery } from '@/redux/chatSlice/chatApi';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useRouter()
    const [searchResults, setSearchResults] = useState([]);
    const { token, isAdmin } = useSelector(state => state.chat)
    const { data, isLoading, isSuccess } = useGetUserQuery(token)
    const [approveUser, { isLoading: ALoading, isSuccess: ASuccess }] = useApproveUserMutation()
    useEffect(() => {
        if (isLoading) {
            return;
        }
        const filteredResults = data?.filter((response) =>
            `${response?.id} ${response?.email} ${response?.name}`
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    }, [isSuccess, data, searchTerm, isLoading]);

    // if (!isAdmin) navigate.push('/')
    useEffect(() => {
        if (ASuccess) {
            toast.success("successfully approved a user")
        }
    }, [ALoading, ASuccess])


    if (isLoading) {
        return <Loader />
    }


    const handleApproved = async (id) => {
        const info = {
            token: token,
            id: id
        }
        await approveUser(info)
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };




    return (
        <div>
            <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white border border-indigo-600 rounded-lg shadow-md lg:w-11/12 sm:w-2/3">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center w-full px-4 py-2">
                        <div className="text-lg font-bold">
                            Admin Panel
                        </div>
                        <div className="w-1/2 py-4 px-2">
                            <input
                                type="text"
                                placeholder="searching.."
                                className="py-2 px-4 border-2 border-gray-200 outline-none focus:border-indigo-500 rounded-full w-full lg:w-10/12 "
                                onChange={handleSearch}
                            />
                        </div>

                    </div>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border border-collapse table-auto">
                            <thead className="">
                                <tr className="text-base font-bold text-left bg-gray-50">
                                    <th className="px-4 py-3 border-b-2 border-blue-500">Name</th>
                                    <th className="px-4 py-3 border-b-2 border-green-500">Email</th>
                                    <th className="px-4 py-3 border-b-2 border-green-500">Country</th>
                                    <th className="px-4 py-3 border-b-2 border-green-500">City</th>
                                    <th className="px-4 py-3 border-b-2 border-green-500">Address</th>
                                    <th className="px-4 py-3 border-b-2 border-green-500">Zip Code</th>
                                    <th className="px-4 py-3 border-b-2 border-red-500">Approved</th>
                                    <th className="px-4 py-3 text-center border-b-2 border-yellow-500 sm:text-left">Manage Access</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700">


                                {isLoading ? <Loader /> :
                                    searchResults.length > 0 && searchResults?.map(result => {
                                        console.log({ result })
                                        return <>
                                            <tr key={result.id} className="py-10 border-b border-gray-200 hover:bg-gray-100">
                                                <td className="flex flex-row items-center px-4 py-4">

                                                    <div className="flex-1 pl-1">
                                                        <div className="font-medium dark:text-white">{result?.name}</div>

                                                    </div>
                                                </td>
                                                <td className="px-4 py-4">
                                                    {result?.email}
                                                </td>
                                                <td className="px-4 py-4">
                                                    {result?.country}
                                                </td>
                                                <td className="px-4 py-4">
                                                    {result?.city}
                                                </td>
                                                <td className="px-4 py-4">
                                                    {result?.address1
}
                                                </td>
                                                <td className="px-4 py-4">
                                                    {result?.zipcode}
                                                </td>
                                                <td className="px-4 py-4">
                                                    {result?.is_approved ? "true" : "false"}
                                                </td>
                                                {
                                                    result?.is_approved ? <td className="px-4 py-4">
                                                      <p className='bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white p-2 rounded-lg text-center'>approved</p>

                                                    </td> : <td className="px-4 py-3">
                                                        <p onClick={() => handleApproved(result?.id)} className='bg-red-500 hover:cursor-pointer text-white p-2 rounded-lg text-center'>accept</p>
                                                    </td>
                                                }

                                            </tr>
                                        </>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Dashboard;