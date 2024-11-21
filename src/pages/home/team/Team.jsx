import React from "react";
import styled from "styled-components";
import justin from "../../../assets/team/justin.jpeg";
import matthew from "../../../assets/team/matthew.jpeg";
import alison from "../../../assets/team/alison.jpeg";
import monica from "../../../assets/team/monica.jpeg";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 20px;
  /* background-color: blue; */

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Banner = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px; /* Adjust the gap between the profile cards */
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProfileCard = styled.div`
  text-align: center;
  max-width: 400px; /* Set a moderate maximum width for the profile cards */
  margin: 0 auto; /* Center the profile cards within their grid cells */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
`;

const Name = styled.div`
  margin-bottom: 0;
  margin-top: 10px;
  font-size: 0.9em;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Role = styled.div`
  margin-top: 0;
  font-size: 0.7em;
  color: gray;

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const Team = () => {
  return (
    <TeamContainer>
      <Banner>The Gloo Crew!</Banner>
      <ProfileContainer>
        <ProfileCard>
          <Image src={justin} alt="Justin B." />
          <Name>Justin B.</Name>
          <Role>Web/App</Role>
        </ProfileCard>
        <ProfileCard>
          <Image src={alison} alt="Alison R." />
          <Name>Alison R.</Name>
          <Role>App</Role>
        </ProfileCard>
        <ProfileCard>
          <Image src={matthew} alt="Matthew M." />
          <Name>Matthew M.</Name>
          <Role>App/Design</Role>
        </ProfileCard>
        <ProfileCard>
          <Image src={monica} alt="Monica H." />
          <Name>Monica H.</Name>
          <Role>Design</Role>
        </ProfileCard>
      </ProfileContainer>
    </TeamContainer>
  );
};

export default Team;
