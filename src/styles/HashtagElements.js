import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  max-height: 370px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
  @media screen and (max-width: 768px) {
    width: 650px;
    margin-bottom: 30px;
    max-height: 300px;
  }
  @media screen and (max-width: 375px) {
    display: block;
    width: 375px;
    margin: 0 auto;
  }
`;

export const HashContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.more || props.myBlog ? "inherit" : "130px")};
  min-height: 130px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 6px;
  transition: heigth 2s ease-in;
  border-top: 1px solid #dfe6e9;
  @media screen and (max-width: 768px) {
    column-gap: 2px;
    height: ${(props) => (props.more ? "inherit" : "68px")};
    min-height: 68px;
  }
`;

export const Title = styled.div`
  width: 100px;
  height: 20px;
  line-height: 20px;
  text-align: start;
  color: #485460;
  padding-left: 2px;
`;

export const HashtagBtn = styled.div`
  width: fit-content;
  height: 28px;
  line-height: 28px;
  padding: 0px 4px;
  margin-top: 10px;
  margin-right: 8px;
  text-align: center;
  align-self: center;
  border: 1px solid #d2dae2;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
    border: 1px solid #256ce1;
  }
`;

export const Span = styled.span`
  font-size: 0.8rem;
  color: #808e9b;
  white-space: nowrap;
`;

export const MoreBtn = styled.button`
  all: unset;
  font-size: 0.8rem;
  width: 40px;
  padding-left: 2px;
  height: 20px;
  line-height: 20px;
  text-align: start;
  font-weight: 350;
  color: #256ce1;
  text-align: center;
  border-radius: 4px;
`;
