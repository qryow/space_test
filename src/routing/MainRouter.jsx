import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RegisterPage from '../pages/AccountPages/RegisterPage'
import LoginPage from '../pages/AccountPages/LoginPage'
import ChangePasswordPage from '../pages/AccountPages/ChangePasswordPage'
import LosePasswordPage from '../pages/AccountPages/LosePasswordPage'
import LosePasswordCompletePage from '../pages/AccountPages/LosePasswordCompletePage'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element='' />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/change-password' element={<ChangePasswordPage />} />
      <Route path='/lose-password' element={<LosePasswordPage />} />
      <Route path='/lose-password-complete' element={<LosePasswordCompletePage />} />
    </Routes>
  )
}

export default MainRouter