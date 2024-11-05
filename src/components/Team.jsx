import React from "react";
import styled from "styled-components";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  padding: 20px;

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
  margin-top: 10px;
  font-size: 0.9em;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const Team = () => {
  return (
    <TeamContainer>
      <Banner>The Gloo Crew!</Banner>
      <ProfileContainer>
        <ProfileCard>
          <Image src="./team/justin.jpeg" alt="Justin B." />
          <Name>Justin B.</Name>
        </ProfileCard>
        <ProfileCard>
          <Image src="./team/alison.jpeg" alt="Alison R." />
          <Name>Alison R.</Name>
        </ProfileCard>
        <ProfileCard>
          <Image src="./team/matthew.jpeg" alt="Matthew M." />
          <Name>Matthew M.</Name>
        </ProfileCard>
        <ProfileCard>
          <Image src="./team/monica.jpeg" alt="Monica H." />
          <Name>Monica H.</Name>
        </ProfileCard>
      </ProfileContainer>
    </TeamContainer>
  );
};

export default Team;
