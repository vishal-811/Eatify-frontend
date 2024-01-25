import React, { useState } from "react";
 import eatifylogo from "../assets/eatifylogo.png"

 const Header=()=>{
   const[searchText ,setSearchText] =useState("");
    return (
        
            <div className="flex  border-b border-solid px-4 pt-2 flex-row justify-between  ">
               
                <div className="pt-4">
                <img className="size-14 rounded-lg" src={eatifylogo} alt="logo" />
                </div>
               <div className="flex space-x-28 m-4 " >
                 {/* Search-bar */}

                 <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex  flex-wrap items-stretch">
              <input
                  type="search"
                  className="  cursor-pointer relative m-0 block flex-auto rounded focus:border-none  border border-solid  hover:border-violet-600 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] hover:placeholder:text-violet-600"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e)=>{
                    setSearchText(e.target.value);
                  }}
                  aria-label="Search"
                  aria-describedby="button-addon2" 
                  />

              {/* <!--Search icon--> */}
              <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal hover:text-violet-600 dark:text-neutral-500 cursor-pointer "
                  id="basic-addon2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                      >
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
              </span>
          </div>
      </div>

                <p className="cursor-pointer hover:text-violet-600 subpixel-antialiased font-sans font-semibold">Home</p>
                 <p className="cursor-pointer hover:text-violet-600 subpixel-antialiased font-sans font-semibold">Sign In</p>
                 <p className="cursor-pointer hover:text-violet-600 subpixel-antialiased font-sans font-semibold">Cart</p>
               </div>
                      
            </div>
            
        
    )
}


export default Header