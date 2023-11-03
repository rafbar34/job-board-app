import React from "react";
import { UILogo } from ".";
import { AuthWrapper } from "../css/Auth/AuthPageStyle";
import { useForm } from "react-hook-form";
import { Form } from "react-router-dom";

export const UIForm = ({
  onSubmit,
  inputData,
  title,
  color = "black",
  bgColor,
  errorsData,
}) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  let errorsArray = [];
  for (const error in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, error)) {
      errors[error].name = error;
      errorsArray.push(errors[error]);
    }
  }
  return (
    <AuthWrapper>
      <Form
        method="post"
        className="form"
        style={{ backgroundColor: bgColor }}
        onSubmit={handleSubmit(onSubmit)}>
        <UILogo />

        <h4>{title}</h4>
        {inputData.map((items) => (
          <div>
            <label
              style={{ color: color }}
              htmlFor="name">
              {items.title}
            </label>
            <input
              defaultValue={items.defaultValue}
              type={items.type}
              className="form-input"
              style={{ color: color }}
              {...register(`${items.key}`, items.rules)}
            />
          </div>
        ))}

        <button
          onClick={() => {
            errorsData.forEach(({ name, type, message }) =>
              setError(name, { type, message }, { shouldFocus: true })
            );
          }}
          type="submit"
          className="btn btn-block">
          Submit
        </button>

        <div className="errors">
          {errors &&
            errorsArray?.map((error) => (
              <div className="error-block">
                <div>{error && `${error?.name}`}</div>
                <div className="error">{error && `: ${error?.message}`} </div>
              </div>
            ))}
        </div>
      </Form>
    </AuthWrapper>
  );
};
