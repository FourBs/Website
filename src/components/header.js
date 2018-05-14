import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import { MaxWidth } from './layout'

const links = [
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Join us',
    to: '/join-us'
  },
  {
    title: 'About',
    to: '/about'
  },
  {
    title: 'Partners',
    to: '/partners'
  },

]

const LogoContainer = styled.div`
  position: absolute;
`

const MainNavigation = styled.div`
  position: relative;
  z-index: 2000;
  display: flex;

  background: #fff;
  box-shadow: 1px 0 0 1px rgba(0, 0, 0, .04);
`
const Logo = styled.img`
  height: 2.2rem;
  margin: 0;
`
const MockLogo = styled.div`
  width: 2.6rem;
  height: 2.6rem;
  margin-right: 2rem;

  border: 4px solid #eee;
  border-radius: 100%;
`
const MainLinks = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: center; 
  margin: 0;
  padding: 0;
`
const MainLink = styled(Link).attrs({
  activeStyle: {
    boxShadow: 'inset 0 -12px 0 -6px rgba(246, 241, 87, 1)'
  }
})`
  display: inline-flex;
  align-items: center;
  height: 4.8rem;
  padding: 0 1.5rem;

  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-decoration: none;
  font-size: 18px;
  color: #2b2b2b;
  letter-spacing: .02rem;

  transition: all .1s ease-in;

  &:hover {
    background: rgba(246, 241, 87, .2);
  }
`

const Header = ({ siteTitle }) => (
  <MainNavigation>
    <MaxWidth>
      <LogoContainer>
        <Link to='/'>
          <Logo src='/static/logo.svg' />
        </Link>
      </LogoContainer>
      <MainLinks>
        { links.map(({ title, to }) => (
          <MainLink key={ title } to={ to }>{ title }</MainLink>
        )) }
      </MainLinks>
    </MaxWidth>
  </MainNavigation>
)

export default Header
