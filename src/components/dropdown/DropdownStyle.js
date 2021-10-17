import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 38px;
  flex-wrap: wrap;
  z-index: 999;

  ul {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    padding: 0;
    margin: 0;
    width: 100%;
    margin-top: 10px;
  }

  li {
    list-style-type: none;
  }

  button {
    display: flex;
    justify-content: space-between;
    background-color: white;
    font-size: 16px;
    padding: 5px 20px;
    border: 0;
    border-bottom: 1px solid #ccc;
    width: 100%;
    text-align: left;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;

    &:hover,
    &:focus {
      cursor: pointer;
      font-weight: bold;
      background-color: #ccc;
    }
  }
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  cursor: pointer;
  width: 100%;
  padding: 3px 20px;
  background-color: white;
  border-color: #ccc;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const Action = styled.div``;

export const style = {
  DropdownContainer,
  DropdownHeader,
  Title,
  Action,
};
