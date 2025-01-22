import { FaCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import { toast } from "react-toastify";

type CustomToastProps = {
  type: "success" | "error";
  msg: string;
};

function CustomToast({ type, msg }: CustomToastProps) {
  // ${type === "success" ? "bg-success-st" : "bg-error-st"}
  // dark:bg-gray-800 dark:text-gray-400

  return (
    <div
      className={`flex w-full max-w-xs items-center rounded-sm
        ${type === "success" ? "bg-success-nm" : "bg-error-nm"}
       p-4 text-background-st shadow`}
      role="alert"
    >
      <div
        className={`inline-flex size-8 shrink-0 items-center justify-center rounded-lg
            ${type === "success" ? "bg-success-st" : "bg-error-st"}
         `}
      >
        {type === "success" ? <FaCheckCircle /> : <FaRegTimesCircle />}
      </div>
      <div className="ms-3 text-sm font-semibold">{msg}</div>
    </div>
  );
}

export const successToast = (msg: string) => {
  toast.success(<CustomToast type="success" msg={msg} />, {
    icon: false,
    autoClose: 5000,
    closeOnClick: true,
    closeButton: true,
    className: "p-0", // remove the padding on the toast wrapper
  });
};

export const errorToast = (msg: string) => {
  toast.error(<CustomToast type="error" msg={msg} />, {
    icon: false,
    autoClose: 5000,
    closeOnClick: true,
    closeButton: true,
    className: "p-0", // remove the padding on the toast wrapper
  });
};
