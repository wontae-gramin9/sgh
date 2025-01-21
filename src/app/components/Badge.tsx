import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";

type BadgeProps = {
  type: "success" | "error";
  children: string;
};

export default function Badge({ type, children }: BadgeProps) {
  const badgeBgColor = type === "success" ? "bg-green-1" : "bg-red-1";
  const badgeBorderColor =
    type === "success" ? "border-green-3" : "border-red-3";

  return (
    <span
      className={`${badgeBgColor} min-w-[75px] border ${badgeBorderColor} inline-flex items-center justify-center gap-1 rounded bg-green-2 p-1 py-0.5 text-xs text-white-1`}
    >
      {type === "success" ? <FaCheckCircle /> : <FaRegTimesCircle />}
      {children}
    </span>
  );
}
