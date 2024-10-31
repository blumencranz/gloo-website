// src/components/Popup.jsx
import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Keyframe animation for easing in effect
const easeInFromBottom = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Keyframe animation for easing out effect
const easeOutToBottom = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
`;

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
  color: #333;

  /* Apply the animation based on the isClosing state */
  ${({ isClosing, hasOpened }) =>
    isClosing && hasOpened
      ? css`
          animation: ${easeOutToBottom} 0.3s ease-in-out forwards;
        `
      : css`
          animation: ${easeInFromBottom} 0.3s ease-in-out forwards;
        `}

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
  position: absolute; /* Changed to absolute for positioning within the overlay */
  top: 105px;
  right: 175px; /* Ensure the button is in the top right corner */
  font-size: 36px;
  background: none;
  border: none;
  cursor: pointer;
  color: gray; /* Ensure the button is always visible */
  z-index: 99999; /* Ensure the button is above other content */

  &:hover {
    color: #000; /* Make the button more prominent on hover */
    background: none;
  }
`;

const Popup = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setHasOpened(true);
      setContentVisible(true);
    } else if (hasOpened) {
      setContentVisible(false);
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, 300); // Match the duration of the ease-out animation
    }
  }, [isOpen, onClose, hasOpened]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <Overlay onClick={onClose}>
      <CloseButton onClick={onClose}>&times;</CloseButton>
      <PopupBox
        isClosing={isClosing}
        hasOpened={hasOpened}
        onClick={(e) => e.stopPropagation()}
      >
        {contentVisible && children}
      </PopupBox>
    </Overlay>
  );
};

export default Popup;
