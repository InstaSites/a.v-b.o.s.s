import React from 'react'
import styled from 'styled-components'

const Content = styled.footer`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 0.85rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: ${(props) => props.theme.colors.bg};
`

const Footer = () => (
  <Content>
    <a href="https://www.instagram.com/a.v_b.o.s.s/" rel="noreferrer">
      Instagram
    </a>
    , design and pictures by a.v b.o.s.s &copy; {new Date().getFullYear()}
  </Content>
)

export default Footer
