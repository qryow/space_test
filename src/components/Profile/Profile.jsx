import React, { useEffect, useState, useRef } from "react";
import style from "./styles/ProfileStyles.module.css";
import { editProfile } from "../../store/profile/ProfileActions";
import bg2 from "../../img/programming-code-colorful.jpg";
import user from "../../img/profile/user.svg";
import edit from "../../img/profile/editbtn.svg";
import { getProfile } from "../../store/profile/ProfileActions";
import { useDispatch, useSelector } from "react-redux";
import EditName from "./ProfileModals/EditName";
import { getUsers } from "../../store/account/AccountActions";

const Profile = () => {
  const { users } = useSelector((state) => state.account);
  const { profile } = useSelector((state) => state.profile);
  const [editNameModal, setEditNameModal] = useState(false);
  const [oneUser, setOneUser] = useState(profile);

  const dispatch = useDispatch();
  const profileId = oneUser ? oneUser.id : null;

  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const localEmail = localStorage.getItem("account");
  const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, "") : "";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && profileId) {
      setOneUser((prevOneUser) => ({
        ...prevOneUser,
        profile_background: URL.createObjectURL(selectedFile),
      }));
      dispatch(
        editProfile({ profile_background: selectedFile, id: profileId })
      );
    }
  };

  const handleFileChange2 = (e) => {
    const selectedAvatar = e.target.files[0];
    if (selectedAvatar && profileId) {
      setOneUser((prevOneUser) => ({
        ...prevOneUser,
        profile_image: URL.createObjectURL(selectedAvatar),
      }));
      dispatch(editProfile({ profile_image: selectedAvatar, id: profileId }));
    }
  };

  useEffect(() => {
    setOneUser(profile);
  }, [profile]);

  useEffect(() => {
    if (users.length > 0) {
      const userWithMatchingEmail = users.find(
        (user) => user.email === emailWithoutQuotes
      );
      if (userWithMatchingEmail) {
        dispatch(getProfile({ id: userWithMatchingEmail.id }));
      }
    }
  }, [dispatch, users, emailWithoutQuotes]);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      {oneUser && (
        <div className={style.profile}>
          <div className={style.background}>
            <img
              className={style.bg}
              src={oneUser.profile_background || bg2}
              alt=""
            />
            <button
              className={style.edit__cover}
              onClick={() => fileInputRef.current.click()}
            >
              Edit cover
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <div className={style.content}>
            <div className={style.avatar}>
              <div className={style.avatar__block}>
                <img
                  className={style.account__img}
                  src={oneUser.profile_image || user}
                  alt="Default User Profile"
                />
                <input
                  type="file"
                  ref={fileInputRef2}
                  style={{ display: "none" }}
                  onChange={handleFileChange2}
                />
              </div>
              <button
                className={style.edit__btn}
                onClick={() => fileInputRef2.current.click()}
              >
                <img src={edit} alt="" />
              </button>
            </div>

            <div className={style.content__block}>
              <div className={style.names}>
                <h3 className={style.name}>
                  {oneUser.username}
                  <button
                    className={style.edit__btn}
                    onClick={() => setEditNameModal(true)}
                  >
                    <img src={edit} alt="" />
                  </button>
                </h3>
                <h4 className={style.user__job}>{oneUser.professions}</h4>
              </div>

              <div className={style.followers__wrapper}>
                <div className={style.follow__block}>
                  <div className={style.followers}>
                    <p className={style.count}>{oneUser.followers_count}</p>
                    <p className={style.text}>Followers</p>
                  </div>
                  <hr />
                  <div className={style.following}>
                    <p className={style.count}>{oneUser.subscriptions_count}</p>
                    <p className={style.text}>Following</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <EditName
        activeName={editNameModal}
        setActiveName={setEditNameModal}
        user={oneUser}
      />
    </>
  );
};

export default Profile;
