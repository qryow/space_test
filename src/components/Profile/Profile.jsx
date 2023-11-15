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
import { getUsers } from "../../store/account/AccountActions";

const Profile = () => {
  const { profiles, loading } = useSelector((state) => state.profile);
  const [editNameModal, setEditNameModal] = useState(false);

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

  //const handleFileChange = async (event) => {
  //  const updatedUser = { ...matchingUser, profile_image: URL.createObjectURL(event.target.files[0]) };
  //  setMatchingUser(updatedUser.profile_image);
  //  dispatch(editProfile({ editedObj: updatedUser, id: profileId }));
  //};

  const handleBgChange = async (event) => {
    const updatedUser = { ...matchingUser, profile_background: URL.createObjectURL(event.target.files[0]) };
    setBgImage(updatedUser.profile_background);
    dispatch(editProfile({ editedObj: updatedUser, id: profileId }));
  };
  







  const [editedObj, setEditedObj] = useState({
    username: '',
    first_name: '',
    last_name: '',
    profile_image: '',
    profile_background: '',
    professions: '',
    country: '',
    arial: '',
  });


  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);

  const localEmail = localStorage.getItem('account');
  const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, '') : '';

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const selectedAvatar = e.target.files[0];
    if (selectedFile) {
      setEditedObj((prevEditedObj) => {
        // Используем предыдущее состояние для гарантии актуальности изменений
        return {
          ...prevEditedObj,
          profile_background: selectedFile,
        };
      });
  
      // Вызываем editProfile с актуальным состоянием
      dispatch(editProfile({ editedObj, id: profileId }));
    }
  };
  const handleFileChange2 = (e) => {
    const selectedAvatar = e.target.files[0];
    if (selectedAvatar) {
      setEditedObj((prevEditedObj) => {
        // Используем предыдущее состояние для гарантии актуальности изменений
        return {
          ...prevEditedObj,
          profile_image: selectedAvatar,
        };
      });
  
      // Вызываем editProfile с актуальным состоянием
      dispatch(editProfile({ editedObj, id: profileId }));
    }
  };

  const { users } = useSelector(state => state.account);
  const { profile } = useSelector(state => state.profile);
  console.log(profile)

  useEffect(() => {
    if (editedObj.profile_image) {
      // Вызываете вашу функцию editProfile с актуальным состоянием
      dispatch(editProfile({ editedObj, id: profileId }));
    } if (editedObj.profile_background) {
      dispatch(editProfile({ editedObj, id: profileId }));
    }
  }, [editedObj.profile_image, editedObj.profile_background]);

  const [matchingUserId, setMatchingUserId] = useState(null);
  console.log(matchingUserId);

  useEffect(() => {
    if (users.length > 0) {
      const userWithMatchingEmail = users.find(user => user.email === emailWithoutQuotes);
      console.log(userWithMatchingEmail)
      if (userWithMatchingEmail) {
        setMatchingUserId(userWithMatchingEmail.id);
        dispatch(getProfile({id: userWithMatchingEmail.id}))
      }
      
    }
  }, [users]);
  
  //useEffect(() => {
  //  if (users.length > 0) {
  //    const userWithMatchingEmail = profiles.find(
  //      (profile) => profile.user === emailWithoutQuotes
  //    );
  //    console.log(userWithMatchingEmail);
  //    if (userWithMatchingEmail) {
  //      setMatchingUser(userWithMatchingEmail);
  //    }
  //  }
  //}, [users, emailWithoutQuotes]);

  useEffect(() => {
    dispatch(getProfile());
    dispatch(editProfile());
    dispatch(getUsers())
  }, []);


  return (
    <>
      <div className={style.profile}>
        <div className={style.background}>
          <img className={style.bg} src={bgImage} alt="" />
          <button className={style.edit__cover} onClick={() => fileInputRef.current.click()}>Edit cover</button>
          <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
        </div>
        <div className={style.content}>
          <div className={style.avatar}>
            <div className={style.avatar__block}>
              <img className={style.account__img} src={user} alt="Default User Profile" />
              <input type="file" ref={fileInputRef2} style={{ display: 'none' }} onChange={handleFileChange2} />
            </div>
            <button className={style.edit__btn} onClick={() => fileInputRef2.current.click()} >
              <img src={edit} alt="" />
            </button>
          </div>

          <div className={style.content__block}>
            <div className={style.names}>
              <h3 className={style.name}>
                {profile.username}
                <button className={style.edit__btn} onClick={() => setEditNameModal(true)} >
                  <img src={edit} alt="" />
                </button>
              </h3>
              <h4 className={style.user__job}>
                {profile.professions}
              </h4>
            </div>

            <div className={style.followers__wrapper}>
              <div className={style.follow__block}>
                <div className={style.followers}>
                  <p className={style.count}>
                    {profile.followers_count}
                  </p>
                  <p className={style.text}>Followers</p>
                </div>
                <hr />
                <div className={style.following}>
                  <p className={style.count}>
                    {profile.subscriptions_count}
                  </p>
                  <p className={style.text}>Following</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditName activeName={editNameModal} setActiveName={setEditNameModal} user={matchingUser} />
      <input type="file"  accept="image/*" style={{ display: "none" }} ref={backInputRef} onChange={handleBgChange} />
    </>
  );
};

export default Profile;
