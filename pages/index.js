import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

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
  grid-template-rows: min-content 1fr min-content;
  height: 100%;
  min-height: 460px;
  max-height: 820px;
  overflow: hidden;
  padding: 24px 16px;
  width: 100%;

  @media (max-height: 50rem) {
    grid-gap: 1rem;
    padding: 1rem;
  }
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
    font-size: 1.3rem;
    margin: 0.5rem 0 1.5rem 0;
  }

  @media (max-height: 50rem) {
    h1 {
      font-size: 1.2rem;
      margin: 0 0 1rem 0;
    }
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
  overflow: hidden;

  max-height: 32rem;

  align-content: stretch;
`

const StyledOption = styled.label`
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

const StyledPortWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-height: 9rem;
  margin-bottom: 1rem;
`

// #e5e5e5
const StyledPort = styled.div`
  background: url('/ports/${({ src }) => src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100%;
  
`

const StyledBottom = styled.div`
  text-align: center;
`

const StyledLabel = styled.div`
  font-size: 1rem;
  color: #4b4b4b;
`

const appear = keyframes`
  0% {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`

const StyledResult = styled.div`
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 24px 16px 72px;
  position: absolute;
  right: 0;

  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-name: ${appear};
  animation-timing-function: cubic-bezier(0.35, 1.8, 0.35, 0.83);

  h3 {
    font-size: 1.3rem;
    line-height: 26px;
    margin-bottom: 0.5rem;
  }

  h4 {
    font-size: 1rem;
    font-weight: 100;
  }

  button {
    margin-top: 1rem;
  }
`

const StyledErrorButton = styled(StyledButton)`
  background-color: #ea2b2b;

  &:after {
    background-color: #ff4b4b;
  }
`

const StyledIncorrectResult = styled(StyledResult)`
  background-color: #ffc1c1;
  color: #ea2b2b;
`

const StyledCorrectResult = styled(StyledResult)`
  background-color: #b8f28b;
  color: #58a700;
`

const Home = () => {
  const [answer, setAnswer] = useState(null)
  const [error, setError] = useState(false)
  const [correct, setCorrect] = useState(false)

  const handleOptionClick = (option) => {
    console.log(option)
    setAnswer(option)
  }

  const handleSubmit = () => {
    answer === 'hewwo' ? setCorrect(true) : setError(true)
  }

  const reset = () => {
    setAnswer(null)
    setError(false)
    setCorrect(false)
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
              <h2>Hello.</h2>
            </StyledPrompt>
            <StyledOptions>
              <StyledOption onClick={() => handleOptionClick('murr')}>
                <StyledPortWrapper>
                  <StyledPort src={'murr.png'} />
                </StyledPortWrapper>
                <StyledLabel>murr~</StyledLabel>
              </StyledOption>
              <StyledOption onClick={() => handleOptionClick('nyaa')}>
                <StyledPortWrapper>
                  <StyledPort src={'nyaa.png'} />
                </StyledPortWrapper>
                <StyledLabel>nyaa?</StyledLabel>
              </StyledOption>
              <StyledOption onClick={() => handleOptionClick('hewwo')}>
                <StyledPortWrapper>
                  <StyledPort src={'hewwo.png'} />
                </StyledPortWrapper>
                <StyledLabel>hewwo :3</StyledLabel>
              </StyledOption>
            </StyledOptions>
          </StyledMiddle>
          <StyledBottom>
            <StyledButton disabled={answer === null} onClick={handleSubmit}>
              *boop*
            </StyledButton>
          </StyledBottom>
        </StyledGrid>
        {correct && (
          <StyledCorrectResult>
            <h3>You are correct</h3>
            <StyledButton onClick={reset}>OwO</StyledButton>
          </StyledCorrectResult>
        )}
        {error && (
          <StyledIncorrectResult>
            <h3>Correct solution:</h3>
            <h4>hewwo :3</h4>
            <StyledErrorButton onClick={reset}>uwu</StyledErrorButton>
          </StyledIncorrectResult>
        )}
      </StyledMain>
    </StyledWrapper>
  )
}

export default Home
