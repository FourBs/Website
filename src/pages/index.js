import React from 'react'
import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'

import treeIllustration from '../svg/tree-illustration.svg'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const TreeSection = Section.extend`
  justify-content: center;
  position: relative;
  height: 80vh;
`
const TreeImage = styled.img`
  position: absolute;
  height: 130vh;
  top: -10vh;
  margin: 0 auto;

  opacity: .9;
`
const PulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 8vh rgba(116, 194, 116, 0.4);
  }
  50% {
    box-shadow: 0 0 0 9vh rgba(116, 194, 116, 0.4);
  }
  100% {
    box-shadow: 0 0 0 8vh rgba(116, 194, 116, 0.4);
  }
`
const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1000;

  &::before {
    content: ' ';
    position: absolute;
    display: block;
    height: 65vh;
    width: 65vh;

    background: rgba(86, 152, 84, 0.98);
    box-shadow: 0 0 0 6vh rgba(116, 194, 116, 0.4);
    border-radius: 100%;

    animation: ${ PulseAnimation } 4s ease-in infinite;
  }
`
const Tagline = styled.h2`
  position: relative;
  flex-grow: 0;
  flex-shrink: 1;
  display: inline;
  margin-bottom: 3rem;

  font-size: 2.4rem;
  font-weight: 900;
  text-align: center;
  color: #fff;
`
const ButtonContainer = styled.div`
  display: flex;
  position: relative;
`
const BigLink = styled(Link)`
  padding: 1.6rem 3rem;
  margin-right: 3rem;

  color: #578a3d;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 1.1rem;

  background: #fff;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .14);
  transition: all .14s ease-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 14px rgba(0, 0, 0, .16);
  }
`

const IndexPage = () => (
  <div>
    <TreeSection key='tree'>
      <TreeImage src={ treeIllustration } />
      <ContentContainer>
        <Tagline>Let's grow together</Tagline>
        <ButtonContainer>
          <BigLink to={ '/' }>Learners →</BigLink>
          <BigLink to={ '/' }>Educators →</BigLink>
        </ButtonContainer>
      </ContentContainer>
    </TreeSection>
  </div>
)

export default IndexPage
