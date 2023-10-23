import React from 'react';
import {Link} from 'react-router-dom';
import {UIForm} from '../../components/UIForm';
import {RegisterWraper} from '../../css/Auth/AuthPageStyle';
import {LoginAPI} from '../../api/api';
import { loginData, loginErrors } from '../../data/constans/registerInput';

export const Login = () => {
  const onSubmit = async (data: object) => {
    try {
      const res =await LoginAPI({data});
      if (res?.token) {
        console.log('its work');
      }
    } catch (e) {
      // handle your error
    }
  };

  return (
    <RegisterWraper>
      <UIForm
        title={'Login'}
        onSubmit={onSubmit}
        inputData={loginData}
        errorsData={loginErrors}

      />
      <div className='btn-container'>
        <p className='btn-desc'>
          Are you want create account?
          <Link to={'/register'}>Register</Link>`
        </p>
      </div>
      <div className='btn-container'>
        <p className='btn-desc'>
          Are you want create account?
          <Link to={'/register'}>Explore app</Link>`
        </p>
      </div>
    </RegisterWraper>
  );
};
