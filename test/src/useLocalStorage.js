import { useState, useEffect } from "react";

export default function useLocalStorageState(key, initialValue = "") {
  const [value, setValue] = useState(function () {
    const storedItem = localStorage.getItem(key);
    return initialValue ? initialValue : storedItem;
  });
  console.log(value);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}
