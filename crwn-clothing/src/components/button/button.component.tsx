import "./button.styles.scss";

type BUTTON_TYPES = "google" | "inverted";

type ButtonType = {
  google: string;
  inverted: string;
};

type otherProps = {
  type?: "button" | "submit" | "reset";
  disable?: boolean;
  name?: string;
};

type Props = {
  children: string;
  buttonType?: BUTTON_TYPES;
  otherProps: otherProps;
};

const Button = ({ children, buttonType, otherProps }: Props) => {
  const BUTTON_TYPE_CLASSES: ButtonType = {
    google: "google-sign-in",
    inverted: "inverted",
  };

  return (
    <button
      className={`button-container ${
        buttonType ? BUTTON_TYPE_CLASSES[buttonType] : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
