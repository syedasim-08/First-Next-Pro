import React from 'react'
import Head from "next/head"

const NewsArticles = ({articles}) => {
  return (
    <>
    <Head>
        <title>WebDev</title>
    </Head>
    <h1 style={{textAlign: "center"}}>List of News Articles</h1>
    <p style={{textAlign:"center", color:"red"}}>Using Server Side Rendering</p>
    <br />
    {articles.map(article=>(
        <div key={article.id} style={{textAlign : "center"}}>
            <h2>{article.id} {article.title} | {article.category}</h2>

        </div>
    ))}

    </>
  )
}

export default NewsArticles



export async function getServerSideProps () {

 const response = await fetch(`http://localhost:4000/news`)

 const data = await response.json();

 return {
    props : {
        articles : data
    }
 }


}