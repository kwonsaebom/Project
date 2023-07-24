import React from 'react'

import { Container } from '../Components/Styles/Container/Container.style'
import { Header, MainHeader } from "../Components/Styles/Header/Header.style";

const Home = () => {
  return (
    <Container>
        <Header>
            <MainHeader>
                <h1> Hello this is my First project </h1>
            </MainHeader>
        </Header>
    </Container>
  )
}

export default Home