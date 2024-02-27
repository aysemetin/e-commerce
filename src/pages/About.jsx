import React from "react";

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center mt-5">
          <img
            src="src/image/team-photo.jpg"
            alt="About Us"
            className="img-fluid" 
            style={{ width: "600px", height: "auto" }} 
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="text-center mt-3">About Us</h1>
          <p className="text-center mx-5">
            Welcome to A-Store, your one-stop destination for all your shopping
            needs! We are dedicated to providing you with the best online shopping
            experience, with a focus on dependability, customer service, and
            uniqueness. Founded in 2007, A-Store has come a long way from its
            beginnings. When we first started out, our passion for delivering
            high-quality products at affordable prices drove us to establish an
            online platform that connects customers with a wide range of products
            from various categories. We believe in offering a seamless shopping
            experience, where customers can browse through our extensive collection
            of products conveniently and securely. From fashion and electronics to
            home essentials and beauty products, we've got you covered. At A-Store,
            customer satisfaction is our top priority. Our team is committed to
            ensuring that every customer receives personalized attention and
            assistance whenever needed. Whether you have a question about a product
            or need help with your order, our dedicated customer support team is
            here to assist you every step of the way. We also take pride in our
            commitment to sustainability and ethical business practices. We work
            closely with suppliers who share our values to ensure that our products
            are sourced responsibly and ethically. Thank you for choosing A-Store
            for your online shopping needs. We look forward to serving you and
            exceeding your expectations every time you shop with us. Happy shopping!
          </p>
          <h5 className="text-end">The A-Store Team</h5>
        </div>
      </div>
    </div>
  );
}

export default About;
