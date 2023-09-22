import React from 'react';
import {UILogo} from '.';
import {AuthWrapper} from '../css/Auth/AuthPageStyle';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';

export const UIForm = ({onSubmit, registerData, title}) => {
  const {register, handleSubmit} = useForm();
  return (
    <AuthWrapper>
      <form
        className='form'
        onSubmit={handleSubmit(onSubmit)}>
        <UILogo />

        <h4>{title}</h4>
        {registerData.map((items) => (
          <div>
            <label htmlFor='name'>{items.title}</label>
            <input
              type={items.type}
              className='form-input'
              {...register(`${items.key}`, items.rules)}
            />
          </div>
        ))}
        <button
          type='submit'
          className='btn btn-block'>
          Submit
        </button>
      </form>
    </AuthWrapper>
  );
};
