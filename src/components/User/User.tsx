import { useState, useEffect } from 'react'
import { GitHubUser } from '../../Types'
import { axiosInstance } from '../../servises'

import * as S from './UserStyle'

interface IProps {
  userLogin: string
}

const User = ({ userLogin }: IProps) => {
  const [user, setUser] = useState<GitHubUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        setLoading(true)
        const response = await axiosInstance.get<GitHubUser>(
          `/users/${userLogin}`,
          {
            params: {
              q: userLogin
            }
          }
        )
        setUser(response.data)
        console.log(loading)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserDetails()
  }, [userLogin])

  if (!user) {
    return <S.None />
  }

  return (
    <>
      {userLogin ? (
        <S.Profile>
          <S.Avatar src={user.avatar_url} alt={user.login} />
          <S.Name>{user.login}</S.Name>
          <S.Link
            href={user.html_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </S.Link>
        </S.Profile>
      ) : (
        ''
      )}
    </>
  )
}

export default User
