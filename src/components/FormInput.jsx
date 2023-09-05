import React, { useState } from "react";

export default function FormInput({ name, placeholder }) {
  const [value, setValue] = useState();
  const isValid = value !== "";

  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {name[0].toUpperCase() + name.slice(1)}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:shadow-sm-light"
        placeholder={placeholder}
        required
        onChange={(e) => setValue(e.target.value)}
      />
      {!isValid && <span> Input cannot be empty</span>}
    </div>
  );
}
