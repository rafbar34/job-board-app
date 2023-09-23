import React from 'react';
import {Link} from 'react-router-dom';
import {UIForm} from '../../components/UIForm';
import {RegisterWraper} from '../../css/Auth/AuthPageStyle';

export const Login = () => {
  const onSubmit = async (_data: object) => {
    // async request which may result error
    try {
      // await fetch()
    } catch (e) {
      // handle your error
    }
  };
  const registerData = [
    {
      key: 'email',
      title: 'E-mail',
      type: 'email',
      rules: {required: true, minLength: 4, maxLength: 12},
    },
    {
      key: 'password',
      title: 'Password',
      type: 'password',
      rules: {required: true, minLength: 4, maxLength: 12},
    },
  ];
  return (
    <RegisterWraper>
      <UIForm
        title={'Login'}
        onSubmit={onSubmit}
        registerData={registerData}
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
