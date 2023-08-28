import * as S from './SortStyle'

interface IProps {
  sortOrder: string
  onClick: () => void
}

const Sort = ({ onClick, sortOrder }: IProps) => {
  return (
    <S.Sort>
      Сортировать по:
      <S.Button onClick={onClick} disabled={sortOrder === 'asc'}>
        Количеству репозиториев ↑
      </S.Button>
      <S.Button onClick={onClick} disabled={sortOrder === 'desc'}>
        Количеству репозиториев ↓
      </S.Button>
    </S.Sort>
  )
}

export default Sort
