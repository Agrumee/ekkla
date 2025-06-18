import "./Input.scss";

interface InputProps {
  id?: string;
  name?: string;
  className?: string;
  size?: "large" | "small";
  placeholder?: string;
  type?: "text" | "number" | "email" | "password" | "tel" | "url" | "date" | "checkbox" | "radio";
  value?: string | number;
  checked?: boolean; // utile pour radio/checkbox
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
  checked,
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
  const isOptionInput = type === "checkbox" || type === "radio";
  const inputClass = isOptionInput ? `custom-${type}` : `${size}`;

  return (
    <input
      id={id}
      name={name}
      className={`a-input ${className ?? ""} ${inputClass}`}
      placeholder={!isOptionInput ? placeholder : undefined}
      type={type}
      value={value}
      checked={checked}
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
