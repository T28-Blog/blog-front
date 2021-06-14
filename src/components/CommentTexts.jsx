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
  }, [props, ref]);

  //resizeObserver callback func
  const resizeCallback = (nodes) => {
    const handleBtn = (node) => {
      const { target } = node;
      if (node.contentRect.height < target.scrollHeight) {
        setShowingBtn(true);
      } else {
        setShowingBtn(false);
      }
    };

    for (let node of nodes) {
      if (node !== null) {
        handleBtn(node);
      }
    }
  };

  //textArea 부분 resizing 감지
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
