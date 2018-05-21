import styled from 'styled-components'

export const MaxWidth = styled.div`
  display: flex;
  flex-direction: ${ props => props.flexDirection ? props.flexDirection : 'inherit' };
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`