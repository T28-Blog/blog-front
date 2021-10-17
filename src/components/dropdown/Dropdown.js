import React, { useState } from 'react';
import { style } from './DropdownStyle';
import { FaCaretUp, FaCaretDown, FaCheckCircle } from 'react-icons/fa';

const Dropdown = ({ title, items, multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id,
      );
      setSelection([...selectionAfterRemoval]);
    }
  };

  const isItemInSelection = (item) => {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  };

  return (
    <DropdownContainer>
      <DropdownHeader
        tabIndex={0}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <Title>{title}</Title>
        <Action>
          <span>{open ? <FaCaretUp /> : <FaCaretDown />}</span>
        </Action>
      </DropdownHeader>
      {open && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && <FaCheckCircle />}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;

const { DropdownContainer, DropdownHeader, Title, Action } = style;
