import { Sort } from '../Sort'
import { User } from '../User'

import * as S from './FormStyle'

type IProps = {
  searchString: string
  sortOrder: string
  login: string
  onSort: () => void
  onSearch: () => void
  setSearchString: (value: string) => void
}

const Form = ({
  searchString,
  sortOrder,
  login,
  onSort,
  onSearch,
  setSearchString
}: IProps) => {
  return (
    <S.Form>
      <S.Search>
        <S.Input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <S.Button onClick={onSearch}>Найти</S.Button>
      </S.Search>
      <Sort onClick={onSort} sortOrder={sortOrder} />
      <User userLogin={login} />
    </S.Form>
  )
}

export default Form
