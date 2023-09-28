import React from 'react';
import {Link} from 'react-router-dom';
import {UIForm} from '../../components/UIForm';
import {RegisterWraper} from '../../css/Auth/AuthPageStyle';

export const Register = () => {
  const onSubmit = async (data) => {
    console.log(data);
    // async request which may result error
    try {
      // await fetch()
    } catch (e) {
      // handle your error
    }
  };
  const registerData = [
    {
      key: 'name',
      title: 'Name',
      type: 'text',
      rules: {required: true, minLength: 4, maxLength: 12},
    },
    {
      key: 'lastName',
      title: 'Last name',
      type: 'text',
      rules: {required: true, minLength: 4, maxLength: 12},
    },
    {
      key: 'email',
      title: 'E-mail',
      type: 'email',
      rules: {required: true, minLength: 4, maxLength: 12},
    },
    {
      key: 's',
      title: 'Password',
      type: 'password',
      rules: {required: true, minLength: 4, maxLength: 12},
    },
  ];
  return (
    <RegisterWraper>
      <UIForm
        title={'Register'}
        onSubmit={onSubmit}
        registerData={registerData}
      />
      <div className='btn-container'>
        <p className='btn-desc'>
          Are you have account?
          <Link to={'/login'}>Login</Link>`
        </p>
      </div>
    </RegisterWraper>
  );
};
