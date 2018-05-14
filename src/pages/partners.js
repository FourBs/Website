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

const PartnersPage = () => (
  <div>
    <MaxWidth>
      <TitleContainer>
        <BigTitle><Strong>Together we will grow</Strong></BigTitle>
      </TitleContainer>
    </MaxWidth>
    <MaxWidth>
      <ContentContainer>
        <BigPara>We highly appreciate your commitment for your company and environment. We can help you to boost the growth of your company by finding the best suitable  co-workers. Your new co-workers will have exactly the skills needed thanks to your company´s participation in their education.</BigPara>
        <BigPara right>20 Millions of the children in the rural areas are left behind by their parents who try to earn the livelihood in the big cities with better job opportunities. We want to give those children who frequently drop out of school a possibility to find their passion, educate themselves and find new job opportunities.</BigPara>
        <BigPara>We introduce the educated and competent work force to the big employers in the region. Boosting the local economy and purchasing power is a key to the equality and sustainability in the rural area.</BigPara>
      </ContentContainer>
    </MaxWidth>
  </div>
)

export default PartnersPage
