import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import { userAgent } from 'next/server'
// import Nav from '../components/Nav'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home({users}) {
  
  console.log(users)

  return (
    <>
     <Head>
        <title>WebDev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <Nav /> */}
     <h1>Next JS data fetching at server side</h1>
     {/* <Link href="/users">Click Here for Client Side Data Fetching</Link> */}
     {
      users.map(user=> 
        <ul key={user.id}>
        <li>{user.name}</li>
        <li>{user.email}</li>
        </ul>) 
     }
    </>
  )
}


export async function getStaticProps() {

  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)

  const data = await response.json()

  return {
    props : {
      users : data
    }
  }

}