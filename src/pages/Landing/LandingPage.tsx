import React from 'react';
import {Link} from 'react-router-dom';
import {LandingWrapper} from '../../css/LandingStyle/LandingPageStyle';
import { UILogo } from '../../components';
export const LandingPage = () => {
  return (
    <LandingWrapper>
      <nav>
        <UILogo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Get <span>job</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            quidem optio dolore voluptates modi aperiam eveniet repudiandae
            veritatis aliquam ex deserunt unde, id, reiciendis doloribus facere
            voluptatum ad officiis officia.
          </p>
          <Link
            to='/register'
            className='btn register-link'>
            Register
          </Link>
          <Link
            to='/login'
            className='btn'>
            Login
          </Link>
        </div>
        <img className='img main-img'></img>
      </div>
    </LandingWrapper>
  );
};
