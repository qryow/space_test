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
  const [ava, setAva] = useState(profile.profile_image);
  const [fone, setFone] = useState(profile.profile_background);

  const dispatch = useDispatch();
  const profileId = profile ? profile.id : null;

  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const localEmail = localStorage.getItem("account");
  const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, "") : "";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setAva(selectedFile);
    const editedProfile = {
      id: profileId,
      profile_background: ava,
    };
    dispatch(editProfile({ editedObj: editedProfile, id: profileId }));
  };

  const handleFileChange2 = (e) => {
    const selectedAvatar = e.target.files[0];
    setFone(selectedAvatar);
    const editedProfile = {
      id: profileId,
      profile_image: fone,
    };
    dispatch(editProfile({ editedObj: editedProfile, id: profileId }));
  };

  useEffect(() => {
    setAva(profile.profile_image);
    setFone(profile.profile_background);
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
      {profile && (
        <div className={style.profile}>
          <div className={style.background}>
            <img
              className={style.bg}
              src={profile.profile_background || bg2}
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
                  src={profile.profile_image || user}
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
                  {profile.username}
                  <button
                    className={style.edit__btn}
                    onClick={() => setEditNameModal(true)}
                  >
                    <img src={edit} alt="" />
                  </button>
                </h3>
                <h4 className={style.user__job}>{profile.professions}</h4>
              </div>

              <div className={style.followers__wrapper}>
                <div className={style.follow__block}>
                  <div className={style.followers}>
                    <p className={style.count}>{profile.followers_count}</p>
                    <p className={style.text}>Followers</p>
                  </div>
                  <hr />
                  <div className={style.following}>
                    <p className={style.count}>{profile.subscriptions_count}</p>
                    <p className={style.text}>Following</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <EditName activeName={editNameModal} setActiveName={setEditNameModal} />
    </>
  );
};

export default Profile;
