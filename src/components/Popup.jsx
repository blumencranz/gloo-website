// src/components/Popup.jsx
import React, { useEffect } from "react";
import styled from "styled-components";

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  z-index: 1000;
`;

const PopupBox = styled.div`
  position: relative;
  background-color: white;
  border-radius: 15px;
  padding: 30px;
  width: 90%;
  height: 90%;
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  /* Font Styling */
  color: #333;

  /* Custom Scrollbar Styling */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #888 transparent; /* For Firefox */

  ::-webkit-scrollbar {
    width: 6px; /* Narrower scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: transparent; /* Transparent track */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Minimalist thumb color */
    border-radius: 10px; /* Rounded scrollbar thumb */
    border: 2px solid transparent; /* Adds space around the thumb */
    background-clip: padding-box; /* Ensures the border is inside the thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Darker on hover */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px; /* Changed to right for better placement */
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;

const Popup = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <PopupBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </PopupBox>
    </Overlay>
  );
};

export default Popup;
