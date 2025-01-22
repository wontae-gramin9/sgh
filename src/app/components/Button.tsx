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
      className={`inline-block min-w-[135px] rounded-lg border border-primary-st bg-primary-nm px-5 py-2.5 text-sm text-foreground-st transition-colors duration-500 hover:bg-primary-st`}
    >
      {children}
    </button>
  );
}
