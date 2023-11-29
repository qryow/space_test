import React, { useEffect, useState } from "react";
import style from "./styles/ProfileStyles.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

import profileActive from "../../img/profile/profile.svg";
import massangerActive from "../../img/profile/messageActive.svg";
import savedActive from "../../img/profile/archiveActive.svg";
import notifyActive from "../../img/profile/notifyActive.svg";
import settingsActive from "../../img/profile/settingsActive.svg";
import profile from "../../img/account-details.svg";
import massenger from "../../img/profile/message.svg";
import saved from "../../img/profile/archive.svg";
import notification from "../../img/profile/notification.svg";
import settings from "../../img/profile/Settings.svg";
import locationIcon from "../../img/profile/Location.svg";
import mail from "../../img/profile/Mail.svg";
import globe from "../../img/profile/Globe.svg";
import plus from "../../img/profile/Add_PlusGray.svg";
import edit from "../../img/profile/editbtn.svg";

import {
  getProfile,
  getLanguages,
  getEducations,
} from "../../store/profile/ProfileActions";
import { useDispatch, useSelector } from "react-redux";
import LangBlock from "./LangBlock";
import CreateLang from "./ProfileModals/CreateLang";
import EditLang from "./ProfileModals/EditLang";
import EducationBlock from "./EducationBlock";
import CreateEducation from "./ProfileModals/CreateEducation";
import CreateSocial from "./ProfileModals/CreateSocial";

const SideBar = () => {
  const [createLangModal, setCreateLangModal] = useState(false);
  const [editLangModal, setEditLangModal] = useState(false);
  const [createEducationModal, setCreateEducationModal] = useState(false);
  const [createSocialModal, setCreateSocialModal] = useState(false);
  const location = useLocation();

  const { profile, loading, languages, educations } = useSelector(
    (state) => state.profile
  );
  console.log(educations);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getLanguages());
    dispatch(getEducations());
  }, []);

  return (
    <>
      <div className={style.sidebar__wrapper}>
        <div className={style.side__nav}>
          <div className={style.nav__block}>
            <div
              onClick={() => navigate("/profile")}
              className={`${style.nav__item} ${
                location.pathname === "/profile" ? style.active : ""
              }`}
            >
              <img
                className={style.nav__icon}
                src={`${
                  location.pathname === "/profile" ? profileActive : profile
                }`}
                alt=""
              />
              <h4
                className={`${style.nav__title} ${
                  location.pathname === "/profile" ? style.active__text : ""
                }`}
              >
                My profile
              </h4>
            </div>
            <div
              onClick={() => navigate("/chat")}
              className={`${style.nav__item} ${
                location.pathname === "/chat" ? style.active : ""
              }`}
            >
              <img
                className={style.nav__icon}
                src={`${
                  location.pathname === "/chat" ? massangerActive : massenger
                }`}
                alt=""
              />

              <h4
                className={`${style.nav__title} ${
                  location.pathname === "/chat" ? style.active__text : ""
                }`}
              >
                Messages
              </h4>
            </div>
            <div
              className={`${style.nav__item} ${
                location.pathname === "/saved" ? style.active : ""
              }`}
            >
              <img
                className={style.nav__icon}
                src={`${location.pathname === "/saved" ? savedActive : saved}`}
                alt=""
              />
              <h4
                className={`${style.nav__title} ${
                  location.pathname === "/saved" ? style.active__text : ""
                }`}
              >
                Saved
              </h4>
            </div>
            <div
              className={`${style.nav__item} ${
                location.pathname === "/notification" ? style.active : ""
              }`}
            >
              <img
                className={style.nav__icon}
                src={`${
                  location.pathname === "/notification"
                    ? notifyActive
                    : notification
                }`}
                alt=""
              />
              <h4
                className={`${style.nav__title} ${
                  location.pathname === "/notification"
                    ? style.active__text
                    : ""
                }`}
              >
                Notification
              </h4>
            </div>
            <div
              className={`${style.nav__item} ${
                location.pathname === "/settings" ? style.active : ""
              }`}
            >
              <img
                className={style.nav__icon}
                src={`${
                  location.pathname === "/settings" ? settingsActive : settings
                }`}
                alt=""
              />
              <h4
                className={`${style.nav__title} ${
                  location.pathname === "/settings" ? style.active__text : ""
                }`}
              >
                Settings
              </h4>
            </div>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : profile ? (
          <>
            <div className={style.info}>
              <div className={style.info__block}>
                <div className={style.info__item}>
                  <img className={style.info__icon} src={locationIcon} alt="" />
                  <h5 className={style.info__title}>
                    {profile.arial}, {profile.country}
                  </h5>
                </div>
                <div className={style.info__item}>
                  <img className={style.info__icon2} src={mail} alt="" />
                  <h5 className={style.info__title}>{profile.user}</h5>
                </div>
              </div>

              <div className={style.info_btns}>
                <button
                  className={style.edit__btn}
                  onClick={() => setCreateSocialModal(true)}
                >
                  <img src={plus} alt="" />
                </button>
                <button className={style.edit__btn}>
                  <img src={edit} alt="" />
                </button>
              </div>

              <div className={style.info__item2}>
                <img className={style.info__icon3} src={globe} alt="" />
                <h5 className={style.info__title}>Social networks</h5>
              </div>
            </div>

            <div className={style.info2}>
              <div className={style.lenguages__block}>
                <div className={style.lenguages__block_up}>
                  <h3>Languages</h3>
                  <div className={style.info_btns}>
                    <button
                      className={style.edit__btn}
                      onClick={() => setCreateLangModal(true)}
                    >
                      <img src={plus} alt="" />
                    </button>
                    <button
                      className={style.edit__btn}
                      onClick={() => setEditLangModal(true)}
                    >
                      <img src={edit} alt="" />
                    </button>
                  </div>
                </div>
                {languages ? (
                  <div className={style.lang}>
                    {languages.length > 0 ? (
                      languages.map((lang) => (
                        <LangBlock lang={lang} key={lang.id} />
                      ))
                    ) : (
                      <p>No languages</p>
                    )}
                  </div>
                ) : (
                  <h3>Loading...</h3>
                )}
              </div>
              <div className={style.education__blocks}>
                <h3>
                  Education
                  <button
                    className={style.edit__btn}
                    onClick={() => setCreateEducationModal(true)}
                  >
                    <img src={plus} alt="" />
                  </button>
                </h3>
                {educations ? (
                  <div className={style.lang}>
                    {educations.length > 0 ? (
                      educations.map((education) => (
                        <EducationBlock
                          education={education}
                          key={education.id}
                        />
                      ))
                    ) : (
                      <p>No educations</p>
                    )}
                  </div>
                ) : (
                  <h3>Loading...</h3>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <CreateEducation
        createEducationModal={createEducationModal}
        setCreateEducationModal={setCreateEducationModal}
      />
      <CreateLang
        createLangModal={createLangModal}
        setCreateLangModal={setCreateLangModal}
      />
      <CreateSocial
        createSocialModal={createSocialModal}
        setCreateSocialModal={setCreateSocialModal}
      />
      <EditLang
        editLangModal={editLangModal}
        setEditLangModal={setEditLangModal}
      />
    </>
  );
};

export default SideBar;
