import React, { useEffect, useState } from 'react'
import{useLoaderData} from"react-router-dom"
const Github = () => {
  const data=useLoaderData();
// const [data,setData]=useState([]);
//     useEffect(()=>{
//         fetch('https://api.github.com/users/Rupeshpal')
//         .then((response)=>response.json())
//         .then((data)=>{
//             console.log(data)
//             setData(data);

//         })

//     },[])
  return (
    <div className='bg-gray-700 text-white text-3xl p-4 items-center text-center'>
      Github :{data.login}
      <img className='rounded-3xl h-50 w-50 border-r-amber-50' src={data.avatar_url}/>
    </div>
  )
}

export default Github;

export const githubInfoLoader=async()=>{
  const response=await fetch('https://api.github.com/users/Rupeshpal')
  return response.json();
}

