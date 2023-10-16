import React from 'react';

const PriceTwo = () => {
    return (
        <div>
           <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
    <h2 class="mb-1 text-3xl lg:text-4xl font-extrabold leading-tight text-center text-gray-900">Pricing: Tailored to Your Needs</h2>
    {/* <p class="mb-12 text-lg text-gray-500">Our base rate is just $5 a month. We understand the diverse needs of our clientele, and we're open to exceptions, especially for NGOs and other non-profit organizations. If you fall under such a category, please reach out, and we'll work something out tailored to your needs.</p> */}
    <div class="w-full lg:mt-10">
        <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg lg:text-xl font-bold text-blue-500">Standard Subscription</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Our base rate is just <span className='text-lg font-bold text-blue-600 border-2 border-indigo-600 rounded-full px-1 py-1'>$5</span> a month. We understand the diverse needs of our clientele, and we are open to exceptions, especially for NGOs and other non-profit organizations. If you fall under such a category, please reach out, and we will work something out tailored to your needs.</p>
                    </div>
                </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-yellow-400 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg lg:text-xl font-bold text-yellow-500">Custom Data Retrieval</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Need extra data beyond our standard offering? No problem. We can gather specific data based on your requests. Given the bespoke nature of such requests, pricing will be determined on a case-by-case basis.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg lg:text-xl font-bold text-green-500">Consulting and Other Services</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">Our team of experts is ready to assist with specialized services, including consulting. Pricing for these services is determined individually, based on the man-hours required to meet your unique requirements.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full mb-10 sm:flex-row lg:mt-10 mt-0">
            <div class="lg:w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                    <div class="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-indigo-500">Learn more our Services</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600">We re dedicated to providing top-notch services while ensuring transparency in our pricing. If you have any questions or need further clarification on any aspect of our pricing, please don t hesitate to get in touch. We{''}re here to help!</p>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
</div> 
        </div>
    );
};

export default PriceTwo;