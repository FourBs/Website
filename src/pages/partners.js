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

const PartnersPage = () => (
  <div style={{ width: '100%' }}>
    <MaxWidth>
      <TitleContainer>
        <BigTitle><Strong>Together</Strong> we will grow</BigTitle>
      </TitleContainer>
    </MaxWidth>
    <MaxWidth>
      <ContentContainer>
        <BigPara>We highly appreciate your commitment for your company and environment. We can help you to boost the growth of your company by finding the best suitable  co-workers. Your new co-workers will have exactly the skills needed thanks to your company´s participation in their education.</BigPara>
        <BigPara alignSelf='flex-end'>Through our platform you can reach new customers and partners in a given location. By boosting the local economy you profit and increase your influence.</BigPara>
      </ContentContainer>
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
  </div>
)

export default PartnersPage
