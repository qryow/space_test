import React, { useEffect, useState, useRef } from "react";
import style from "./styles/ProfileStyles.module.css";
import { editProfile } from "../../store/profile/ProfileActions";

import bg3 from "../../img/profile/bg.png";
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

  const [matchingUser, setMatchingUser] = useState(null);
  const profileId = matchingUser ? matchingUser.id : null;

  const dispatch = useDispatch();

  const bg = matchingUser ? matchingUser.profile_background : bg2
  const [bgImage, setBgImage] = useState(bg);

  const imgInputRef = useRef(null);
  const backInputRef = useRef(null);

  const handleEditImageClick = () => {
    if (imgInputRef.current) {
      imgInputRef.current.click();
    }
  };

  const handleEditBackClick = () => {
    if (backInputRef.current) {
      backInputRef.current.click();
    }
  };

  const handleFileChange = async (event) => {
    const updatedUser = { ...matchingUser, profile_image: URL.createObjectURL(event.target.files[0]) };
    setMatchingUser(updatedUser.profile_image);
    dispatch(editProfile({ editedObj: updatedUser, id: profileId }));
  };

  const handleBgChange = async (event) => {
    const updatedUser = { ...matchingUser, profile_background: URL.createObjectURL(event.target.files[0]) };
    setBgImage(updatedUser.profile_background);
    dispatch(editProfile({ editedObj: updatedUser, id: profileId }));
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
              <img className={style.bg} src={bgImage} alt="" />
              <button className={style.edit__cover} onClick={handleEditBackClick}>Edit cover</button>
            </div>
            <div className={style.content}>
              <div className={style.avatar}>
                <div className={style.avatar__block}>
                {matchingUser.profile_image ? (
              <img
                className={style.account__img}
                src={matchingUser.profile_image}
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
                  onClick={handleEditImageClick}
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
            ref={imgInputRef}
            onChange={handleFileChange}
          />
                    <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={backInputRef}
            onChange={handleBgChange}
          />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Profile;
