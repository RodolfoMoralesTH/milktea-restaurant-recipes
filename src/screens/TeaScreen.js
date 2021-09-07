import React from 'react'
import milktea from '../milktea'
import { Link } from 'react-router-dom'

function TeaScreen({match}) {
    const product = milktea.find((p) => p._id == match.params.id)
    return (
        <div className="mainTea">
            <Link to='/'>
                <span className="back">Go Back</span>
            </Link>
                <div className="teaDiv">
                <div className="aboutProduct">
                    <h1>{product.name}</h1>
                    <div><h2>{product.type}</h2>
                    <h2>${product.price}</h2></div>
                </div>
                <img src={product.image} className='teaIm' alt="Image no work" />
                <p className='teaParagraph'>{product.description}</p>
                </div>

        </div>
    )
}

export default TeaScreen
