import React from "react";

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-sky-700",

    secondary:
      "border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white",
  };

  return (
    <button
      className={`group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300 shadow-sm hover:shadow-lg ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
