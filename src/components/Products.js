import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <section style={sectionStyles}>
        <h2>Products</h2>
        <p>
            
        </p>
      </section>

      <section style={sectionStyles}>
        <h2></h2>
        <p>
          
        </p>
        <p>
  
        </p>
        <p>

        </p>
      </section>

      <section style={sectionStyles}>
        <h2>Products</h2>
        <ul style={listStyles}>
          <li>
            <Link style={linkStyles} to="/products">
              Discover Our Ice Creams
            </Link>
          </li>
          <li>
            <Link style={linkStyles} to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link style={linkStyles} to="/faqs">
              FAQs
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

// Inline styles
const sectionStyles = {
  marginBottom: '40px',
};

const listStyles = {
  listStyle: 'none',
  padding: '0',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'black',
};

export default Products;
