import styled from 'styled-components'

export const Pages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 50px;
  height: 37px;
  align-items: center;
  color: var(--color-text);
  font-family: var(--font-family-normal);
  font-size: 18px;
  font-weight: 500;
  outline: none;
`

export const Button = styled.button`
  width: 37px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid #000;
  background: var(--color-background-searchBox);
  color: var(--color-text);
  text-align: center;
  font-family: var(--font-family-bold);
  font-size: 18px;

  &:hover {
    background: var(--color-text);
    color: var(--color-background);
  }
`
