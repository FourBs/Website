import React from 'react'
import styled, { keyframes } from 'styled-components'
import Link from 'gatsby-link'

import {
  BigTitle,
} from '../components'
import treeIllustration from '../svg/tree-illustration.svg'
import honeycombPattern from '../images/honeycomb-pattern.png'

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`
const TreeSection = Section.extend`
  flex-grow: 1;
  justify-content: center;
  position: relative;
  margin-top: -3rem;
  height: calc(100% + 3rem);

  background-color: #020202;
  /* background: url(${ honeycombPattern }) repeat;
  background-size: 40px 40px;
  background-opacity: .2; */
`
const TreeImage = styled.img`
  position: absolute;
  height: 130vh;
  top: -10vh;
  margin: 0 auto;

  opacity: .0;
`
const PulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 2vh rgba(247, 241, 86, .84);
  }
  50% {
    box-shadow: 0 0 0 2.2vh rgba(247, 241, 86, .84);
  }
  100% {
    box-shadow: 0 0 0 2vh rgba(247, 241, 86, .84);
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
    height: 72vh;
    width: 72vh;

    background: rgba(10, 10, 10, .9);
    box-shadow: 0 0 0 2vh rgba(247, 241, 86, .84);
    border-radius: 100%;

    animation: ${ PulseAnimation } 4s ease-in infinite;
  }
`
const Tagline = styled.h2`
  position: relative;
  flex-grow: 0;
  flex-shrink: 1;
  display: inline;
  margin-bottom: 1rem;

  font-size: 2.4rem;
  font-weight: 900;
  text-align: center;
  color: #fff;
`
const TagCompanion = styled.p`
  position: relative;
  max-width: 50vh;
  margin-top: 0;

  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: #fafafa;
  font-size: 1.2rem;
  font-weight: 300;
`
const ButtonContainer = styled.div`
  display: flex;
  position: relative;
`
const BigLink = styled(Link)`
  padding: 1.6rem 3rem;
  margin-right: 3rem;

  color: #020202;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 1.1rem;

  background: rgb(246, 241, 87);
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
  transition: all .14s ease-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 14px rgba(0, 0, 0, .26);
  }
`
const BigTitleM = BigTitle.extend`
  position: relative;
  max-width: 50vh;
  margin-top: 0;

  text-align: center;
  color: #bbb;
  line-height: 1.3;
`

const IndexPage = () => (
  <div style={{ width: '100%' }}>
    <TreeSection key='tree'>
      <ContentContainer>
        <Tagline>Let's grow together</Tagline>
        <BigTitleM>Our platform connects learners with industry and education.</BigTitleM>
        <ButtonContainer>
          <BigLink to={ '/learners' }>Learners →</BigLink>
          <BigLink to={ '/collaborators' }>Collaborators →</BigLink>
        </ButtonContainer>
      </ContentContainer>
    </TreeSection>
  </div>
)

export default IndexPage
