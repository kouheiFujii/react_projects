import { ChangeEvent } from "react";

import "./form-input.styles.scss";

type InputOptions = {
  type: string;
  required: boolean;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type Props = {
  label: string;
  inputOptions: InputOptions;
};

const FormInput = (props: Props) => {
  const { label, inputOptions } = props;

  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
