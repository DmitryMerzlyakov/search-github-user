import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 6px;
  margin: 0 0 40px 24px;
  padding: 32px;
`

export const ListItem = styled.button`
  margin: 10px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  border: 2px solid #000;
  color: var(--color-text);

  &:hover {
    background: var(--color-text);
    color: var(--color-background);
  }
`
