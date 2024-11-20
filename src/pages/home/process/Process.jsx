// Process.jsx
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import "react-tabs/style/react-tabs.css";
import processData from "/src/data/processData";
import { theme } from "../../../styles/theme";

const ProcessContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.secondary};
  padding: 10px;
`;

const CenteredTabList = styled(TabList)`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  list-style-type: none;

  /* @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: center;
    align-items: center;
  } */
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Create a 5-column grid */
    gap: 10px;
    justify-content: center; /* Center the grid */
    align-items: center;
  }
`;

const CustomTab = styled(Tab)`
  /* padding: 8px 16px; */
  width: 90px;
  height: 90px;
  border: none;
  color: black;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:focus {
    outline: none;
  }

  &.react-tabs__tab--selected {
    background-color: ${theme.colors.primary};
    color: black;
  }

  ${({ disabled }) =>
    disabled &&
    `
    cursor: not-allowed;
    opacity: 0.2;
  `}
`;

const Icon = styled.span`
  font-size: 1.5rem; /* Adjust the icon size */
  margin-bottom: 5px;

  /* @media (max-width: 600px) {
    display: none; /* Hide the icon on smaller screens */
  } */
`;

const TabTitle = styled.span`
  white-space: pre-wrap;
  text-align: center;
  font-size: 12px;

  /* @media (max-width: 600px) {
    display: none;
  } */
`;

const TabShortTitle = styled.span`
  display: none;

  @media (max-width: 600px) {
    display: block; /* Show the short title on smaller screens */
    font-size: 1.5rem; /* Make the short title bigger */
    font-weight: bold; /* Make the short title bold */
  }
`;

const TabContent = styled.div`
  flex: 1; /* Ensure the tab content takes up the remaining space */
  overflow-y: auto; /* Enable scrolling if the content overflows */
`;

const Process = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <ProcessContainer>
      <Tabs selectedIndex={currentIndex} onSelect={handleTabSelect}>
        <CenteredTabList>
          {Object.values(processData).map((item) => (
            <CustomTab key={item.id} disabled={item.disabled}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Icon>{item.icon}</Icon>
                <TabTitle>{item.title}</TabTitle>
              </div>
            </CustomTab>
          ))}
        </CenteredTabList>

        {Object.values(processData).map((item) => (
          <TabPanel key={item.id}>
            <TabContent>{<item.component />}</TabContent>
          </TabPanel>
        ))}
      </Tabs>
    </ProcessContainer>
  );
};

export default Process;
