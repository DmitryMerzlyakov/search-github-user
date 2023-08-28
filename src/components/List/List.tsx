import { GitHubUser } from '../../Types'
import * as S from './ListStyle'

interface IProps {
  users: GitHubUser[]
  setLogin: (value: string) => void
}

const List = ({ users, setLogin }: IProps) => {
  return (
    <S.List>
      {users.map((user) => (
        <S.ListItem key={user.id} onClick={() => setLogin(user.login)}>
          {user.login}
        </S.ListItem>
      ))}
    </S.List>
  )
}

export default List
