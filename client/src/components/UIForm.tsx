import React, { useContext, useState } from "react";
import { UILogo } from ".";
import { AuthWrapper } from "../css/Auth/AuthPageStyle";
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useForm,
} from "react-hook-form";
import Select from "react-select";
import { Form } from "react-router-dom";
import { DashboardContext } from "../pages/Dashboard/DashboardLayout";
type InputProps = {
  type?: string | undefined;
  title: string;
  defaultValue?: string | number | readonly string[] | undefined;
  key: any;
  rules?: RegisterOptions<FieldValues, `${any}`> | undefined;
  values?: {
    label: string;
    value: string;
  };
};
type UIFormProps = {
  onSubmit: () => void;
  title: string;
  color: string;
  bgColor: string;
  inputData: InputProps[];
  errorsData: Array<{
    name: string;
    type: string;
    message: string;
  }>;
};
export const UIForm = ({
  onSubmit,
  inputData,
  title,
  bgColor,
  errorsData,
}: UIFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm();
  const { isDarkTheme } = useContext(DashboardContext);
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
        {inputData.map((items: InputProps) =>
          items.type === "select" ? (
            <div>
              <label
                style={{ color: isDarkTheme ? "white" : "black" }}
                htmlFor="name">
                {items.title}
              </label>

              <Controller
                name="jobType"
                control={control}
                render={({ field }) => (
                  <Select
                    onChange={(e) => {
                      field.onChange(e.value);
                    }}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      backgroundColor: "red",
                      colors: {
                        ...theme.colors,
                        text: "#3599B8",
                        font: "#3599B8",
                        primary25: "#3599B8",
                        primary: "#3599B8",
                        neutral80: "black",
                        color: "black",
                      },
                    })}
                    options={items.values}
                  />
                )}
                rules={{ required: true }}
              />
            </div>
          ) : (
            <div>
              <label
                htmlFor="name"
                style={{ color: isDarkTheme ? "white" : "black" }}>
                {items.title}
              </label>
              <input
                style={{ color: !isDarkTheme ? "white" : "black" }}
                defaultValue={items.defaultValue}
                type={items.type}
                className="form-input"
                {...register(`${items.key}`, items.rules)}
              />
            </div>
          )
        )}

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
