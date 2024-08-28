import { useEffect, useState } from "react";

type TimerProps = {
  onEnd: () => void;
};

export default function Timer({ onEnd }: TimerProps) {
  const [count, setCount] = useState(60);

  useEffect(() => {
    if (count === 0) {
      onEnd();
      return;
    }
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count, onEnd]);

  return <p>Time left: {count} seconds</p>;
}
