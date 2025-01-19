import React, { ButtonHTMLAttributes } from "react";

// intrinsicAttribute를 사용해서 prop으로 명시하지 않아도
// 상속해서 받을 수 있게 하는 것
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children, ...props }: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      {...props}
      className={`inline-block rounded-lg border bg-white-100 px-5 py-2.5 text-sm font-medium hover:text-white-100`}
    >
      {children}
    </button>
  );
}
