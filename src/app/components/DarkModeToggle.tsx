import { useDarkMode } from "@/app/contexts/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      className={`rounded border-black-2 ${
        isDarkMode ? "bg-red-1 " : "bg-yellow-1 "
      } p-2 transition-colors duration-200
      `}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <HiOutlineSun className="text-red-3" />
      ) : (
        <HiOutlineMoon className="text-yellow-3" />
      )}
    </button>
  );
}
