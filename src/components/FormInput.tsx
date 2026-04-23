import React from 'react';
import { motion } from 'motion/react';

interface FormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required = true
}) => {
  return (
    <div>
      <label className="block text-white mb-2 text-sm font-semibold uppercase tracking-widest">
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
      />
    </div>
  );
};

export default FormInput;
