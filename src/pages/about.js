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
  WhiteBigPara,
  StrongH,
} from '../components'

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
const People = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;

  border-top: 1px solid #ececeb;
  border-bottom: 1px solid #ececeb;
`
const Wide = styled.div`
  flex-grow: 1;
  display: flex;
`
const Person = styled.div`
  width: 25%;
  padding: 3rem;

  border-right: 1px solid #ececeb;

  &:last-child {
    padding-right: 0;

    border-right: none;
  }

  &:first-child {
    padding-left: 0;
  }
`
const Name = styled.h4`
  margin-bottom: .2rem;
`
const Study = styled.div`
  font-size: 15px;
  line-height: 1.4;
  color: #444;
`
const Country = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #797979;
`

const AboutUsPage = () => (
  <div style={{ width: '100%' }}>
    <MaxWidth>
      <TitleContainer>
        <BigTitle><Strong>Our mission</Strong> is to promote education and equality by improving study and work competencies in rural areas</BigTitle>
      </TitleContainer>
    </MaxWidth>
    <HighlightedSection>
      <MaxWidth>
        <HighlightedSectionContent>
          <WhiteBigPara>Our personalized platform <StrongH>connects</StrongH> the curious and enthusiastic <StrongH>learners</StrongH> with the front runners in the local and <StrongH>national industry and education</StrongH>.</WhiteBigPara>
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
    <h2 style={{ textAlign: 'center', margin: '5rem 0 2rem' }}>The team</h2>
    <People>
      <MaxWidth>
        <Wide>
          <Person>
            <Name>Changyu</Name>
            <Country>China</Country>
            <Study>Sociology, Bachelor</Study>
          </Person>
          <Person>
            <Name>Jaakko</Name>
            <Country>Finland</Country>
            <Study>Engineering, IT/Software, Bachelor</Study>
          </Person>
          <Person>
            <Name>Markéta</Name>
            <Country>Czech Republic</Country>
            <Study>Engineering, Chemistry, Postgrad</Study>
          </Person>
          <Person>
            <Name>Xu</Name>
            <Country>China</Country>
            <Study>Engineering, IT/Embedded systems, Bachelor</Study>
          </Person>
        </Wide>
      </MaxWidth>
    </People>
    <MaxWidth>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', padding: '5rem 0' }}>
        <h2 style={{ textAlign: 'center' }}>Our story</h2>

        <BigPara alignSelf='center'>Our team of highly skilled experts has intensively studied the possibilities to boost the decent work and business growth possibilities and to improve the education. After brainstorming the ideas and deeply analyzing the situation in many different countries, we came up with a unique yet flexible solution. Education is the key to the prosperity and sustainability. Our platform facilitates the cooperation between the industry, government and the young people.</BigPara>

        <BigPara alignSelf='center'>Our platform is flexible and can be adapted to markets in other countries since it solves a frequent problem of employment of young people lacking good education and work competencies. This in turn hinders the expansion of many local companies. The consequences are massive migration from the rural areas into the cities, loss of profit and competitiveness and a need of large governmental investment in those areas.</BigPara>

        <BigPara alignSelf='center'>We see a great potential in helping to improve the competencies of young and bright minds on their way to the sustainable life. Those, who do not continue with their education, have very limited job opportunities. In our example of China, this means about 36% of the children in the rural areas. We believe that people need a possibility to explore and build up their job competencies and skills to be able to succeed on the job market.</BigPara>

        <BigPara alignSelf='center'>On the other hand, there is the local industry who is eagerly looking to expand. However, the local market lacks skilled workers, who are simply not available due to missing competencies or because the skilled ones leave to big cities to search for a better job. We want to help the local companies to grow and increase their profit.</BigPara>

        <BigPara alignSelf='center'>Our platform solves both of the problems. We will work together with our industry partners on the course offers and content just suitable to their needs. The industry gains new skilled workers, publicity and possibility to grow. Our young students will gain job competencies and education needed for decent work.</BigPara>
      </div>
    </MaxWidth>
  </div>
)

export default AboutUsPage
