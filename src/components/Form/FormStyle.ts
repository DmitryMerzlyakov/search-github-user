import styled from 'styled-components'

export const Form = styled.div`
  background: var(--color-background-searchBox);
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 32px;
  width: 30%;
`

export const Search = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  gap: 15px;
`

export const Button = styled.button`
  width: 30%;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #000;
  background: var(--color-background);
  color: var(--color-text);
  text-align: center;
  font-family: var(--font-family-bold);
  font-size: 18px;

  &:hover {
    background: var(--color-text);
    color: var(--color-background);
  }
`

export const Input = styled.input`
  width: 70%;
  padding: 5px;
  border-radius: 10px;
  border: 2px solid #000;
  color: var(--color-text);
  font-family: var(--font-family-normal);
  font-size: 18px;
  font-weight: 500;
  outline: none;
`
