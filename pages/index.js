import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { Option } from '../components/Option'

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

const StyledBottom = styled.div`
  text-align: center;
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

const Home = ({ options, solution }) => {
  const [selected, setSelected] = useState(null)
  const [error, setError] = useState(false)
  const [correct, setCorrect] = useState(false)

  const handleOptionClick = (option) => {
    setSelected(option)
  }

  const handleSubmit = () => {
    console.log(selected)
    selected === solution.id ? setCorrect(true) : setError(true)
  }

  const reset = () => {
    setSelected(null)
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
              {options.map((option) => {
                const { id, img, text } = option
                return (
                  <Option
                    key={id}
                    id={id}
                    img={img}
                    text={text}
                    checked={selected === id}
                    handleClick={handleOptionClick}
                  />
                )
              })}
            </StyledOptions>
          </StyledMiddle>
          <StyledBottom>
            <StyledButton disabled={selected === null} onClick={handleSubmit}>
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
            <h4>{solution.text}</h4>
            <StyledErrorButton onClick={reset}>uwu</StyledErrorButton>
          </StyledIncorrectResult>
        )}
      </StyledMain>
    </StyledWrapper>
  )
}

export const getStaticProps = async () => {
  const solution = {
    id: 'hewwo',
    img: 'hewwo.png',
    text: 'hewwo :3',
  }

  const incorrect = [
    {
      id: 'murr',
      img: 'murr.png',
      text: 'murr~',
    },
    {
      id: 'nyaa',
      img: 'nyaa.png',
      text: 'nyaa?',
    },
  ]

  const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  const options = shuffle([solution, ...incorrect])

  return {
    props: {
      options,
      solution,
    },
  }
}

export default Home
