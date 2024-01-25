import React from 'react'
// we can create a better shimmer effect for better user experience.
export const ShimmerUI=()=>{
    return(
        <div className=' flex  justify-center items-center h-96'>
          <h1 className='font-sans text-pretty font-medium'>Loading...</h1>  
        </div>
    )
}

export const NoDataFound =()=>{
    return(
        <div className=' flex  justify-center items-center h-96'>
              <h1 className='font-sans text-pretty font-medium'>Sorry,No Restaurant found...</h1>  
        </div>
    )
}


