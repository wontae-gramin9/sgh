import { useState, useEffect, Dispatch, SetStateAction } from "react";

export function useLocalStorageState(
  initialState: boolean,
  key: string
): [boolean, Dispatch<SetStateAction<boolean>>] {
  // [Wontae] lazy state initialization
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  // [Wontae] Since the goal is not to fix the names (to create a reusable HOOK),
  // receiving [isDarkMode, setIsDarkMode] as an array in DarkModeProvider
  // makes it unclear which one is which, as arrays do not have named properties.
  // Solution: Explicitly define the order of the returned values of the hook.
  return [value, setValue];
}
