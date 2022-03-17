import React, { ChangeEvent } from "react";

type validate = "email" | "password" | "none";

const validation = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido.",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracteres.",
  },
  none: {
    regex: /^/,
    message: "",
  },
};

function useForm(type: validate) {
  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  function validate(value: string) {
    if (type === null) {
      return true;
    }
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function onChange({ target }: ChangeEvent<HTMLInputElement>) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    setError,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
}

export default useForm;
