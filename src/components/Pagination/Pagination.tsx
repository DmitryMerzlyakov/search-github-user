import { createPages } from '../../servises'

import * as S from './PaginationStyle'

interface IProps {
  currentPageNumber: number
  totalPages: number
  onChange: (page: number) => void
}

const Pagination = ({ currentPageNumber, totalPages, onChange }: IProps) => {
  const pages: number[] = []

  createPages(pages, totalPages, currentPageNumber)

  return (
    <S.Pages data-testid="pagination">
      {pages.map((page) => (
        <S.Button
          key={page}
          onClick={() => onChange(page)}
          disabled={page === currentPageNumber}
        >
          {page}
        </S.Button>
      ))}
    </S.Pages>
  )
}

export default Pagination
