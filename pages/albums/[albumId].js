import React from 'react'
// import { useRouter } from 'next/router'

const Album = ({albums}) => {
  // const router = useRouter()
  // const id = router.query.albumId
  return (
    <>
    <div style={{textAlign:"center"}}><h1>Details About the Album Id: {albums.id}</h1>
      {/* <h1>
        {id}
      </h1> */}
    </div>
    <br />
    <ul style={{textAlign:"center"}}>
    <li>
    {`${albums.id}. ${albums.title}`}
          </li> </ul>

    </>
  )
}

export default Album

export async function getStaticPaths() {

  return {
    paths :[
      {
        params : { albumId : '1' }
      },
      {
        params : { albumId : '2' }
      },
      {
        params : { albumId : '3' }
      },
      {
        params : { albumId : '4' } 
      },
      {
        params : { albumId : '5' }
      },
      {
        params : { albumId : '6'}
      },
     

    ],
    fallback : false,
  }

}


export async function getStaticProps(context){
  const { params } = context

 console.log(params)

  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`)

  const resData = await response.json();


  return {
    props : {
      albums : resData
    },
  }
   

}  