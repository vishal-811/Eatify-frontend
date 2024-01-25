import React from 'react'
import Restrauntlist from '../Config'
import Card from './Card'
const Body=()=>{
    return(
        <div className='w-full flex flex-wrap flex-row place-content-center bg-slate-50'>
              {
                Restrauntlist.map((restraunt)=>{
                    return <Card {...restraunt.data}/>
                })
              
             }
        </div>
    )
}

export default Body;