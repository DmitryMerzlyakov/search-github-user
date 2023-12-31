import styled from 'styled-components'

export const Sort = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  font-family: var(--font-family-bold);
  font-size: 18px;
`

export const Button = styled.button`
  height: 20%;
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 18px;
  border-radius: 10px;
  border: 2px solid #000;
  background: var(--color-background);
  color: var(--color-text);

  &:hover {
    background: var(--color-text);
    color: var(--color-background);
  }
`
