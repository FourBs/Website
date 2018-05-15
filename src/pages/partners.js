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
  <div style={{ width: '100%' }}>
    <MaxWidth>
      <TitleContainer>
        <BigTitle><Strong>Together we will grow</Strong></BigTitle>
      </TitleContainer>
    </MaxWidth>
    <MaxWidth>
      <ContentContainer>
        <BigPara>We highly appreciate your commitment for your company and environment. We can help you to boost the growth of your company by finding the best suitable  co-workers. Your new co-workers will have exactly the skills needed thanks to your company´s participation in their education.</BigPara>
        <BigPara alignSelf='flex-end'>Through our platform you can reach new customers and partners in a given location. By boosting the local economy you profit and increase your influence.</BigPara>
      </ContentContainer>
    </MaxWidth>
  </div>
)

export default PartnersPage
