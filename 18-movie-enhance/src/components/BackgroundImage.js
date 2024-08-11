import { useState, useEffect, flushSync } from "react";

export default function BackgroundImage({ change }) {
  const [imageChanged, setImageChanged] = useState(false);
  const [checkTheme, setCheckTheme] = useState("dark");
  const { theme: theme } = change;

  useEffect(() => {
    document.startViewTransition(() => {
      flushSync(() => {
        setCheckTheme((checkTheme) => theme);
      });
    });
  }, [theme]);

  return (
    <>
      {checkTheme === "dark" && (
        <img key={theme} className={`background-image bg-dark`}></img>
      )}
      {checkTheme === "light" && (
        <img key={theme} className={`background-image bg-light`}></img>
      )}
    </>
  );
}
