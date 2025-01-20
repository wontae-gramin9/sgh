import React, { ButtonHTMLAttributes } from "react";

// [Wontae] to automatically inherit all standard HTML attributes for a `<button>` element,
// such as `disabled`, `type`, `onClick`, etc
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      {...props}
      className={`inline-block rounded-lg border border-purple bg-purple px-5 py-2.5 text-sm text-white transition-colors duration-500 hover:bg-darkpurple`}
    >
      {children}
    </button>
  );
}
