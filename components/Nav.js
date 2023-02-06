import React, {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {



  return (
    <nav className={styles.nav}>
    <ul>
    <li>
        <Link href="/">Home</Link>

    </li>
    <li>
        <Link href="/albums">Albums</Link>

    </li>
    <li>
      
        <Link href="/posts">Posts</Link>
        
    
    </li>
    {/* <li>
        <Link href="/about">About</Link>

    </li> */}

    <li>
        <Link href="/news">News</Link>

    </li>
    
</ul>
 
</nav>
  )
}

export default Nav