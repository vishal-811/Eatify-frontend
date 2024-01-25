import React from 'react'
const Card=({cloudinaryImageId,name,cuisines,avgRating})=>{
    return(
        <div className='border-none cursor-pointer  shadow-lg hover:shadow-violet-300 w-52 h-auto p-2 m-8 rounded-md'>
              <img className='w-full rounded-md transform scale-180 hover:scale-90 transition duration-300 ease-in-out' 
               src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h1>{name}</h1>
            <h3 className="w-32 truncate"
     >{cuisines}</h3>
            <h3>{avgRating}*</h3>
           
        </div>
    )
}

export default Card;