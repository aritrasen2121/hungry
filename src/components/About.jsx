import React from 'react'
import hygienePic from '../assets/hygiene-pic.jpg'

const About = () => {
    return (
        <div id='about' className='md:mx-24 mx-10 mt-10 mb-24'>
            <div className="text-5xl text-center text-gray-500 md:mb-24 mb-10">About Us</div>
            <div className="flex md:flex-row flex-col w-full">
                <div class="max-w-7xl mx-auto md:w-1/2 grid grid-cols-9 px-2">
                    {/* <!-- Stack 1 --> */}
                    <div class="col-span-4 w-full h-full"></div>
                    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div class="h-full w-1 bg-red-400"></div>
                        <div class="absolute w-6 h-6 rounded-full bg-red-600 z-10 text-white text-center">1</div>
                    </div>
                    <div class="col-span-4 w-full h-full ">
                        <div class="w-full h-full rounded-xl p-2 md:pl-4 bg-gray-100">
                            <h1 class="text-gray-600 text-xl font-medium py-2">Title</h1>
                            <p class="text-gray-400 md:text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                        </div>
                    </div>
                    {/* <!-- Stack 2 --> */}
                    <div class="col-span-4 w-full h-full ">
                        <div class="w-full h-full rounded-xl p-2 md:pl-4 bg-gray-100">
                            <h1 class="text-gray-600 text-xl font-medium py-2">Title</h1>
                            <p class="text-gray-400 md:text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                        </div>
                    </div>
                    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div class="h-full w-1 bg-red-400"></div>
                        <div class="absolute w-6 h-6 rounded-full bg-red-600 z-10 text-white text-center">2</div>
                    </div>
                    <div class="col-span-4 w-full h-full"></div>

                    

                    {/* <!-- Stack 3 --> */}
                    <div class="col-span-4 w-full h-full"></div>
                    <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div class="h-full w-1 bg-red-400"></div>
                        <div class="absolute w-6 h-6 rounded-full bg-red-600 z-10 text-white text-center">3</div>
                    </div>
                    <div class="col-span-4 w-full h-full ">
                        <div class="w-full h-full rounded-xl p-2 md:pl-4 bg-gray-100">
                            <h1 class="text-gray-600 text-xl font-medium py-2">Title</h1>
                            <p class="text-gray-400 md:text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2 md:mt-0 mt-10 flex justify-center items-center'>
                    <img src={hygienePic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About