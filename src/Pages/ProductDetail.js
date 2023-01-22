import React from 'react'
import { Link, useParams } from 'react-router-dom'


const ProductDetail = () => {
 const params = useParams()
 console.log(params);
  return (
    <div>
      <h1>Product Detail</h1>
     <p>{params.id}</p>
     <Link to={'..'} relative='path'>Back</Link>
    </div>
  )
}

export default ProductDetail
