/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import a from '../../src/images/a.png'
import b from '../../src/images/b.jpg'

function AboutSection() {

  return (

    <div>
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-10 lg:my-20">

        <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div class="lg:col-span-3">
            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-[54px] lg:leading-tight dark:text-white">Bridging Data and <span class="text-blue-600">Sustainability</span></h1>
            <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">Welcome to <span className='text-lg text-blue-600'>Environmental Sustainability!</span> At the intersection of data-driven insights and climate sustainability, our organization stands tall and proud. As an independent body, we are not tied down by bureaucracy or corporate agendas. Instead, our passion is fueled by the desire to make a meaningful difference in the world of climate and sustainability policies.</p>

            <div class="mt-5 lg:mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">


              <h2 className='w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center  border border-transparent   bg-blue-700 text-white px-3  font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-2  dark:focus:ring-offset-gray-800 lg:text-xl'>Our Mission: Navigating the Ocean of Knowledge</h2>

            </div>
            <p class="mt-2 text-lg text-gray-800 dark:text-gray-400">In today{"'"}s fast-paced digital age, there is an ever-growing ocean of information. Amidst this vast expanse, it is easy to get lost or be overwhelmed. That is where we come in. Our primary goal is to dive deep into these large bodies of knowledge, leveraging the power of data to navigate and uncover hidden insights. Think of us as your friendly neighborhood data detectives, sifting through numbers and patterns to unearth the stories they tell about our planet and its changing climate.</p>
          </div>
          <div class="lg:col-span-4 mt-10 lg:mt-0">
            <Image
              className="w-full rounded p-2 border border-indigo-600 "
              src={a}
              height={1200}
             
              alt="Image Description"
            />
          </div>

        </div>

      </div>

      {/* End Hero  */}

      <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative lg:max-w-md">
                <Image
                  src={b}
                  alt="aboutimage"
                  className="relative z-10 object-cover w-full rounded h-96"
                />
                <div
                  className="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                  <p className="text-lg font-semibold md:w-72">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                      viewBox="0 0 16 16">
                      <path
                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                      </path>
                    </svg> Successfully Providing business solutions from 2 years
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-6/12 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                <span className="text-lg text-gray-600 uppercase dark:text-gray-400">Data:  </span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 lg:text-4xl dark:text-gray-300">
                  The Heartbeat of Our Operation
                </h1>
              </div>
              <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                We firmly believe that data, when harnessed correctly, has the potential to bring about transformative change. By utilizing advanced analytical tools and methodologies, we aim to convert raw data into actionable insights. These insights, in turn, contribute to more informed, effective, and forward-thinking climate policies. In essence, we are giving voice to the silent numbers, allowing them to participate in the crucial conversations about our world is future.
              </p>
              <a href="#"
                className="px-4 py-2 text-gray-100 bg-blue-500 rounded dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center bg-stone-50 xl:h-screen font-poppins dark:bg-gray-800">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 mb-10 lg:w-full lg:mb-0">
              <div className="lg:w-full">
                <span className="text-xl font-semibold text-blue-600 uppercase dark:text-blue-500">
                  About Us
                </span>
                <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">Transparency, Coherency, and Verifiability<span class="text-blue-600 ml-2">Our Three Pillars </span></h1>
                {/* <h2 className="mt-4 mb-6 text-2xl font-bold dark:text-gray-300">
              
              </h2> */}

              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-11/12 lg:mb-0 mt-8">
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-file-earmark-code" viewBox="0 0 16 16">
                    <path
                      d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    <path
                      d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Transparency
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    Our work is like an open book. We believe that for our insights to be truly impactful, they must be presented transparently. We are committed to sharing our methodologies, sources, and findings openly, ensuring that our stakeholders understand the how and why behind our conclusions.
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-file-text" viewBox="0 0 16 16">
                    <path
                      d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                    <path
                      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Coherency
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    Data can often seem scattered or disjointed. Our commitment is to present our findings in a coherent manner, ensuring that the narratives we derive from our analyses are logical, consistent, and easy to comprehend. We want our stakeholders to not just see the data but to understand the story it tells.
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 bi bi-bank2" viewBox="0 0 16 16">
                    <path
                      d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z">
                    </path>
                  </svg>
                </span>
                <div>
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Verifiability
                  </h2>
                  <p className="text-base leading-loose text-gray-500 dark:text-gray-400">
                    In the realm of data analytics, accuracy is paramount. We uphold the highest standards of integrity in our work, ensuring that every piece of information we present can be verified. Our team of experts meticulously checks and re-checks our findings, ensuring that our insights are not just compelling but also credible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Our Goals
          </h1>

          <div className="mt-8">
            <p className="text-gray-600">
              While our journey is rooted in numbers and analytics, it{"'"}s driven by a heartfelt desire to contribute to a better, more sustainable future. We understand the challenges our planet faces, and we are committed to playing our part in addressing them. By bridging the gap between data and sustainability, we hope to shed light on the path forward.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-gray-600">
              As we continue to grow and evolve, we invite you to join us. Whether you are a policy-maker, researcher, student, or just a curious soul, there is a place for you here at Environmental Sustainability. Together, let s harness the power of data to create a brighter, greener tomorrow.
            </p>
          </div>

          <div className="mt-8 text-gray-600 text-center">
            Thank you for taking the time to get to know us. We are thrilled to embark on this exciting journey with you. Let s make a difference, one data point at a time!
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutSection;
