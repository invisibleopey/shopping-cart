import React from 'react';
import picture from '../assets/picture.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();

  return (
    <div className="home">
      <div className="left">
        <img src={picture} alt="five friends in street clothes" />
        <span>
          Photo by{' '}
          <a href="https://unsplash.com/@forcemajeure?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Force Majeure
          </a>{' '}
          on{' '}
          <a href="https://unsplash.com/s/photos/fashion-shoot?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
      <div className="right">
        <span>Best online store of the year</span>
        <h1>We are fashion! We will clad you in the flyest garbs.</h1>
        <button
          onClick={() => {
            navigate('/shop');
          }}
        >
          Shop Now
        </button>
      </div>{' '}
    </div>
  );
}

export default Home;
