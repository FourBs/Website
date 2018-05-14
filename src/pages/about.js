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

const AboutUsPage = () => (
  <div>
    <MaxWidth>
      <TitleContainer>
        <BigTitle><Strong>Our mission</Strong> is to promote education and equality by improving study and work competencies in rural areas</BigTitle>
      </TitleContainer>
    </MaxWidth>
    <MaxWidth>
      <ContentContainer>
        <BigPara>Our personalized platform connects the curious and enthusiastic learners with the front runners in the local and national industry and education.</BigPara>
        <BigPara right>20 Millions of the children in the rural areas are left behind by their parents who try to earn the livelihood in the big cities with better job opportunities. We want to give those children who frequently drop out of school a possibility to find their passion, educate themselves and find new job opportunities.</BigPara>
        <BigPara>We introduce the educated and competent work force to the big employers in the region. Boosting the local economy and purchasing power is a key to the equality and sustainability in the rural area.</BigPara>
      </ContentContainer>
    </MaxWidth>
  </div>
)

export default AboutUsPage
