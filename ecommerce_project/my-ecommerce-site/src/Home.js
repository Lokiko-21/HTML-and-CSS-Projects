import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to Our E-Commerce Site!</h1>
      <p>Explore our products and find great deals!</p>
      <div>
        <h2>Featured Products</h2>
        <div className="featured-products">
          {/*PRODUCT CARDS GO HERE*/}
          <div className="product-card">
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            <p>$19.99</p>
            <button>Add to Cart</button>
          </div>
          {/*MORE CARDS GO HERE*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
