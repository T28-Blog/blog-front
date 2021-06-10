import useResizeObserver from "hooks/useResizeObserver";
import React, { useEffect, useState } from "react";
import { Text, MoreBtn } from "styles/CommentElements";

const CommentTexts = React.forwardRef((props, ref) => {
  const [isShowBtn, setShowingBtn] = useState(false);
  const [isClosed, setClosed] = useState(false);

  useEffect(() => {
    if (ref && ref.current) {
      const { current } = ref;
      if (current.getBoundingClientRect().height < current.scrollHeight) {
        setShowingBtn(true);
      }
    }
  }, []);

  //여러 개의 ref를 감지하기 위해 useCallback 사용(더보기 버튼)
  const resizeCallback = (nodes) => {
    for (let node of nodes) {
      if (node !== null) {
        const { target } = node;
        if (node.contentRect.height < target.scrollHeight) {
          setShowingBtn(true);
        } else {
          setShowingBtn(false);
        }
      }
    }
  };

  useResizeObserver(resizeCallback, ref);

  const onHandleBtn = (e) => {
    if (ref && ref.current) {
      const { current } = ref;
      current.classList.toggle("show");
      setClosed((prev) => !prev);
    }
  };

  return (
    <>
      <Text ref={ref}>{props.texts}</Text>
      {(isShowBtn || isClosed) && (
        <MoreBtn onClick={onHandleBtn}>{isClosed ? "닫기" : "더보기"}</MoreBtn>
      )}
    </>
  );
});

export default CommentTexts;
