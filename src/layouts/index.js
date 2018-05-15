import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import { MaxWidth } from '../components/layout'
import './index.css'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`
const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: stretch;
  margin-top: 3rem;
`

const Layout = ({ children, data, location, }) => (
  <Page>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} location={ location } />
    <Wrapper>
      { children() }
    </Wrapper>
  </Page>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
