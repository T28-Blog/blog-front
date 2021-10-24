import React, { useState } from 'react';
import { style } from './DropdownStyle';
import { FaCaretDown } from 'react-icons/fa';

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const items = ['Travel', 'Food', 'IT', 'T.I.L', 'Review'];

  return (
    <DropdownContainer>
      <DropdownHeader
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {selected}
        <span>
          <FaCaretDown />
        </span>
      </DropdownHeader>
      {isActive && (
        <DropdownContent>
          {items.map((item) => (
            <DropdownItem
              onClick={() => {
                setSelected(item);
                setIsActive(false);
              }}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

const { DropdownContainer, DropdownHeader, DropdownContent, DropdownItem } =
  style;
