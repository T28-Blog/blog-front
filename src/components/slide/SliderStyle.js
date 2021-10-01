import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const SlideBg = styled.div`
  width: 100vw;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const style = {
  Container,
  SlideBg,
};
