import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
  padding: 32px;
`

export const ListItem = styled.button`
  margin: 10px;
  font-weight: 500;
  border-radius: 10px;
  border: 2px solid #000;
  color: var(--color-text);
  font-size: 18px;

  &:hover {
    background: var(--color-text);
    color: var(--color-background);
  }
`
