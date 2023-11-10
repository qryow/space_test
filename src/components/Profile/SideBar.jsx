import React, { useEffect, useState } from 'react'
import style from './styles/ProfileStyles.module.css'
import { Link, useLocation } from 'react-router-dom'

import profileActive from '../../img/profile/profile.svg'
import massangerActive from '../../img/profile/messageActive.svg'
import savedActive from '../../img/profile/archiveActive.svg'
import notifyActive from '../../img/profile/notifyActive.svg'
import settingsActive from '../../img/profile/settingsActive.svg'
import profile from '../../img/account-details.svg'
import massenger from '../../img/profile/message.svg'
import saved from '../../img/profile/archive.svg'
import notification from '../../img/profile/notification.svg'
import settings from '../../img/profile/Settings.svg'
import locationIcon from '../../img/profile/Location.svg'
import mail from '../../img/profile/Mail.svg'
import globe from '../../img/profile/Globe.svg'
import plus from '../../img/profile/Add_PlusGray.svg'
import edit from '../../img/profile/editbtn.svg'

import { getProfile } from '../../store/profile/ProfileActions'
import { useDispatch, useSelector } from 'react-redux';

const SideBar = () => {
  const location = useLocation();

  const { profiles, loading } = useSelector(state => state.profile);
  console.log(profiles);

  const localEmail = localStorage.getItem('account');
const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, '') : '';
console.log(emailWithoutQuotes);

const [matchingUser, setMatchingUser] = useState(null);
console.log(matchingUser);

useEffect(() => {
  if (profiles.length > 0) {
    const userWithMatchingEmail = profiles.find(profile => profile.user === emailWithoutQuotes);
    console.log(userWithMatchingEmail);
    if (userWithMatchingEmail) {
      setMatchingUser(userWithMatchingEmail);
    }
  }
}, [profiles]);

const dispatch = useDispatch()

useEffect(() => {
  dispatch(getProfile())
}, [])


  return (
    <div className={style.sidebar__wrapper}>
      <div className={style.side__nav}>
        <div className={style.nav__block}>
          <div className={`${style.nav__item} ${location.pathname === '/profile' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/profile' ? profileActive : profile}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/profile' ? style.active__text : ''}`}>My profile</h4>
          </div>
          <div className={`${style.nav__item} ${location.pathname === '/massenger' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/massenger' ? massangerActive : massenger}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/massenger' ? style.active__text : ''}`}>Messages</h4>
          </div>
          <div className={`${style.nav__item} ${location.pathname === '/saved' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/saved' ? savedActive : saved}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/saved' ? style.active__text : ''}`}>Saved</h4>
          </div>
          <div className={`${style.nav__item} ${location.pathname === '/notification' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/notification' ? notifyActive : notification}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/notification' ? style.active__text : ''}`}>Notification</h4>
          </div>
          <div className={`${style.nav__item} ${location.pathname === '/settings' ? style.active : ''}`}>
            <img className={style.nav__icon} src={`${location.pathname === '/settings' ? settingsActive : settings}`} alt="" />
            <h4 className={`${style.nav__title} ${location.pathname === '/settings' ? style.active__text : ''}`}>Settings</h4>
          </div>
        </div>
      </div>

      {loading ? (
      <p>Loading...</p>
    ) : matchingUser ? (
      <>
        <div className={style.info}>
          <div className={style.info__block}>
            <div className={style.info__item}>
              <img className={style.info__icon} src={locationIcon} alt="" />
              <h5 className={style.info__title}>{matchingUser.arial}, {matchingUser.country}</h5>
            </div>
            <div className={style.info__item}>
              <img className={style.info__icon2} src={mail} alt="" />
              <h5 className={style.info__title}>{matchingUser.user}</h5>
            </div>
          </div>

          <div className={style.info_btns}>
            <button className={style.edit__btn}><img src={plus} alt="" /></button>
            <button className={style.edit__btn}><img src={edit} alt="" /></button>
          </div>

          <div className={style.info__item2}>
            <img className={style.info__icon3} src={globe} alt="" />
            <h5 className={style.info__title}>Social networks</h5>
          </div>
        </div>

        <div className={style.info2}>
          <div className={style.lenguages__block}>
            <div className={style.lenguages__block_up}>
              <h3>Lenguages</h3>
              <div className={style.info_btns}>
                <button className={style.edit__btn}><img src={plus} alt="" /></button>
                <button className={style.edit__btn}><img src={edit} alt="" /></button>
              </div>
            </div>
            <p>English: <span>Fluent</span></p>
            <p>Russian: <span>Native or Bilingual</span></p>
          </div>
          <div className={style.education__blocks}>
            <h3>Education</h3>
            <div className={style.education__block}>
              <div className={style.info_btns}>
                <button className={style.edit__btn}><img src={plus} alt="" /></button>
                <button className={style.edit__btn}><img src={edit} alt="" /></button>
              </div>
              <h4>Northwestern University</h4>
              <p>Bachelor</p>
              <p>Astronomy</p>
            </div>
            <div className={style.education__block}>
              <div className={style.info_btns}>
                <button className={style.edit__btn}><img src={plus} alt="" /></button>
                <button className={style.edit__btn}><img src={edit} alt="" /></button>
              </div>
              <h4>Northwestern University</h4>
              <p>Bachelor</p>
              <p>Astronomy</p>
            </div>
          </div>
        </div>
      </>
      ) : (
        <p>No data available</p>
    )}
      
    </div>
  )
}

export default SideBar