import { useState, useEffect } from "react";

export function useLocalStorageState(initialState: boolean, key: string) {
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

  return [value, setValue];
}
