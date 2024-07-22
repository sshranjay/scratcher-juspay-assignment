import React from "react";

const RunButton = ({ className, disabled, onClick }) => {
  return (
    <button
      type="button"
      className={`text-white ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:focus:ring-blue-800 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      <svg
        className={`w-5 h-5 ${disabled ? 'text-gray-600' : 'text-white'}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
      <span className={`ms-2 ${disabled ? 'text-gray-600' : 'text-white'}`}>Execute Workflow</span>
    </button>
  );
};

export default RunButton;
