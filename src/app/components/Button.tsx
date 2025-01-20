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
      className={`inline-block rounded-lg border bg-lavender px-5 py-2.5 text-sm text-violet hover:bg-purple hover:text-white`}
    >
      {children}
    </button>
  );
}
