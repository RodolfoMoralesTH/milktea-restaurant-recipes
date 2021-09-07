import React from 'react'
import { Link } from 'react-router-dom'

function Product({product}) {
    return (
        
        <div className="menu-product" style={{backgroundImage: `url(${product.image})`}}>
                
            

            <div className="tea-text">
            <strong>{product.name}</strong>
        
        

        
            </div>
        </div>
        
    )
}

export default Product