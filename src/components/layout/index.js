import styled from 'styled-components'
export { MaxWidth } from './MaxWidth'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  margin: 0 auto;
`
export const BigPara = styled.p`
  align-self: ${ props => props.alignSelf ? props.alignSelf : 'center' };
  max-width: 620px;
  margin-bottom: 3rem;

  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.6;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  letter-spacing: 0.01rem;
`

export const HeadlineCompanion = styled.p`
  max-width: 800px;

  text-align: center;
  color: rgba(132,135,141,0.8);
  font-size: 1.347rem;
  line-height: 2.074rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

export const SmallPara = BigPara.extend`
  margin: 0;

  font-size: 1rem;
  line-height: 1.5;
  color: #7b7b79;
  letter-spacing: 0;
`

export const HighlightedSection = styled.div`
  flex-grow: 1;
  padding: 4rem 0;

  background: #020202;
`

export const HighlightedSectionContent = styled.div`
  display: flex;
`

export const WhiteBigPara = BigPara.extend`
  color: #fefefe;
  margin-bottom: 0;
  margin-right: 3rem;

  line-height: 1.6;
  font-size: 1.23rem;
  font-weight: 300;
  color: #ddd;
  letter-spacing: .02rem;
`

export const StrongH = Strong.extend`
  padding-bottom: 3px;

  color: #fff;
  font-weight: 500;

  border-bottom: 3px solid #f7f156;
`

export const Steps = styled.ol`
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
export const Step = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1rem 1.5rem;
  padding-left: 4.5rem;
  height: 2.6rem;
  margin-bottom: 1.5rem;

  font-size: 1.1rem;
  font-weight: 500;
  color: #000;

  counter-increment: item;
  border-radius: 100px;
  background: #f8f155;

  &:before {
    content: counter(item);
    display: block;
    position: absolute;
    top: -.675rem;
    left: -.3rem;
    bottom: -.5rem;
    width: 4rem;
    height: 4rem;

    font-size: 1.6rem;
    font-weight: 700;
    line-height: 3rem;
    color: #000;
    text-align: center;

    border-radius: 100%;
    background: #fff;
    border: 0.5rem solid #000;
  }

  &:last-child {
    margin-bottom: 0;
  }
`
