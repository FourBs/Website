import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

import AppScreen1 from '../images/app_screen_1.png'
import AppScreen2 from '../images/app_screen_2.png'

import {
  MaxWidth,
  TitleContainer,
  BigTitle,
  Strong,
  ContentContainer,
  BigPara,
  SmallPara,
  HighlightedSection,
  HighlightedSectionContent,
} from '../components'

const WhiteBigPara = BigPara.extend`
  color: #fefefe;
  margin-bottom: 0;
  margin-right: 3rem;

  font-weight: 400;
  line-height: 1.4;
`
const ScreensContainer = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: row;
`
const ScreenMock = styled.img`
  width: 10rem;
  height: 16rem;
  margin-right: 3rem;

  background: #eee;
  border-radius: 10px;
  box-shadow: 2px 2px 20px rgba(255, 255, 255, .2);

  &:last-child {
    margin-right: 0;
  }
`
const WhiteHighlightedSection = styled.div`
  background: #fff;
`
const WhiteHighlightedSectionContent = styled.div`
  display: flex;
`
const SectionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 3rem;

  border-right: 1px solid #ececeb;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border-right: none;
  }
`
const SmallTitle = styled.h3`
  margin-bottom: .5rem;

  font-weight: 500;
  font-size: 1.3rem;
`

const AboutUsPage = () => (
  <div>
    <MaxWidth>
      <TitleContainer>
        <BigTitle><Strong>Our mission</Strong> is to promote education and equality by improving study and work competencies in rural areas</BigTitle>
      </TitleContainer>
    </MaxWidth>
    <HighlightedSection>
      <MaxWidth>
        <HighlightedSectionContent>
          <WhiteBigPara>Our personalized platform connects the curious and enthusiastic learners with the front runners in the local and national industry and education.</WhiteBigPara>
          <ScreensContainer>
            <ScreenMock src={ AppScreen1 } />
            <ScreenMock src={ AppScreen2 } />
          </ScreensContainer>
        </HighlightedSectionContent>
      </MaxWidth>
    </HighlightedSection>
    <WhiteHighlightedSection>
      <MaxWidth>
        <WhiteHighlightedSectionContent>
          <SectionSection>
            <SmallTitle>20 million children</SmallTitle>
            <SmallPara>in the rural areas of China are left behind by their parents who try to earn the livelihood in the big cities with better job opportunities. We want to give those children who frequently drop out of school a possibility to find their passion, educate themselves and find new job opportunities.</SmallPara>
          </SectionSection>
          <SectionSection>
            <SmallTitle>Targeted education</SmallTitle>
            <SmallPara>We introduce the educated and competent work force to the big employers in the region. Boosting the local economy and purchasing power is a key to the equality and sustainability in the rural area.</SmallPara>
          </SectionSection>
        </WhiteHighlightedSectionContent>
      </MaxWidth>
    </WhiteHighlightedSection>
  </div>
)

export default AboutUsPage
