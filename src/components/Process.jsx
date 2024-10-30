// src/components/Process.jsx
import React, { useState } from "react";
import styled from "styled-components";
import processData from "../data/processData"; // Import card data
import componentMap from "../data/componentMap"; // Import the component map
import Popup from "./Popup"; // Import the Popup component

// Styled Components

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on wider screens */
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr); /* Two columns on wider screens */
  }
`;

const Card = styled.div`
  width: 100%;
  height: 300px;
  aspect-ratio: 1;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const Icon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const Splash = styled.p`
  margin-top: 10px;
  color: #666;
  font-size: 1rem;
`;

// Process Component
const Process = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedId(id); // Store the selected component ID
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
    setSelectedId(null); // Clear the selection
  };

  const SelectedComponent = selectedId ? componentMap[selectedId] : null;

  return (
    <>
      <Gallery>
        {Object.values(processData).map((item) => (
          <Card key={item.id} onClick={() => handleCardClick(item.id)}>
            <Icon>{item.icon}</Icon>
            <Title>{item.title}</Title>
            <Splash>{item.splash}</Splash>
          </Card>
        ))}
      </Gallery>

      <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
        {SelectedComponent && <SelectedComponent />}
      </Popup>
    </>
  );
};

export default Process;
