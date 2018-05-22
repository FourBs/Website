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
  HighlightedSection,
  HighlightedSectionContent,
  Steps,
  Step,
  SmallPara,
  WhiteBigPara,
} from '../components'
import { BigLink } from './learners'

import UNICEFLogo from '../svg/UNICEF_Logo.png'
import OECDLogo from '../svg/OECD_logo_new.svg'

const Partners = styled.div`
  padding: 2rem 0 3rem;

  //background: #f4f4f4;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
`
const H3 = styled.h3`
  width: 100%;
  margin-bottom: 2rem;

  font-size: 1.3rem;
  font-weight: 300; 
  text-align: center;
  color: #757570;
`
const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Logo = styled.div`
  width: 200px;
  margin-right: 2rem;

  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-weight: 700;
  text-align: center;
  color: #52534e;

  &:last-child {
    margin-right: 0;
  }

  & img {
    margin-bottom: 0;
  }
`
const SectionWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const H2 = styled.h2`
  margin-bottom: 0;

  color: #fff;
`
const Column = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const SmallParaM = WhiteBigPara.extend`
  margin-right: 0;

  text-align: center;
  font-size: 1.23rem;
  font-weight: 600;
  color: #000;
  letter-spacing: .02rem;
`
const YellowSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 4rem;

  background: #f8f155;
`
const CenterSection = MaxWidth.extend`
  justify-content: center;
  flex-direction: column;
`
const WhiteSection = styled.div`
  background: #fff;
`
const StepM = Step.extend`
  &:before {
    content: '+';
  }
`
const SmallTitle = BigTitle.extend`
  margin-bottom: 0;

  font-size: 1.2rem;
  line-height: 1.5;
  max-width: 320px;
`
const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`
const Items = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  &:first-child {
    padding-right: 3rem;
  }
`

const PlainSteps = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 0 3rem;
  padding: 0;
  counter-reset: item;
  list-style: none;

  &:last-child {
    margin-bottom: 0;
  }
`
const PlainStep = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  padding-left: 2rem;
  margin-bottom: 1rem;

  font-size: 1.3rem;
  font-weight: 400;
  color: #000;

  counter-increment: item;

  &:before {
    content: '+';
    display: block;
    position: absolute;
    left: -.3rem;

    font-size: 2rem;
    font-weight: 700;
    color: #000;
    text-align: center;
  }

  &:last-child {
    margin-bottom: 0;
  }
`
const SmallParaMM = WhiteBigPara.extend`
  margin-bottom: 4rem;
  margin-right: 0;

  text-align: center;
  font-size: 1.23rem;
  font-weight: 300;
  color: #ddd;
  letter-spacing: .02rem;
`

const PartnersPage = () => (
  <div style={{ width: '100%' }}>
    <MaxWidth>
      <TitleContainer>
        <BigTitle>Through our platform you can <Strong>reach new customers and partners</Strong> in a given location. By boosting the local economy <Strong>you profit and increase your influence</Strong>.</BigTitle>
      </TitleContainer>
    </MaxWidth>
    <Partners>
      <MaxWidth flexDirection={ 'column' }>
        <H3>Partners</H3>
        <LogoRow>
          <Logo><img src={ UNICEFLogo } /></Logo>
          <Logo><img src={ OECDLogo } /></Logo>
          <Logo>Agency for Industry and Commerce</Logo>
          <Logo>Ministry of Education</Logo>
        </LogoRow>
      </MaxWidth>
    </Partners>
    <HighlightedSection>
      <MaxWidth>
        <SectionWrapper>
          <H2>Collaborator benefits</H2>
          <Steps>
            <StepM>Create a course content based on your expertise/needs.</StepM>
            <StepM>Improve your public image.</StepM>
            <StepM>Get connected with other companies in your area.</StepM>
            <StepM>Hire applicants suitable for your company.</StepM>
          </Steps>
        </SectionWrapper>
      </MaxWidth>
    </HighlightedSection>
    <YellowSection>
      <CenterSection>
        <SmallParaM>We can help you to boost the growth of your company by finding the better suitable co-workers. Your new workers will have the skills needed thanks to your company's participation in their education.</SmallParaM>
      </CenterSection>
    </YellowSection>
    <MaxWidth>
      <Container>
        <Items>
          <Item>
            <h3>Funds</h3>
            <PlainSteps>
              <PlainStep>Donations</PlainStep>
              <PlainStep>Adds</PlainStep>
              <PlainStep>Membership programs</PlainStep>
            </PlainSteps>
          </Item>
          <Item>
            <div style={{ textAlign: 'center', maxWidth: '500px', fontSize: '1.1rem' }}>In a longer scope we aim to introduce membership programs and accrue more donations to fund our operations.</div>
          </Item>
        </Items>
      </Container>
    </MaxWidth>
    <WhiteSection>
      <MaxWidth>
        <Container>
          <Items>
            <Item>
              <SmallTitle>Some <Strong>36% of children</Strong> don't continue after high-school in rural China</SmallTitle>
            </Item>
            <Item>
              <div style={{ textAlign: 'center', maxWidth: '500px', fontSize: '1.1rem' }}>After tackling the issues in China, we hope to expand to other markets. We believe that our model targets a problem which is global in nature.</div>
            </Item>
          </Items>
        </Container>
      </MaxWidth>
    </WhiteSection>
    <HighlightedSection>
      <MaxWidth>
        <CenterSection>
          <SmallParaMM>Contact us for more information</SmallParaMM>
          <BigLink>Let's grow together →</BigLink>
        </CenterSection>
      </MaxWidth>
    </HighlightedSection>
  </div>
)

export default PartnersPage
