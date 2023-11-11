import React, { useEffect, useState, useRef } from "react";
import style from "./styles/ProfileStyles.module.css";
import { editProfile } from "../../store/profile/ProfileActions";

import bg from "../../img/profile/bg.png";
import bg2 from "../../img/programming-code-colorful.jpg";
import user from "../../img/profile/user.svg";
import avatar from "../../img/avatar.jpg";
import edit from "../../img/profile/editbtn.svg";
import { getProfile } from "../../store/profile/ProfileActions";
import { useDispatch, useSelector } from "react-redux";
import EditName from "./ProfileModals/EditName";

const Profile = () => {
  const { profiles, loading } = useSelector((state) => state.profile);
  const [editNameModal, setEditNameModal] = useState(false);

  const localEmail = localStorage.getItem("account");
  const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, "") : "";
  console.log(emailWithoutQuotes);

  const [matchingUser, setMatchingUser] = useState(null);
  const profileId = matchingUser ? matchingUser.id : null;

  const dispatch = useDispatch();



  const ava = matchingUser ? matchingUser.profile_image : null;
  const [profileAvatar, setProfileAvatar] = useState(ava);
  
  console.log(profileAvatar);
  
  const fileInputRef = useRef(null);

  const handleEditButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileChange = (event) => {
    const newSelectedAvatar = event.target.files[0];
    setProfileAvatar(newSelectedAvatar)

    dispatch(editProfile({ editedObj: matchingUser, id: profileId }));
  };
  
  
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profiles.length > 0) {
      const userWithMatchingEmail = profiles.find(
        (profile) => profile.user === emailWithoutQuotes
      );
      console.log(userWithMatchingEmail);
      if (userWithMatchingEmail) {
        setMatchingUser(userWithMatchingEmail);
        setProfileAvatar({ profile_image: userWithMatchingEmail.profile_image });
      }
    }
  }, [profiles, emailWithoutQuotes]);



  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : matchingUser ? (
        <>
          <div className={style.profile}>
            <div className={style.background}>
              <img className={style.bg} src={bg2} alt="" />
              <button className={style.edit__cover}>Edit cover</button>
            </div>
            <div className={style.content}>
              <div className={style.avatar}>
                <div className={style.avatar__block}>
                {profileAvatar.profile_image ? (
              <img
                className={style.account__img}
                src={profileAvatar.profile_image}
                alt="User Profile"
              />
            ) : (
              <img
                className={style.account__img}
                src={user}
                alt="Default User Profile"
              />
            )}

                </div>
                <button
                  className={style.edit__btn}
                  onClick={handleEditButtonClick}
                >
                  <img src={edit} alt="" />
                </button>
              </div>

              <div className={style.content__block}>
                <div className={style.names}>
                  <h3 className={style.name}>
                    {matchingUser.username}
                    <button
                      className={style.edit__btn}
                      onClick={() => setEditNameModal(true)}
                    >
                      <img src={edit} alt="" />
                    </button>
                  </h3>
                  <h4 className={style.user__job}>
                    {matchingUser.professions}
                  </h4>
                </div>

                <div className={style.followers__wrapper}>
                  <div className={style.follow__block}>
                    <div className={style.followers}>
                      <p className={style.count}>
                        {matchingUser.followers_count}
                      </p>
                      <p className={style.text}>Followers</p>
                    </div>
                    <hr />
                    <div className={style.following}>
                      <p className={style.count}>
                        {matchingUser.subscriptions_count}
                      </p>
                      <p className={style.text}>Following</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EditName
            activeName={editNameModal}
            setActiveName={setEditNameModal}
            user={matchingUser}
          />
                    <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Profile;
