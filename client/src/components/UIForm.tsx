import React, { useContext, useEffect, useState } from "react";
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
  defaultValue: object | undefined;
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
  defaultValue,
}: UIFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const [file, setFile] = useState<null | string>(null);
  const { isDarkTheme } = useContext(DashboardContext);
  const errorsArray = [];
  for (const error in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, error)) {
      errors[error].name = error;
      errorsArray.push(errors[error]);
    }
  }
  async function getBase64(file) {
    const rawFile = file.target.files[0];
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(rawFile);
      reader.onload = (e) => {
        setFile(reader.result);
        resolve(reader.result);
      };
      if (
        rawFile.type !== "image/png" &&
        rawFile.type !== "image/jpg" &&
        rawFile.type !== "image/jpeg"
      ) {
        window.alert("File does not support. You must use .png or .jpg ");
        return (reader.onerror = reject);
      }
      if (rawFile.size > 5e6) {
        window.alert("Please upload a file smaller than 5 MB");
        return (reader.onerror = reject);
      }
      reader.onerror = reject;
    });
  }
  useEffect(() => {
    if (defaultValue) {
      const newArray = Object.entries(defaultValue);
      console.log(newArray);
      newArray.forEach((element) => {
        setValue(element[0], element[1]);
      });
    }
  }, [defaultValue]);
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
            <div key={items.key}>
              <div style={{ marginBottom: 5, marginTop: 5 }}>
                <label
                  style={{ color: isDarkTheme ? "white" : "black" }}
                  htmlFor="name">
                  {items.title}
                </label>
              </div>

              <Controller
                name={items.key}
                control={control}
                render={({ field }) => (
                  <Select
                    onChange={(e) => {
                      field.onChange(e.value);
                    }}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,

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
          ) : items.type === "file" ? (
            <div key={items.key}>
              <label
                htmlFor="name"
                style={{ color: isDarkTheme ? "white" : "black" }}>
                {items.title}
              </label>
              <Controller
                name={items.key}
                control={control}
                render={({ field }) => (
                  <input
                    style={{ color: !isDarkTheme ? "white" : "black" }}
                    defaultValue={items.defaultValue}
                    type={items.type}
                    accept="image/png, image/jpeg"
                    className="form-input"
                    onChange={async (e) => field.onChange(await getBase64(e))}
                  />
                )}
              />

              {file && (
                <img
                  height={130}
                  width={110}
                  src={file}
                />
              )}
            </div>
          ) : (
            <div key={items.key}>
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
            errorsArray?.map((error, index) => (
              <div
                key={index}
                className="error-block">
                <div>{error && `${error?.name}`}</div>
                <div className="error">{error && `: ${error?.message}`} </div>
              </div>
            ))}
        </div>
      </Form>
    </AuthWrapper>
  );
};
