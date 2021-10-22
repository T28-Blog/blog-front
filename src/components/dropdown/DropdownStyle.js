import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 38px;
  flex-wrap: wrap;
  z-index: 999;
  user-select: none;
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
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.075);
  margin-bottom: 5px;
`;

const DropdownContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  border-color: #ccc;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.075);
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
`;

export const style = {
  DropdownContainer,
  DropdownHeader,
  DropdownContent,
  DropdownItem,
};
