import React from 'react'

const Features = () => {
  return (

    <div id='features' className='md:mx-24 mx-10 mt-3'>
        <div className="text-5xl text-center text-gray-500 mb-10">Features</div>
        <div className="grid md:grid-cols-3 grid-rows-3 md:gap-20 gap-4 md:my-48 my-5">
            <div className='border-2 rounded-2xl bg-gray-100'>
                <div className='text-center text-semibold text-gray-700'>Title 1</div>
                <div className='text-md text-center text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, similique. 
                Quo, modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aut!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, similique. 
                Quo, modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aut!</div>
            </div>
            <div className='border-2 rounded-2xl bg-gray-100'>
                <div className='text-center text-semibold text-gray-700'>Title 2</div>
                <div className='text-md text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, similique.
                Quo, modi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, saepe!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, similique. 
                Quo, modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aut!</div>
            </div>
            <div className='border-2 rounded-2xl bg-gray-100'>
                <div className='text-center text-semibold text-gray-700'>Title 3</div>
                <div className='text-md text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, similique.
                Quo, modi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, id.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, similique. 
                Quo, modi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, aut!</div>
            </div>

        </div>

    </div>
    
  )
}

export default Features