type ButtonProps = {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ text, type, disabled, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn btn-outline btn-primary ${disabled ? "btn-disabled" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
