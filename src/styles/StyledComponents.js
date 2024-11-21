import styled from "styled-components";
import { theme } from "./theme";

export const SplitView = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LinkButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  flex: 2;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 25px;
  background-color: ${theme.colors.button.normal};
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 18px;
  height: 50px;
  gap: 10px;
  white-space: nowrap;
  &:hover {
    background-color: ${theme.colors.button.hover};
  }

  /* @media (max-width: 1100px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
  } */
`;

export const ButtonLogo = styled.img`
  height: 50%;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  flex-shrink: 1;
  word-wrap: break-word;
`;

export const ParentDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: blue; */
  flex: 1;
  padding-bottom: 10px;
`;

export const ChildDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
