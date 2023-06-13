import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div>
      <section style={sectionStyles}>
        <h2>Welcome to Ice Gainz</h2>
        <p>
          At Ice Gainz, we believe that you shouldn't have to sacrifice taste to
          reach your fitness goals. That's why we've created a range of delicious
          protein ice creams that not only satisfy your sweet cravings but also
          support your muscle recovery and growth.
        </p>
        <p>
          We are passionate about helping you live a healthy and active lifestyle,
          without compromising on flavor. Our ice creams are carefully crafted
          using premium ingredients and packed with high-quality protein to fuel
          your gains.
        </p>
        <p>
          Join us on this tasty journey as we redefine what it means to indulge
          while making gains. Treat yourself to guilt-free ice cream that nourishes
          your body and satisfies your dessert desires.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2>Our Story</h2>
        <p>
          Ice Gainz started as a small family-owned business with a mission to
          create a healthier alternative to traditional ice cream. It all began
          when our founder, Jane, struggled to find a dessert that aligned with
          her fitness goals while still providing the satisfaction of a delicious
          treat.
        </p>
        <p>
          Inspired by her passion for fitness and her love for ice cream, Jane
          set out to develop a protein ice cream that would bridge the gap
          between taste and nutrition. With meticulous attention to detail and
          countless taste tests, Ice Gainz was born.
        </p>
        <p>
          Today, Ice Gainz continues to grow, spreading joy and health one scoop
          at a time. We are grateful for the support of our amazing community and
          the opportunity to be part of your journey towards a fitter, happier,
          and tastier life.
        </p>
      </section>

      <section style={sectionStyles}>
        <h2>Explore More</h2>
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

export default AboutMe;
