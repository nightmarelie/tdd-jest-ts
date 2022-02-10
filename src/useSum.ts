import { useState } from "react";
export const useSum = () => {
  const [sum, setSum] = useState(0);

  const add = (value: number) => setSum((oldNumber) => oldNumber + value);

  return { sum, add };
};
