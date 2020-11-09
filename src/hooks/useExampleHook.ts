import { useEffect, useState } from "react";

export const useExampleHook = () => {
  const [stateA, setStateA] = useState<string>();
  const [stateB, setStateB] = useState<number>();

  useEffect(() => {
    // some logic here
  }, []);

  return {
    stateA,
    stateB,
  };
};
