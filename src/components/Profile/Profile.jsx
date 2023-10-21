import React, { useEffect, useState } from 'react'
import style from './styles/ProfileStyles.module.css'

import bg from '../../img/profile/bg.png'
import bg2 from '../../img/programming-code-colorful.jpg'
import user from '../../img/profile/user.svg'
import avatar from '../../img/avatar.jpg'
import { getProfile } from '../../store/profile/ProfileActions'
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
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
    <>
    {loading ? (
      <p>Loading...</p>
    ) : matchingUser ? (
          <div className={style.profile}>
            <div className={style.background}>
              <img className={style.bg} src={bg2} alt="" />
              <button className={style.edit__cover}>
                Edit cover
              </button>
            </div>
            <div className={style.content}>
              <div className={style.avatar}>
                <div className={style.avatar__block}>
                  <img className={style.account__img} src={user} alt="" />
                </div>
              </div>

              <div className={style.content__block}>
                <div className={style.names}>
                  <h3 className={style.name}>{matchingUser.username}</h3>
                  <h4 className={style.user__job}>{matchingUser.professions}</h4>
                </div>

                <div className={style.followers__wrapper}>
                  <div className={style.follow__block}>
                    <div className={style.followers}>
                      <p className={style.count}>{matchingUser.followers_count}</p>
                      <p className={style.text}>Followers</p>
                    </div>
                    <div className={style.line}></div>
                    <div className={style.following}>
                      <p className={style.count}>{matchingUser.subscriptions_count}</p>
                      <p className={style.text}>Following</p>
                    </div>
                  </div>
                </div>

                <div className={style.edit__profile}>
                  <button className={style.edit__btn}>Edit profile</button>
                </div>
              </div>
            </div>
          </div>
      ) : (
        <p>No data available</p>
    )}
    </>
  )
}

export default Profile