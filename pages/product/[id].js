import React from 'react'
import { useRouter } from 'next/router'

const ProductDetails = () => {
  const router = useRouter()
  const id = router.query.id
  return (
    <div>Details About the Product
      <h1>
        {id}
      </h1>
    </div>
  )
}

export default ProductDetails