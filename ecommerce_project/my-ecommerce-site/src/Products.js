import React from 'react';

function Products() {
    return (
        <div>
            <h1>Our Products</h1>
            <div className='product-list'>
                {/*PRODUCT CARDS GO HERE*/}
                <div className='product-card'>
                    <img src='product1.jpg' alt='Product 1' />
                    <h3>Product 1</h3>
                    <p>Descriotion of product</p>
                    <p>$PRICE</p>
                    <button>Add to Cart</button>
                </div>
                {/*ADD MORE CARDS HERE*/}
            </div>
        </div>
    );
}

export default Products;