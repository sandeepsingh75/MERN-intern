import { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState("light");

  const squared = useMemo(() => {
    console.log("Calculating...");
    return number * number;
  }, [number]);

  return (
    <div>
      <p>Square: {squared}</p>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }>
        Change Theme: {theme}
      </button>
    </div>
  );
}

export default UseMemo;