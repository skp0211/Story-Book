import React from "react";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  helperText,
  type = "text",
}) => {
  return (
    <div className="card text-left">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {helperText && (
        <p className="mt-2 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};
