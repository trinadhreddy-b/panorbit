import React from 'react';

import styled from "styled-components";
import { useContext } from 'react';
import { SideContext } from "../context/SideContext";

const SideBarContainer = styled.div`
flex-basis: 12rem;
border-radius: 1rem;
background: rgb(61, 87, 200);
background: linear-gradient(180deg, rgba(61, 87, 200, 1) 0%, rgba(91, 62, 200, 1) 71%);
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding-left: 1.5rem;
`;

const SideBarItems = styled.h4`
padding-bottom: 0.5rem;
padding-top: 0.5rem;
color: #f6f6fc;
opacity: ${(props) => (props.active ? '1' : '0.3')};
cursor: pointer;
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
width: 80%;
`;

export const SideBar = () => {

    const [activeCategory,setActiveCategory]=useContext(SideContext);



const handleCategoryClick = (category) => {
    setActiveCategory(category);
};
  return (
    <SideBarContainer>
                <SideBarItems active={activeCategory === 'Profile'} onClick={() => handleCategoryClick('Profile')}>
                    Profile
                </SideBarItems>
                <Hr />
                <SideBarItems active={activeCategory === 'Posts'} onClick={() => handleCategoryClick('Posts')}>
                    Posts
                </SideBarItems>
                <Hr />
                <SideBarItems active={activeCategory === 'Gallery'} onClick={() => handleCategoryClick('Gallery')}>
                    Gallery
                </SideBarItems>
                <Hr />
                <SideBarItems active={activeCategory === 'ToDo'} onClick={() => handleCategoryClick('ToDo')}>
                    ToDo
                </SideBarItems>
            </SideBarContainer>
  )
}
