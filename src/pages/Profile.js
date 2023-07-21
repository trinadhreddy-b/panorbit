import React from "react";
import styled from "styled-components";
import { SideBar } from "../components/SideBar";
import { useContext } from "react";
import { UsersContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";

import { SideContext } from "../context/SideContext";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  margin-right: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  width: 100%;
  margin: 1rem 0;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
`;
const ProfileDetails = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 0.5rem;

  border-right: 1px solid lightgray;
  padding-left: 1rem;
  margin-left: 1rem;
`;

const ProfilePic = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
const Name = styled.h4`
  color: gray;
  margin-bottom: 0%.5rem;
`;
const ProfileAddress = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Map = styled.img``;

const TextContainer=styled.div`
flex:1;
display: flex;
justify-content: center;
align-items: center;

`

const ComingSoon=styled.h1`
    opacity: 0.5;
`;

const Profile = () => {
  const [activeCategory] = useContext(SideContext);

  const users = useContext(UsersContext);
  const { userId } = useParams();

  const userProfile = users.find((item) => item.id === parseInt(userId));

  return (
    <Container>
      <SideBar />
      <Content>
        <Header userProfile={userProfile} />
        <Hr />
        {activeCategory === "Profile" && (
          <MainContent>
            <ProfileDetails>
              <ProfilePic src={userProfile.profilepicture} alt="profile" />
              <Name>{userProfile.name}</Name>
              <Name>Username: {userProfile.username}</Name>
              <Name>e-mail:{userProfile.email}</Name>
              <Name>Phone: {userProfile.phone}</Name>
              <Name>Website: {userProfile.website}</Name>
              <Hr />
              <Name>Company</Name>
              <Name>Name: {userProfile.company.name}</Name>
              <Name>CatchPhrase: {userProfile.company.catchPhrase}</Name>
              <Name>bs: {userProfile.company.bs}</Name>
            </ProfileDetails>
            <ProfileAddress>
              <Address>
                <Name>Address:</Name>
                <Name>Street: {userProfile.address.street}</Name>
                <Name>Suite: {userProfile.address.suite}</Name>
                <Name>City: {userProfile.address.city}</Name>
                <Name>ZipCode: {userProfile.address.zipcode}</Name>
                <Name>latitude: {userProfile.address.geo.lat}</Name>
                <Name>longitude: {userProfile.address.geo.lng}</Name>
              </Address>
              <Map></Map>
            </ProfileAddress>
          </MainContent>
        )}

{(activeCategory === "Posts" || activeCategory==="Gallery" || activeCategory==="ToDo") && (
        <TextContainer>
          <ComingSoon>
            Coming Soon
          </ComingSoon>
          </TextContainer>
        )}
      </Content>
    </Container>
  );
};

export default Profile;
