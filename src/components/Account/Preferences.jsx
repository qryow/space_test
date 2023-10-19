import React from 'react'
import style from './styles/CreateProfile.module.css'

import arrowRight from '../../img/arrowRight.svg'
import arrowDown from '../../img/ArrowDown.svg'
import closeIcon from '../../img/closeIcon.svg'

const Preferences = () => {
  return (
    <>
      <h3 className={style.create_profile__title}>Your preferences</h3>


      <div className={style.wrapper__pref}>
        <div className={style.preferences__wrapper}>
          <h5 className={style.input__title}>Choose at least one section that is most interesting to you</h5>
          <div className={style.preferences__drop}>
            <h5>Sections</h5>
            <img src={arrowDown} alt="" />
          </div>

          <h5 className={style.input__title}>Selected Services</h5>
          <div className={style.choose}>
            <div className={style.choosen}>
              <h5 className={style.choose__title}>Section 1</h5>
              <img src={closeIcon} alt="" />
            </div>
          </div>

        </div>

        <div className={style.preferences__block}>
          <h5 className={style.input__title}></h5>
            <div className={style.preferences__list}>
              <div className={style.one__preference}>
                <h5 className={style.one__pref_title}>Astrophysics</h5>
                <img className={style.one__pref_icon} src={arrowRight} alt="" />
              </div>
            </div>
            <div className={style.preference__block}>

            </div>
        </div>
      </div>

      <button className={style.continue}>Continue</button>

    </>
  )
}

export default Preferences