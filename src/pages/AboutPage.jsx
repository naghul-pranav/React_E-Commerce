import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <section id="about-us">
        <h1>About Us</h1>
        <p>Welcome to <strong>our ecommerce platform</strong>, your one-stop destination for all your shopping needs!</p>
        <h2>Who We Are</h2>
        <p>Founded in <em>[Year]</em>, our journey began with a simple idea: to connect people with products they love, from brands they trust, delivered right to their doorstep. 
        We’re a team of passionate individuals dedicated to enhancing your online shopping experience by blending innovation, convenience, and customer-centricity.</p>
        <h2>What We Offer</h2>
        <p>From trendy fashion and cutting-edge electronics to home essentials and unique gifts, we cater to every lifestyle and occasion. Our diverse range of products 
        is designed to meet the ever-changing needs of our customers.</p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Quality Assurance:</strong> Every product is carefully vetted to ensure it meets our high standards.</li>
          <li><strong>Competitive Prices:</strong> We offer the best deals without compromising on quality.</li>
          <li><strong>Seamless Shopping Experience:</strong> Our user-friendly interface makes browsing, selecting, and purchasing products effortless.</li>
          <li><strong>Customer Support:</strong> Got questions? Our dedicated support team is here to help 24/7.</li>
        </ul>
        <h2>Our Mission</h2>
        <p>To transform the way you shop by providing a platform that’s reliable, innovative, and customer-focused. We’re committed to building lasting relationships 
        with our customers by delivering exceptional value and service.</p>
        <p>Thank you for choosing <strong>our ecommerce platform</strong>. We’re honored to be part of your shopping journey and can’t wait to serve you!</p>
        <p>Stay connected with us on <a href="#social-media">Social Media</a>, and never miss out on the latest trends, exclusive offers, and more.</p>
        <p><strong>Happy Shopping!</strong></p>
        </section>
        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage