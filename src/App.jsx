import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './components/Header';
import Body from './components/Body'
import {ShimmerUI} from './components/Shimmer';

const App=()=>{
      const [alldata ,setAllData]=useState([]);
      const [filterdata,setFilterdata]=useState([]);
       useEffect(()=>{
           axios.get('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        .then(response=>{
          //  console.log(response.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info)
          setAllData(response.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
          setFilterdata(response.data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        })
        
        
       },[])
      
  
      //  here we are doing conditional rendering, check if we didn't make any api call than our filter data will be empty.
  return (alldata.length===0)?<ShimmerUI/>:(
   
      <div>
             <Header setfilterdata ={setFilterdata} alldata={alldata}/>
             <Body filterdata={filterdata} alldata={alldata}/>
      </div>
  )
}

export default App;