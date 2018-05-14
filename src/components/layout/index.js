import styled from 'styled-components'
export { MaxWidth } from './MaxWidth'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  width: 100%;
`
export const BigTitle = styled.h2`
  max-width: 800px;

  text-align: center;
  color: rgba(132,135,141,0.8);
  font-size: 1.687rem;
  line-height: 2.374rem;
  font-weight: 400;
`
export const Strong = styled.strong`
  color: #000;
  font-weight: 600;
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`
export const BigPara = styled.p`
  align-self: ${ props => props.right ? 'flex-end' : 'flex-start' };
  max-width: 60%;
  margin-bottom: 3rem;

  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.6;
`