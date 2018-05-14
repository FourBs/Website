import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import {
  MaxWidth,
  TitleContainer,
  BigTitle,
  Strong,
  ContentContainer,
  BigPara,
  HeadlineCompanion,
  SmallPara,
  HighlightedSection,
  HighlightedSectionContent,
  WhiteBigPara,
} from '../components'

const UnderlinedStrong = Strong.extend`
  padding-bottom: 2px;  

  border-bottom: 3px solid rgb(246, 241, 87);
`
const Box = styled.div`
  width: 100%;

  background: #f7f156;
  border-radius: 10px;
`

const BigLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem 3rem;
  margin-right: 3rem;
  width: 70%;

  color: #020202;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 1.1rem;

  background: #f7f156;
  border-radius: 6px;
  box-shadow: 2px 4px 8px rgba(247, 241, 86, .2);
  transition: all .14s ease-out;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 6px 8px 14px rgba(247, 241, 86, .22);
  }
`
const JoinUsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
`
const SmallParaM = WhiteBigPara.extend`
  margin-bottom: 3rem;

  text-align: center;
  font-size: 1.23rem;
  font-weight: 300;
  color: #ddd;
`
const StrongM = Strong.extend`
  color: #fff;
`

const JoinUsPage = () => (
  <div>
    <MaxWidth>
      <TitleContainer>
        <BigTitle><Strong>Our four Bs</Strong></BigTitle>
        <HeadlineCompanion>We give a chance to all children in rural areas to be <UnderlinedStrong>brave</UnderlinedStrong> enough to make a big step and to learn about the amazing powers of their <UnderlinedStrong>brain</UnderlinedStrong>. They will show us all how <UnderlinedStrong>brilliant</UnderlinedStrong> they are in what they are doing. Let them pursuit a better life, let them <UnderlinedStrong>be</UnderlinedStrong>!</HeadlineCompanion>
      </TitleContainer>
    </MaxWidth>
    <HighlightedSection>
      <MaxWidth>
        <JoinUsContainer>
          <SmallParaM>Join our platform to find the most interesting <StrongM>study and career options</StrongM> in your area. Get the <StrongM>support</StrongM> of your friends and join our community of <StrongM>students and experts</StrongM> in areas of your interest.</SmallParaM>
          <BigLink to='/'>Let your dreams grow with us →</BigLink>
        </JoinUsContainer>
      </MaxWidth>
    </HighlightedSection>
  </div>
)

export default JoinUsPage
