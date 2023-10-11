import React from 'react'
import style from '../../components/Account/styles/AccountStyles.module.css'
import MainNavbar from '../../components/Main/MainNavbar'
import { useNavigate } from 'react-router-dom'

import stars from '../../img/stars.svg'

const PasswordChanged = () => {
  const navigate = useNavigate()


  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <MainNavbar />
        <div className={style.block__wrapper}>
          <div className={style.block}>
            <img className={style.pass__stars} src={stars} alt="" />
            <div className={style.pass__block}>
              <div className={style.pass__wrapper}>
                <h2 className={style.pass__title}>Password changed</h2>
                <p className={style.pass__subtitle}>Your password has been changed succesfully</p>
                <button onClick={() => navigate('/login')} className={style.pass__button}>Back to login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordChanged