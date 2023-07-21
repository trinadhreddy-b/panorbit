import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useContext} from "react";
import { UsersContext } from "../context/UserContext";

const Container = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Center = styled.div`
    width: 30rem;
    height: 30rem;
    border-radius: 1.5rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border: 1px solid #f6f6f6;
`;

const Title = styled.div`
    height: 20%;
    background-color: #f6f6f6;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
`;

const UserListContainer = styled.div`
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #999;
    }
    margin-bottom: 0.5rem;
`;

const UserList = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin: 1rem;
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const ProfilePicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 1rem;
`;

const Name = styled.span`
    color: #5b5b5b;
`;

const Line = styled.div`
    flex: 1;
    height: 1px;
    background-color: #ccc;
    margin-left: 1rem;
`;

const H3 = styled.h3`
    color: #5b5b5b;
`;

const Home = () => {

    const users= useContext(UsersContext);
    

    return (
        <Container>
            <Center>
                <Title>
                    <H3>Select an account</H3>
                </Title>
                <UserListContainer>
                    <UserList>
                        {users.map(item => (
                            <React.Fragment key={item.id}>
                                <CustomLink to={`/profile/${item.id}`}>
                                    <ListItem>
                                        <ProfilePicture src={item.profilepicture} alt="Profile" />
                                        <Name>{item.name}</Name>
                                    </ListItem>
                                </CustomLink>
                                <Line />
                            </React.Fragment>
                        ))}
                    </UserList>
                </UserListContainer>
            </Center>
        </Container>
    );
}

export default Home;
