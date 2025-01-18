type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-block rounded-lg border bg-white-100 px-5 py-2.5 text-sm font-medium hover:text-white-100`}
    >
      {children}
    </button>
  );
}
