import "./Input.scss";

interface InputProps {
  id?: string;
  name?: string;
  className?: string;
  size?: "large" | "small";
  placeholder?: string;
  type?: "text" | "number" | "email" | "password" | "tel" | "url" | "date";
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  min?: number;
  max?: number;
  step?: number | string;
  autoComplete?: "on" | "off" | string;
}

export default function Input({
  id,
  name,
  className,
  size = "large",
  placeholder,
  type = "text",
  value,
  onChange,
  onBlur,
  disabled,
  required,
  readOnly,
  min,
  max,
  step,
  autoComplete,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      className={`${className ?? ""} ${size}`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      min={min}
      max={max}
      step={step}
      autoComplete={autoComplete}
    />
  );
}
