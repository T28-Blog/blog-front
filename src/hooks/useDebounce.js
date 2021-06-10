import { useEffect, useState } from "react";

function useDebounce(lastCall, propsHash, fn) {
  let [timer, setTimer] = useState(lastCall);
  const delay = 1000; //1s

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    const temp = setTimeout(() => fn(propsHash), delay);
    setTimer(temp);
  }, [lastCall]);

  return timer;
}

export default useDebounce;

/*const hashtag = useMemo(
    () => hashtagAPI.filterPostByHashtag(propsHash),
    [propsHash]
  );*/ //만약 다른 해시태그를 누르면 무조건 반응하게 하고 싶다면 useMemo를 적용해서 렌더링 해도 좋을 것 같음.