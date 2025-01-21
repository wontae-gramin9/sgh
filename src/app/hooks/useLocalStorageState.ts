import { useState, useEffect } from "react";

export function useLocalStorageState(initialState: boolean, key: string) {
  // [Wontae] lazy state initialization
  const [value, setValue] = useState(initialState);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, [key, setValue]);

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
