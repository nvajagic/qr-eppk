type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  error: boolean;
  onChange: (value: string) => void;
};

const Input = ({ label, placeholder, value, error, onChange }: InputProps) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`input input-bordered ${error ? "input-error" : ""} w-full max-w-xs`}
      />
    </label>
  );
};

export default Input;
