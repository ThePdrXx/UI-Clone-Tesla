  
import React from 'react'
import { useTransform } from 'framer-motion'

import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollyProgress } = useWrapperScroll()

  const opacity = useTransform(scrollyProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Com carinho 💜</a>
          </li>
          <li>
            <a href="#">By PDR</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay