import React from 'react';
import {Link} from 'react-router-dom';
import {UIForm} from '../../components/UIForm';
import {RegisterWraper} from '../../css/Auth/AuthPageStyle';
import {registerData} from '../../data/constans/registerInput';
import {registerAPI} from '../../api/api';

export const Register = () => {
  const onSubmit = async (data) => {
    console.log(data);
    // async request which may result error
    try {
      const res = await registerAPI({data});
    } catch (e) {
      console.log(e);
      // handle your error
    }
  };

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
