// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'




function Github() {
    const data = useLoaderData()

    // Two way to fetch data from github

    //First

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Harshit262-bit')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    
  return (
    <div className='bg-orange-700 text-white text-3xl text-center'> Github followers:{data.followers} 
    <img src={data.avtar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github;

// secound way 

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/Harshit262-bit')
   return response.json()
}   