import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 30px auto;
`;

const HashTagContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  height: ${(props) => (props.isOpen ? '88px' : '34px')};
  overflow: hidden;
  transition: 0.2s;
`;

const HashTagBox = styled.div`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #959595;
  font-size: 14px;
  font-weight: 300;
  border: 1px solid #d1d1d1;
  border-radius: 16px;
  padding: 4px 10px;
  margin-right: 10px;
  margin-bottom: 20px;
`;

const MoreBtn = styled.button`
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  font-size: 12px;
  color: gray;
`;

export const style = {
  Container,
  HashTagContent,
  HashTagBox,
  MoreBtn,
};
