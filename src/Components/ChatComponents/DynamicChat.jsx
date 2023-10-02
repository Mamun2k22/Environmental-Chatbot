/* eslint-disable @next/next/no-img-element */
import { useSendRequestMutation } from "@/redux/chatSlice/chatApi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { setResponse } from "@/redux/chatSlice/chatSlice";

const DynamicChat = () => {
    const dispatch = useDispatch()
    const { token, chats, responses } = useSelector(state => state.chat)

    console.log(responses)

    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const [sendRequest, { data: resData, isLoading, isSuccess, isError }] = useSendRequestMutation()


    if (isSuccess && !isLoading) {
        console.log("send response data", resData)
    }

    const onsubmit = (data) => {

        const info = {
            token: token,
            question: data.question
        }
        sendRequest(info)
        reset()
    }

    useEffect(() => {
        if (isSuccess && !isLoading) {
            dispatch(setResponse(resData))
        }
    }, [isLoading, isSuccess])

    return (
        <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex sticky overflow-auto sm:h-96 flex-col mt-5">
                {
                    chats.history && chats.history !== null && <> <div className="flex justify-end mb-4">

                        <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                            {chats?.history?.user_question}
                        </div>


                        <img
                            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                            className="object-cover h-8 w-8 rounded-full"
                            alt=""
                        />
                    </div>
                        <div className="flex justify-start mb-4">
                            <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                {chats?.history?.ml_answer}
                            </div>
                        </div>
                    </>
                }

                {
                    isLoading ? <Loader loading={isLoading} /> : <div>
                        {
                            !isLoading && responses?.length > 0 && responses?.map(result => {
                                return <> <div className="flex justify-end mb-4">

                                    <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                        {result?.question}
                                    </div>


                                    <img
                                        src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                        className="object-cover h-8 w-8 rounded-full"
                                        alt=""
                                    />
                                </div>
                                    <div className="flex justify-start mb-4">
                                        <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                            {result?.answer}
                                        </div>
                                    </div>
                                </>
                            })


                        }
                    </div>
                }
            </div>
            <div className="py-5">
                <form onSubmit={handleSubmit(onsubmit)}>
                    <input
                        className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                        {...register("question", { required: { value: true, message: "question is required" } })}
                        type="text"
                        placeholder="type your message here..."
                    />
                </form>

            </div>
        </div>
    );
};

export default DynamicChat;