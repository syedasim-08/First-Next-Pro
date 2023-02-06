import React from 'react'

export const ArticleListByCategory = ({articles, category}) => {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Showing result for {category}</h1>
    <br />

    {articles.map(article=>(
        <div key={article.id} style={{textAlign:"center"}}>
            <h2>{article.id} {article.title}</h2>
            <p>{article.description}</p>
         
            < br/>

            <hr />
        </div>
        
    ))}
    </>
  )
}

export default ArticleListByCategory;

export async function getServerSideProps (context){

     const  { params } = context

     const {category} = params


    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();

    return {
        props : {
            articles : data,

            category

        }
    }
}
