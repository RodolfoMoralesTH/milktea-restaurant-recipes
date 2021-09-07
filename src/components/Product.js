import React from 'react'
import { Link } from 'react-router-dom'

function Product({product}) {
    return (
        <Link to={`/product/${product._id}`}>
                
            
        <div className="tea-product" style={{backgroundImage: `url(${product.image})`}}>
            

            <div className="tea-text">
            <strong>{product.name}</strong>
        
        <h3>${product.price}</h3>

        <img src={product.profile} className="profIm" />
            </div>
        </div>
        </Link>
    )
}

export default Product
