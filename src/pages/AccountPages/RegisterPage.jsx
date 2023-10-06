import React from 'react'
import Register from '../../components/Account/Register'
import MainNavbar from '../../components/Main/MainNavbar'
import style from './Account.module.css'

import registerFon from '../../img/register.png'

const RegisterPage = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <MainNavbar />
          <div className={style.block__wrapper}>
            <div className={style.block}>
              
            </div>
          </div>
        </div>
      </div>
    </>
    //<Register />
  )
}

export default RegisterPage