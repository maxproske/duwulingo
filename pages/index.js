import React, { useState } from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  background: white;
  min-height: 100vh;
`

const StyledHeader = styled.header`
  padding: 1rem 2rem;
  font-size: 1rem;
`

const StyledGreen = styled.span`
  color: #78c800;
`

const StyledMain = styled.main`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`

const StyledButton = styled.button`
  background-color: #58a700;
  color: white;
  outline: none;

  cursor: pointer;
  padding: 12px 24px;
  text-align: center;
  width: 100%;

  border-radius: 18px 18px 16px 16px;
  border-color: transparent;
  border-width: 0 0 4px;
  border-bottom-style: solid;

  line-height: 20px;
  min-width: 272px;

  transform: matrix(1, 0, 0, 1, 0, 0);

  &:after {
    content: '';

    position: absolute;
    top: 0;
    bottom: -4px;
    left: 0;
    right: 0;

    box-sizing: border-box;
    height: 48px;
    z-index: -1;

    background-clip: padding-box;
    background-color: #78c800;

    border-radius: 18px 18px 16px 16px;
    border-color: transparent;
    border-width: 0 0 4px;
    border-bottom-style: solid;
  }

  &:disabled {
    color: #afafaf;
  }

  &:disabled:after {
    background-color: #e5e5e5;
    border-width: 4px 0 0;
  }
`

const StyledGrid = styled.div`
  max-width: 375px;
  margin: 0 auto;

  display: grid;
  grid-gap: 24px;
  grid-template-columns: 100%;
  grid-template-rows: min-content minmax(min-content, 650px) min-content;
  height: 100%;
  min-height: 460px;
  overflow: hidden;
  padding: 24px 16px;
  width: 100%;
`

const StyledTop = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: -webkit-min-content 1fr;
  grid-template-columns: min-content 1fr;
`

const StyledDismiss = styled.div`
  color: #e5e5e5;
  font-size: 3rem;
  line-height: 20px;
`

const StyledProgress = styled.div`
  background: #e5e5e5;
  border-radius: 8px;
  height: 16px;
`

const StyledMiddle = styled.div`
  grid-template-rows: -webkit-min-content minmax(0, 1fr);
  grid-template-rows: min-content minmax(0, 1fr);
  overflow-x: hidden;
  overflow-y: auto;

  display: grid;
  grid-gap: 16px;

  color: #3c3c3c;

  h1 {
    font-size: 1.35rem;
    margin: 0.5rem 0 1.5rem 0;
  }

  h2 {
    font-size: 1.1rem;
  }
`

const StyledPrompt = styled.div``

const StyledOptions = styled.div`
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  grid-gap: 16px;

  align-content: center;
`

const StyledOption = styled.button`
  display: flex;
  flex-direction: column;
  font-size: 19px;
  padding: 12px;
  position: relative;
  background: none;
  align-items: center;

  border-width: 2px 2px 4px;
  border-radius: 16px;
  border-style: solid;
  transform: translateZ(0);
  border-color: transparent;
  text-align: center;

  &:hover {
    cursor: pointer;
    top: 2px;
  }

  &:hover:after {
    background-color: #f7f7f7;
  }

  &:focus:after {
    background-color: #ddf4ff;
    border-color: #1cb0f6;
  }

  &:focus {
    outline: none;
    top: 2px;
  }

  &:after {
    background-color: #fff;
    border-color: #e5e5e5;
    bottom: -4px;
    content: '';
    left: -2px;
    right: -2px;
    top: -2px;
    border-width: 2px 2px 4px;
    border-radius: 16px;
    background-clip: padding-box;
    border-style: solid;
    position: absolute;
    z-index: -1;
  }

  &:nth-child(3) {
    grid-column: 1 / span 2;
    margin: 0 auto;
    width: calc(50% - 4px);
  }
`

const StyledPort = styled.div`
  height: 130px;
  width: 130px;
  background: url('/ports/${({ src }) => src}') #e5e5e5;
  background-size: cover;
  background-position: bottom;
  margin: 2rem 0;
`

const StyledBottom = styled.div`
  text-align: center;
`

const StyledLabel = styled.div`
  font-size: 1rem;
  color: #4b4b4b;
`

const Home = () => {
  const [answer, setAnswer] = useState(null)

  const handleOptionClick = (option) => {
    console.log(option)
    setAnswer(option)
  }

  return (
    <StyledWrapper>
      <StyledMain>
        <StyledGrid>
          <StyledTop>
            <StyledDismiss>&times;</StyledDismiss>
            <StyledProgress></StyledProgress>
          </StyledTop>
          <StyledMiddle>
            <StyledPrompt>
              <h1>Select the correct translation</h1>
              <h2>Hello!</h2>
            </StyledPrompt>
            <StyledOptions>
              <StyledOption onClick={() => handleOptionClick('pounces')}>
                <StyledPort src={'pounces.png'} />
                <StyledLabel>*pounces* :3</StyledLabel>
              </StyledOption>
              <StyledOption onClick={() => handleOptionClick('nyaa')}>
                <StyledPort src={'nyaa.png'} />
                <StyledLabel>nyaa?</StyledLabel>
              </StyledOption>
              <StyledOption onClick={() => handleOptionClick('hewwo')}>
                <StyledPort src={'hewwo.png'} />
                <StyledLabel>hewwo!</StyledLabel>
              </StyledOption>
            </StyledOptions>
          </StyledMiddle>
          <StyledBottom>
            <StyledButton disabled={answer === null}>*boop*</StyledButton>
          </StyledBottom>
        </StyledGrid>
      </StyledMain>
    </StyledWrapper>
  )
}

export default Home
