import './CustomInput.scss';
import * as Icons from 'lucide-react';
import Icon from '../../atoms/Icon/Icon';

interface CustomInputProps {
    id?: string;
    name?: string;
    className?: string;
    size?: 'large' | 'small';
    placeholder?: string;
    icon?: keyof typeof Icons;
    labelLeft?: string;
    unit?: string;
    type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'date';
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    min?: number;
    max?: number;
    step?: number | string;
    autoComplete?: 'on' | 'off' | string;
}

export default function CustomInput({
    id,
    name,
    className,
    size = 'large',
    placeholder,
    icon,
    labelLeft,
    unit,
    type = 'text',
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
}: CustomInputProps) {
    return (
        <div className={`m-custom-input ${size} ${className ?? ''}`}>
            {icon && (
                <div className="icon-left">
                    <Icon name={icon} size={18} color="grey" />
                </div>
            )}

            {labelLeft && <span className="label-left">{labelLeft}</span>}

            <input
                id={id}
                name={name}
                className="custom-input-field"
                type={type}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                readOnly={readOnly}
                min={min}
                max={max}
                step={step}
                autoComplete={autoComplete}
                aria-label={placeholder || name}
            />

            {unit && <span className="unit-right">{unit}</span>}
        </div>
    );
}
