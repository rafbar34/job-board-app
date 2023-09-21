import React from 'react';
import {Link} from 'react-router-dom';
import {UILogo} from '../../components';
import {useForm} from 'react-hook-form';

export const Register = () => {
  const {register} = useForm();
  return (
    <form className='form'>
      <UILogo />

      <h4>Register</h4>
      <label htmlFor='name'>Name</label>
      <input
        className='form-input'
        {...register('name', {required: true, minLength: 4, maxLength: 12})}
      />

      <button
        type='submit'
        className='btn btn-block'>
        Submit
      </button>
      <p>
        Are you have account?
          <Link to={'/login'}>Login</Link>
        `
      </p>
    </form>
  );
};
