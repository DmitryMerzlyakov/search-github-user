import { Route, Routes } from 'react-router-dom'

import { Main } from './pages/Main'
import { NotFound } from './pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/:userLogin" element={<DetailsPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
