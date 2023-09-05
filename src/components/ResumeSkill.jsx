import React from "react";

export default function ResumeSkill({ title, text }) {
  return (
    <div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{text}</p>
    </div>
  );
}
