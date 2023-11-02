import React from 'react'
import MainNavbar from '../../components/Main/MainNavbar'
import SideBar from '../../components/Profile/SideBar'
import Profile from '../../components/Profile/Profile'
import style from '../../components/Profile/styles/ProfileStyles.module.css'
import ProfilePosts from '../../components/Profile/ProfilePosts'

const ProfilePage = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.container}>
          <MainNavbar />
          <div className={style.main}>
            <SideBar  />
            <div className={style.main_right}>
              <Profile />
              <ProfilePosts />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage