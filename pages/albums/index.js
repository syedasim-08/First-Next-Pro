import Link from "next/link"

const Product = ({albums}) => {
  return (
    <>
    <h1 style={{textAlign: "center"}}>Dynamic Routing</h1>
    <br />
    {
      albums.map(album =><div style={{textAlign: "center"}}>
        <Link href={`/albums/${album.id}`} passHref>
        <ul>
          <li>
            {`${album.id}. ${album.title}`}
          </li>
        </ul>
        </Link>
        
        <br />
      </div>)
    }
    </>
  )
}

export default Product


export async function getStaticProps(){

  const response = await fetch(`https://jsonplaceholder.typicode.com/albums`)

  const resData = await response.json();


  return {
    props : {
      albums : resData.slice(0,6)
    }
  }


}