import React from 'react'
import styled from 'styled-components'

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

  &:focus-within:after,
  &:focus:after {
    background-color: #ddf4ff;
    border-color: #1cb0f6;
  }

  &:active,
  &:focus,
  &:focus-within {
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

const StyledInput = styled.input`
  height: 0;
`

// #e5e5e5
const StyledPort = styled.div`
  background: url('/ports/${({ src }) => src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100%;
  
`

const StyledLabel = styled.div`
  font-size: 1rem;
  color: #4b4b4b;
`

export const Option = ({ id, img, text, handleClick, checked }) => {
  return (
    <StyledOption onClick={() => handleClick(id)}>
      <StyledInput type="radio" checked={checked} />
      <StyledPortWrapper>
        <StyledPort src={img} />
      </StyledPortWrapper>
      <StyledLabel>{text}</StyledLabel>
    </StyledOption>
  )
}
