import React from 'react'
import style from './MainStyles.module.css'

import MainNavbar from './MainNavbar'

import bg from '../../img/main-bg.svg'
import sphere from '../../img/sphere.webp'

const MainHeader = () => {

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <img id={style.img} src={bg} alt="" />
        <div className={style.container}>
          <MainNavbar />
          <div className={style.header__wrapper}>

          </div>
          {/*<img id={style.sphere} src={sphere} alt="" />*/}
        </div>
      </div>
    </div>
  )
}

export default MainHeader