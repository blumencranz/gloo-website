// Process.jsx
import React from "react";
import styled from "styled-components";
import processData from "../data/processData";

// Styled Components
const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  padding-top: 80px;
`;

const Card = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(104, 128, 250, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(104, 128, 250, 0.8);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  margin-top: 10px;
  color: #666;
`;

// Process Component
const Process = () => {
  return (
    <Gallery>
      {processData.map((item) => (
        <Card key={item.id}>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Card>
      ))}
    </Gallery>
  );
};

export default Process;
