import React from 'react';
import styled from "styled-components";


const HeaderContainer = styled.div`
    flex-basis: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;
const H4=styled.h4``;
const Avatar=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ProfilePic=styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 0.5rem;
`;
const Name=styled.h4``;
export const Header = ({userProfile}) => {
  return (
    <HeaderContainer>
    <H4>Profile</H4>                
<Avatar>
    <ProfilePic src={userProfile.profilepicture} alt="profile"/>
    <Name>{userProfile.name}</Name>
</Avatar>
</HeaderContainer>
  )
}
