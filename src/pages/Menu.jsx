import React, { useState } from 'react'
import item from '../Data'

const Menu = () => {
  const [items, setItems] = useState(item)
  const filterItem = (e) => {
    let filterword = e.target.value;
    if (filterword === 'all') {
      setItems(item)
    }
    else if (filterword === 'pocketfriendly') {
      let filtered = item.filter(ele => ele.category === 'pocketfriendly')
      setItems(filtered);
    }
    else if (filterword === 'homely') {
      let filtered = item.filter(ele => ele.category === 'homely')
      setItems(filtered);
    }
  }
  return (
    <div className='mx-10'>
      <div className=" text-5xl text-center text-gray-500 mt-3 mb-8">Full Menu</div>
      <div className="flex justify-center my-5">
        <button className="custom-btn btn-5 md:mx-5" value='all' onClick={filterItem}>All</button>
        <button className="custom-btn btn-5 md:mx-5" value='pocketfriendly' onClick={filterItem}>Pocket Friendly</button>
        <button className="custom-btn btn-5 md:mx-5" value='homely' onClick={filterItem}>Homely</button>
      </div>
      <div className='grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4'>
        {items.map((element) => {
          return (
            <div key={element.id}>
              <div className=" flex justify-center">
                <div className="h-[-13rem] w-36 bg-gray-100">
                  <img className='rounded-md' src={element.url} alt="" />
                  <div className='font-semibold m-1'>{element.name}</div>
                  <div className="flex justify-between m-1">
                    <div className='text-3xl'>*****</div>
                    <div>{element.price}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>



    </div>
  )
}

export default Menu