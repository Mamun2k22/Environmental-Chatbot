import React from 'react';

const logintwo = () => {
    return (
        <div>
             <div className="items-center w-full px-4 py-4 mx-auto my-10 bg-white rounded-lg shadow-md sm:w-2/3">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center w-full px-4 py-2">
                        <div className="text-lg font-bold">
                            Admin Panel
                        </div>
                        <div className="w-1/2 py-4 px-2">
                            <input
                                type="text"
                                placeholder="searching.."
                                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                               
                            />
                        </div>

                    </div>
                    <div className="mt-6 overflow-x-auto">
                        <table className="w-full border border-collapse table-auto">
                            <thead className="">
                                <tr className="text-base font-bold text-left bg-gray-50">
                                    <th className="px-4 py-3 border-b-2 border-blue-500">Name</th>
                                    <th className="px-4 py-3 border-b-2 border-green-500">Email</th>
                                    <th className="px-4 py-3 border-b-2 border-red-500">isApproved</th>
                                    <th className="px-4 py-3 text-center border-b-2 border-yellow-500 sm:text-left">Manage Access</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-normal text-gray-700">


                                {isLoading ? <Loader /> :
                                    searchResults.length > 0 && searchResults?.map(result => {
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
                                                    {result?.is_approved ? "true" : "false"}
                                                </td>
                                                {
                                                    result?.is_approved ? <td className="px-4 py-4">
                                                        <p className='bg-green-400 text-white p-4 rounded-lg text-center'>approved</p>
                                                    </td> : <td className="px-4 py-4">
                                                        <p onClick={() => handleApproved(result?.id)} className='bg-black hover:cursor-pointer text-white p-4 rounded-lg text-center'>accept</p>
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
        </div>
    );
};

export default logintwo;