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

import UNICEFLogo from '../svg/UNICEF_Logo.png'
import OECDLogo from '../svg/OECD_logo_new.svg'

const Partners = styled.div`
  padding: 2rem 0 3rem;
  margin-bottom: 2rem;

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
`
const WhiteSection = styled.div`
  background: #fff;
`
const StepM = Step.extend`
  &:before {
    content: '+';
  }
`

const PartnersPage = () => (
  <div style={{ width: '100%' }}>
    <MaxWidth>
      <TitleContainer>
        <BigTitle>Through our platform you can <Strong>reach new customers and partners</Strong> in a given location. By boosting the local economy <Strong>you profit and increase your influence</Strong>.</BigTitle>
      </TitleContainer>
    </MaxWidth>
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
    <WhiteSection>
      <MaxWidth>
        <div><BigTitle>Some <Strong>36% of children</Strong> don't continue after high-school in rural China</BigTitle></div>
        <div></div>
      </MaxWidth>
    </WhiteSection>
    <MaxWidth>
      <TitleContainer>
        <BigTitle><Strong>Together</Strong> we will grow</BigTitle>
      </TitleContainer>
    </MaxWidth>
  </div>
)

export default PartnersPage
