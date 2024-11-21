// Process.jsx
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";
import "react-tabs/style/react-tabs.css";
import processData from "../../../data/processData";
import { theme } from "../../../styles/theme";

const ProcessContainer = styled.div`
  width: 100%;
  background-color: ${theme.colors.secondary};
`;

const CenteredTabList = styled(TabList)`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  padding-bottom: 0;

  list-style-type: none;

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Create a 5-column grid */
    gap: 10px;
    justify-content: center; /* Center grid within parent */
    align-items: center; /* Align grid within parent */
    justify-items: center; /* Center items horizontally in grid cells */
    align-items: center; /* Center items vertically in grid cells */
    padding-bottom: 5px;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-items: center;
  }
`;

const CustomTab = styled(Tab)`
  width: 150px;
  height: 85px;
  border: none;
  color: black;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 9998; /* Ensure CustomTab is rendered on top of everything but the Navbar */

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

  @media (max-width: 900px) {
    width: 90px;
    border-radius: 5px;
  }
`;

const IconContainer = styled.div`
  height: 45px;
  /* background-color: blue; */
`;

const Icon = styled.span`
  font-size: 1.5rem; /* Adjust the icon size */
  margin-bottom: 5px;

  /* @media (max-width: 600px) {
    display: none;
  } */
`;

const TabTitle = styled.span`
  white-space: pre-wrap;
  text-align: center;
  font-size: 15px;
  line-height: 1.2;
`;

const TabContent = styled.div`
  flex: 1; /* Ensure the tab content takes up the remaining space */
  overflow-y: auto; /* Enable scrolling if the content overflows */
  background-color: ${theme.colors.primary};
  padding-top: 10px;
  padding-bottom: 40px;
  position: relative; /* Ensure stacking context */
  z-index: 2; /* Place TabContent above CustomTab */
  /* box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1); */
`;

const TabsContainer = styled.div`
  position: relative;
`;

const Process = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <ProcessContainer>
      <Tabs selectedIndex={currentIndex} onSelect={handleTabSelect}>
        <TabsContainer>
          {/* <h3
            style={{
              margin: 0,
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            The Design Process
          </h3> */}
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
                  <IconContainer>
                    <Icon>{item.icon}</Icon>
                  </IconContainer>
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
        </TabsContainer>
      </Tabs>
    </ProcessContainer>
  );
};

export default Process;
