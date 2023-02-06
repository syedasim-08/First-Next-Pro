import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

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
      <Head>
        <title>
          WebDev
        </title>
      </Head>
        {/* <Link href="/">
        Home
        </Link> */}
        <h1 style={{textAlign:"center"}}>Next JS Data Fetching at Client Side</h1>
        <br />

        {
          postData.length > 0 ? postData.map(post=>
            
           
            <p style={{textAlign:"center"}}>
              {post.id}. {post.title}

              <br />
              <br />

            </p>
             )
            
       
          :
          
          <h1>No Data Found</h1>
          
        }
    </div>
  )
}

export default userLIst