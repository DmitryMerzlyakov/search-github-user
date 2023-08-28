import { Form } from '../../components/Form'
import { Loader } from '../../components/Loader'
import { Pagination } from '../../components/Pagination'
import { List } from '../../components/List'

import { useState } from 'react'
import { PER_PAGE, axiosInstance } from '../../servises'
import { GitHubUser, SearchUsersResponse } from '../../Types'

import * as S from './MainStyle'

const Main = () => {
  const [searchString, setSearchString] = useState('')
  const [login, setLogin] = useState('')
  const [users, setUsers] = useState<GitHubUser[]>([])
  const [allUsers, setAllUsers] = useState(0)
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const searchUsers = async (page: number) => {
    try {
      setLoading(true)
      const response = await axiosInstance.get<SearchUsersResponse>(
        '/search/users',
        {
          params: {
            q: searchString,
            sort: 'repositories',
            order: sortOrder,
            per_page: PER_PAGE,
            page: page
          }
        }
      )
      setUsers(response.data.items)
      setAllUsers(response.data.total_count)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = () => {
    setCurrentPageNumber(1)
    searchUsers(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPageNumber(page)
    searchUsers(page)
  }

  const handleSort = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'))
    searchUsers(currentPageNumber)
  }

  return (
    <S.Main>
      <Form
        searchString={searchString}
        onSearch={handleSearch}
        setSearchString={setSearchString}
        onSort={handleSort}
        sortOrder={sortOrder}
        login={login}
      />
      <>
        {loading ? (
          <Loader />
        ) : users.length ? (
          <S.Result>
            <List users={users} setLogin={setLogin} />
            <S.Footer>
              <Pagination
                onChange={handlePageChange}
                currentPageNumber={currentPageNumber}
                totalPages={Math.ceil(allUsers / PER_PAGE)}
                setCurrentPageNumber={setCurrentPageNumber}
              />
            </S.Footer>
          </S.Result>
        ) : (
          ''
        )}
      </>
    </S.Main>
  )
}

export default Main
