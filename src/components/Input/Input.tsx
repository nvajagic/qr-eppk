import { useField } from "formik";

type InputProps = {
  label: string;
  placeholder: string;
  name: string;
  upperCase?: boolean;
};

const Input = ({ label, ...props }: InputProps) => {
  const [field, meta] = useField(props);

  return (
    <label className="form-control w-full max-w-xs">
      <span className="label-text pb-2">{label}</span>
      <input
        {...field}
        type="text"
        placeholder={props.placeholder}
        className={`input input-bordered ${meta.touched && meta.error ? "input-error" : ""} w-full max-w-xs`}
        style={{ textTransform: props.upperCase ? "uppercase" : "none" }}
      />
    </label>
  );
};

export default Input;
