import { useGetHistoryQuery } from "@/redux/chatSlice/chatApi";
import React from "react";
import { useSelector } from "react-redux";


const Feature = () => {

  return (
    <div classNameName=''>
    <div className="py-12  text-gray-100 sm:py-12">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
            <div className="relative flex flex-col items-center">
                        <div
                            className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                            FEATURES
                        </div>
                        <h1 className="text-5xl font-bold dark:text-white"> <span className="text-blue-500"> Our Features
                            </span> </h1>
                        <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-blue-200">
                            </div>
                            <div className="flex-1 h-2 bg-blue-400">
                            </div>
                            <div className="flex-1 h-2 bg-blue-600">
                            </div>
                        </div>
            </div>
           </div>
        <div
            className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-2 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-lg rounded-xl h-full">
                    <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Realtime Collaboration</h3>
                        <p className="mt-6 text-base text-gray-600">In the realm of environmental stewardship, the utilization of comprehensive and interconnected databases has emerged as an indispensable tool for fostering informed decision-making and driving positive change on a global scale. This intricate web of data repositories encompasses an array of invaluable sources, including repositories of environmental treaties, European Union (EU) legislation, United Nations Environment Programme (UNEP) data, and records of UN negotiations. The amalgamation of these diverse datasets forms a bedrock of knowledge, from which a deeper understanding of environmental issues and trends can be extracted.</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white shadow-lg rounded-xl border">
                <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">History of Edits</h3>
                    <p className="mt-6 text-base text-gray-600">At the heart of this data ecosystem lies an extensive compilation of environmental treaties. These treaties, ranging from the Paris Agreement to the Kyoto Protocol, are meticulously cataloged within dedicated databases. Researchers and policymakers alike can delve into these repositories, extracting insights into the commitments and obligations of nations, the evolving dynamics of international cooperation, and the progress made towards collective environmental goals. By synthesizing and analyzing treaty-related data, stakeholders can gauge the effectiveness of global efforts and refine strategies for a more sustainable future.</p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-lg rounded-xl h-full">
                    <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Integrations</h3>
                        <p className="mt-6 text-base text-gray-600">Complementing this legal framework, the labyrinthine corridors of EU legislation are similarly integrated into the broader environmental database landscape. The EU, driven by its commitment to ecological well-being, has established an intricate network of laws and regulations aimed at harmonizing environmental standards across its member states. These legislative acts are codified within digital repositories, enabling analysts to discern patterns, assess compliance, and pinpoint areas for potential refinement. This wealth of legislative data intertwines with other environmental datasets, enriching the overarching narrative of global sustainability.</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
                <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Publish webpage online</h3>
                    <p className="mt-6 text-base text-gray-600">The sprawling archives of the UNEP furnish yet another facet of this data-driven paradigm. A treasure trove of information encompassing diverse ecological domains, UNEP s datasets provide an unparalleled glimpse into the state of the environment. From biodiversity indices to air quality measurements, these data points paint a comprehensive portrait of Earth s ecological health. Researchers adept at data mining can extrapolate trends, identify emerging challenges, and construct models that aid in forecasting future scenarios. The fusion of UNEP data with other interconnected sources creates a synergistic effect, enhancing the accuracy and scope of environmental insights.</p>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -inset-1">
                    <div
                        className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                    </div>
                </div>
                <div className="relative overflow-hidden bg-white shadow-lg rounded-xl h-full">
                    <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8L20 8" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <path d="M4 16L14 16" stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                            <ellipse cx="7" cy="8" rx="3" ry="3" transform="rotate(90 7 8)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                            <ellipse cx="17" cy="16" rx="3" ry="3" transform="rotate(90 17 16)" stroke="#111827"
                                stroke-width="2" stroke-linecap="round"></ellipse>
                        </svg>
                        <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Forms and Data Collection
                        </h3>
                        <p className="mt-6 text-base text-gray-600">Central to international environmental diplomacy, UN negotiations stand as a cornerstone in the pursuit of global cooperation. Records of these intricate deliberations are meticulously documented and preserved within dedicated databases. The ebb and flow of dialogues, the emergence of consensus, and the resolution of disputes are all enshrined within these digital archives. By scrutinizing the trajectory of negotiations, analysts can unravel the intricate tapestry of international cooperation, deciphering the strategies and factors that drive progress in the environmental domain.</p>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white shadow-lg rounded-xl border">
                <div className="p-9"><svg className="w-12 h-12 mx-auto text-gray-400 sm:mx-0" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="14" width="2" height="2" rx="1" fill="#111827"></rect>
                        <rect x="7" y="11" width="2" height="6" rx="1" fill="#111827"></rect>
                        <rect x="11" y="13" width="2" height="6" rx="1" transform="rotate(90 11 13)" fill="#111827">
                        </rect>
                        <rect x="16" y="12" width="2" height="2" rx="1" fill="#111827"></rect>
                        <path
                            d="M14 8V8C14 7.58326 14 7.37488 13.9655 7.19144C13.8455 6.5546 13.4245 6.01534 12.8358 5.74455C12.6662 5.66654 12.464 5.616 12.0597 5.51493L12 5.5C11.5388 5.3847 11.3082 5.32706 11.1171 5.233C10.5686 4.96315 10.1737 4.45731 10.0449 3.85979C10 3.65151 10 3.41382 10 2.93845V2"
                            stroke="#111827" stroke-width="2" stroke-linecap="round"></path>
                        <path
                            d="M3 14C3 11.4412 3 10.1618 3.61994 9.28042C3.77954 9.05351 3.96572 8.85041 4.17372 8.6763C4.98164 8 6.15442 8 8.5 8H15.5C17.8456 8 19.0184 8 19.8263 8.6763C20.0343 8.85041 20.2205 9.05351 20.3801 9.28042C21 10.1618 21 11.4412 21 14C21 16.5588 21 17.8382 20.3801 18.7196C20.2205 18.9465 20.0343 19.1496 19.8263 19.3237C19.0184 20 17.8456 20 15.5 20H8.5C6.15442 20 4.98164 20 4.17372 19.3237C3.96572 19.1496 3.77954 18.9465 3.61994 18.7196C3 17.8382 3 16.5588 3 14Z"
                            stroke="#111827" stroke-width="2"></path>
                    </svg>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">Custom Domains</h3>
                    <p className="mt-6 text-base text-gray-600">In summation, the interplay of databases housing environmental treaties, EU legislation, UNEP data, and UN negotiations culminates in a multidimensional landscape of knowledge. This intricate tapestry empowers policymakers, researchers, and advocates to glean insights that steer the course of global environmental conservation. The amalgamation of these disparate datasets underpins a data-driven approach to addressing ecological challenges, shaping policies that resonate across borders, and fostering a harmonious relationship between humanity and the natural world.</p>
                </div>
            </div>
        </div>
       </div>
    </div>
</div>
  );
};

export default Feature;
