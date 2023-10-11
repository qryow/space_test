import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RegisterPage from '../pages/AccountPages/RegisterPage'
import LoginPage from '../pages/AccountPages/LoginPage'
import ChangePasswordPage from '../pages/AccountPages/ChangePasswordPage'
import LosePasswordPage from '../pages/AccountPages/LosePasswordPage'
import LosePasswordCompletePage from '../pages/AccountPages/LosePasswordCompletePage'
import PasswordChanged from '../pages/AccountPages/PasswordChanged'
import ActivatePage from '../pages/AccountPages/ActivatePage'

import MainPage from '../pages/MainPages/MainPage'

import About from '../components/Main/About'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/activate' element={<ActivatePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/change-password' element={<ChangePasswordPage />} />
      <Route path='/lose-password' element={<LosePasswordPage />} />
      <Route path='/lose-password-complete' element={<LosePasswordCompletePage />} />
      <Route path='/password-changed' element={<PasswordChanged />} />

      <Route path='/' element={<MainPage />} />

      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default MainRouter