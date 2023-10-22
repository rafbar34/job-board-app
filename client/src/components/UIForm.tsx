import React, {useEffect, useState} from 'react';
import {UILogo} from '.';
import {AuthWrapper} from '../css/Auth/AuthPageStyle';
import {useForm} from 'react-hook-form';
import {Form, Link} from 'react-router-dom';
import {registerErrors} from '../data/constans/registerInput';
import {ErrorMessage} from '@hookform/error-message';

export const UIForm = ({onSubmit, registerData, title}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm();

  let errorsArray = [];
  for (const error in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, error)) {
      errors[error].name = error;
      errorsArray.push(errors[error]);
    }
  }
  console.log(errorsArray)
  return (
    <AuthWrapper>
      <Form
        method='post'
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
          onClick={() => {
            registerErrors.forEach(({name, type, message}) =>
              setError(name, {type, message}, {shouldFocus: true})
            );
          }}
          type='submit'
          className='btn btn-block'>
          Submit
        </button>

        {errors &&
          errorsArray?.map((error) => <div>{error &&`${error?.name}: ${error?.message}`}</div>)}
      </Form>
    </AuthWrapper>
  );
};
