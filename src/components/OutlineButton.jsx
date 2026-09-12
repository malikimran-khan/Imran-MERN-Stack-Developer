import React from "react";
import { Link } from "react-router-dom";

export default function OutlineButton({ children, to, type = "button", className = "" }) {
  const classes = `inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-[var(--color-accent)] px-7 py-3 text-sm font-bold text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)] ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
