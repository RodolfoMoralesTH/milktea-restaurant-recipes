import React, { useState, useEffect } from 'react'
import products from '../products'
import milktea from '../milktea'
import Products from '../components/Products'
import Product from '../components/Product'
function HomeScreen() {
    const [drinksIsActive, drinksSetActive] = useState(false);
    const [dessertsIsActive, dessertsSetActive] = useState(false);

    const toggleClassDrinks = () => {
        drinksSetActive(!drinksIsActive);
        console.log('fa')
    }
    const toggleClassDesserts = () => {
        dessertsSetActive(!dessertsIsActive);
        console.log('fa')
    }
    
    return (
            <div className="main">
                <h1>Products</h1>
        <div className="productsColumn" >
            {products.map(product => (
                <div onClick={eval(product.function)}><Products product={product}  /></div>
            ))}
        </div>

        <div className={drinksIsActive ? 'productItems': 'productItems forTeas'} >
            {milktea.filter(tea => tea.type == 'Drink').map(product => (
                <Product product={product}  />

            ))
            }
        </div>

        <div className={dessertsIsActive ? 'productItems': 'productItems forDesserts'}>
            {milktea.filter(tea => tea.type == 'Dessert').map(product => (
                <Product product={product}  />

            ))
            }
        </div>
            </div>
    )
}

export default HomeScreen
