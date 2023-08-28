import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
`

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Loader = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid;
  border-color: var(--color-hint);
  border-right-color: var(--color-text);
  animation: ${rotate} 1s infinite linear;
`
