import styled from 'styled-components';

const WriteContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
`;

const Title = styled.input`
  display: flex;
  justify-content: center;
  height: 50px;
  margin-bottom: 30px;
  padding-left: 20px;
  font-size: 24px;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
`;

const Thumbnail = styled.div`
  height: 300px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 60px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: transparent;
  border: 1px solid #256ce1;
  padding: 5px 15px;
  color: #256ce1;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #256ce1;
    color: #fff;
  }
`;

export const style = {
  WriteContainer,
  Title,
  Thumbnail,
  ButtonContainer,
  Button,
};
