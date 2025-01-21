import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";

type BadgeProps = {
  type: "success" | "error";
  children: string;
};

export default function Badge({ type, children }: BadgeProps) {
  const badgeBgColor = type === "success" ? "bg-success-li" : "bg-error-li";
  const badgeBorderColor =
    type === "success" ? "border-success-st" : "border-error-st";

  return (
    <span
      className={`${badgeBgColor} min-w-[75px] border ${badgeBorderColor} inline-flex items-center justify-center gap-1 rounded bg-success-nm p-1 py-0.5 text-xs text-background-li`}
    >
      {type === "success" ? <FaCheckCircle /> : <FaRegTimesCircle />}
      {children}
    </span>
  );
}
