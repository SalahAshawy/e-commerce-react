import React from 'react'
import Products from './Products'

function Home() {
  return (
   <div className="hero">
        <div class="card bg-dark text-white border-0">
    <img src="/assests/bg.jpg" class="card-img" alt="Background" height ="550px" />
    <div class="card-img-overlay  d-flex flex-column justify-content-center">
      <div class="container">
        <h5 class="card-title display-3 fw-bolder mb-0">New Sessons is Arriving</h5>
        <p class="card-text"></p>

       </div>
    </div>
    </div>
    <Products/>
    </div>
    
  );
}

export default Home;
