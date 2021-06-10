import { useEffect, useRef } from "react";
import ResizeObserver from "resize-observer-polyfill";

const useResizeObserver = (callback, element) => {
  const node = element && element.current;

  const observer = useRef(null);

  useEffect(() => {
    if (observer && observer.current && element && node) {
      observer.current.unobserve(node);
    }

    const resizeObserverPolyfill = ResizeObserver;
    observer.current = new resizeObserverPolyfill(callback);
    observe();

    return () => {
      if (observer && observer.current && node) {
        observer.current.unobserve(node);
      }
    };
  }, [node]);

  const observe = () => {
    if (element && node && observer.current) {
      observer.current.observe(node);
    }
  };
};

export default useResizeObserver;
