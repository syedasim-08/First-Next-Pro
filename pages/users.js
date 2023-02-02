import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const userLIst = () => {


  const [postData, setPostData] = useState([]);

 useEffect(()=>{

  const postsData = async()=>{
    
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)

      const resData = await res.json();

      setPostData(resData)


  }

  postsData();


 },[])



  return (
    <div>
        <Link href="/">
        Home
        </Link>
        <h1>Next JS Client Side Data Fetching</h1>

        {
          postData.length > 0 ? postData.map((post)=><h3>{post.title}</h3>)
          :
          <h1>No Data Found</h1>
          
        }
    </div>
  )
}

export default userLIst