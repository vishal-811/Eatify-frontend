import React from 'react'
import Card from './Card'
import {NoDataFound} from './Shimmer'
const Body=({filterdata})=>{
     
    return(filterdata.length===0)?<NoDataFound/>:(
          

        <div className='w-full flex flex-wrap flex-row place-content-center bg-slate-50'>
              {
                   filterdata.map((restraunt)=>{
                    return <Card {...restraunt.info}/>
                })
              
             }
        </div>

    )
}

export default Body;