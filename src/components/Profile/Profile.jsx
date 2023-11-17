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
  const dispatch = useDispatch();
  const [editNameModal, setEditNameModal] = useState(false);


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

  const [matchingUserId, setMatchingUserId] = useState(null);
  console.log(matchingUserId);  

  const { users } = useSelector(state => state.account);
  const { profile } = useSelector(state => state.profile);
  console.log(profile)


  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setEditedObj((prevEditedObj) => ({
        ...prevEditedObj,
        profile_background: selectedFile,
      }));
      try {
        await dispatch(editProfile({ editedObj, id: matchingUserId }));
        await dispatch(getProfile({ id: matchingUserId }));
      } catch (error) {
        console.error('Error editing profile:', error);
      }
    }
  };

  const handleFileChange2 = async (e) => {
    const selectedAvatar = e.target.files[0];
    if (selectedAvatar) {
      setEditedObj((prevEditedObj) => {
              return {
                ...prevEditedObj,
                profile_image: selectedAvatar,
              };
            });
      try {
        
        await dispatch(editProfile({ editedObj, id: matchingUserId }));
        await dispatch(getProfile({ id: matchingUserId })); 
      } catch (error) {
        console.error('Error editing profile:', error);
      }
    }
  };


  useEffect(() => {
    if (users.length > 0) {
      const userWithMatchingEmail = users.find(user => user.email === emailWithoutQuotes);
      console.log(userWithMatchingEmail)
      if (userWithMatchingEmail) {
        setMatchingUserId(userWithMatchingEmail.id);
        //dispatch(getProfile({id: userWithMatchingEmail.id}))    
      }

    }
  }, [users]);

  useEffect(() => {
    if (editedObj.profile_background) {
      dispatch(editProfile({ editedObj, id: matchingUserId }));
      dispatch(getProfile({id: matchingUserId}))
    } if (editedObj.profile_image) {
      dispatch(editProfile({ editedObj, id: matchingUserId }));
      dispatch(getProfile({id: matchingUserId}))
    }
  }, [editedObj, matchingUserId]);

  useEffect(() => {
    dispatch(editProfile({ editedObj, id: 4 }));
    dispatch(getUsers())
    dispatch(getProfile({id: matchingUserId}))
  }, [matchingUserId]);


  return (
    <>
      {profile && (
        <div className={style.profile}>
          <div className={style.background}>
            <img
              className={style.bg}
              src={profile.profile_background}
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
                  src={profile.profile_image}
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
