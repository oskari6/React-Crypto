import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p>count: {count}</p>;
}
