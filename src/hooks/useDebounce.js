import { useEffect, useState } from "react";

function useDebounce(lastCall, propsHash, fn) {
  let [timer, setTimer] = useState(lastCall);
  const delay = 500; //0.5s

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    const temp = setTimeout(() => fn(propsHash), delay);
    setTimer(temp);

    return () => clearTimeout(timer);
  }, [lastCall]);

  return timer;
}

export default useDebounce;
