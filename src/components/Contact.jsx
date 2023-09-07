import React from 'react'

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        console.log('form submitted ');
      };
      return (
    <div id='contact' className='md:mx-24 mx-10 mt-3'>
        <div className="text-5xl text-center text-gray-500 md:mb-24 mb-10">Contact Us</div>
        <div className='flex md:flex-row flex-col w-full py-20'>
            <div className='md:w-1/2 flex items-center'>
                <form className='w-4/5 flex flex-col py-3 bg-gray-200 rounded-md' onSubmit={handleSubmit}>
                    <input className='border-2 w-1/2 p-1 m-1 rounded-md' type="text" placeholder='Enter Name'/>
                    <input className='border-2 w-2/3 p-1 m-1 rounded-md' type="text" placeholder='Enter Email'/>
                    <input className='border-2 w-2/3 p-1 py-8 m-1 rounded-md' type="text" placeholder='Enter Message'/>
                    <button type="submit" className='w-20 p-2 ml-1 mt-2 rounded-lg text-white bg-gray-800' >Submit</button>
                </form>
            </div>
            <div className='md:w-1/2 flex justify-center'>
            <section className='rounded-md w-11/12'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7363.174375105422!2d88.336178!3d22.6691751!3m2!1i1024!2i768!4f13.1!3m1!1m0!5e0!3m2!1sen!2sin!4v1630061112656!5m2!1sen!2sin" width="100%" height="350" allowfullscreen="" loading="lazy"></iframe>
                    
            </section>
            </div>
        </div>
        <div className='flex justify-center my-20'>
            <input className='bg-gray-100 rounded-md px-3 w-1/5' type="text" placeholder='Subsscibe to our newsletter'/>
            <button type='submit' className='w-20 p-2 ml-1 mt-2 rounded-lg text-white bg-gray-800'>Submit</button>
        </div>
    </div>
  )
}

export default Contact