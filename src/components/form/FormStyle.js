import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Formcontent = styled.div``;

const Form = styled.form`
  width: 600px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;

  h1 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #000;
    margin-bottom: 60px;
  }
`;

const FormInputs = styled.div`
  width: 100%;
  margin-bottom: 15px;

  p {
    font-size: 14px;
    margin-top: 5px;
    color: red;
  }
`;

const FormLabel = styled.label`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;

  span {
    color: red;
  }
`;

const TextInput = styled.input`
  display: block;
  margin: 0;
  padding: 0;
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  width: 96%;
  padding-left: 20px;

  &::placeholder {
    font-size: 14px;
    padding-left: 10px;
  }
`;

const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  border-radius: 10px;
  background: #47c9e5;
  outline: none;
  border: none;
  color: #fff;
  font-size: 20px;
  margin-bottom: 10px;

  &:hover {
    background: #42bad4;
    cursor: pointer;
    transition: all 0.4s ease-out;
  }
`;

const ExtraText = styled.span`
  font-size: 14px;
  text-align: center;
`;

const TextLink = styled(Link)`
  text-decoration: none;
  color: blue;
  font-weight: 600;
`;

export const style = {
  Formcontent,
  Form,
  FormInputs,
  FormLabel,
  TextInput,
  FormBtn,
  ExtraText,
  TextLink,
};
