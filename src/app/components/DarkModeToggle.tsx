import { useDarkMode } from "@/app/contexts/DarkModeContext";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button
      className={`rounded border-background-nm bg-secondary-li p-2 transition-colors duration-200
      `}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <HiOutlineSun className="text-secondary-st" />
      ) : (
        <HiOutlineMoon className="text-secondary-st" />
      )}
    </button>
  );
}
