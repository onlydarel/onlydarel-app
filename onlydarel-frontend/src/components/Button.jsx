import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this matches your routing library

const Button = ({ children, to, variant = "primary" }) => {
  const baseClass =
    "font-medium px-6 py-3 rounded-lg transition-all";
  const styles = {
    primary: "bg-secondary text-primary hover:bg-yellow-500",
    secondary:
      "border border-secondary text-white hover:bg-secondary hover:text-primary",
  };

  return (
    <Link to={to} className={`${baseClass} ${styles[variant]}`}>
      {children}
    </Link>
  );
};

export default Button;
