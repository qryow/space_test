import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './styles/AccountStyles.module.css'
import { clearStatus, clearCurrentAccount } from '../../store/account/AccountSlice'
import { changePassword } from '../../store/account/AccountActions'
import MainNavbar from '../Main/MainNavbar'

import leave from '../../img/leftarrow.svg'
import open from '../../img/hide-pass.svg'
import hide from '../../img/pass_open.svg'

const ChangePassword = () => {
  const [userObj, setUserObj] = useState({
    old_password: '',
    new_password: '',
    new_password_confirm: ''
  })

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [oldPasswordError, setOldPasswordError] = useState('')
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const handleCreateAccount = () => {
    if (!userObj.old_password) {
      setOldPasswordError('Old password is required');
    } else {
      setOldPasswordError('');
    }
  
    if (!userObj.new_password) {
      setPasswordError('New password is required');
    } else {
      setPasswordError('');
    }
  
    if (!userObj.new_password_confirm) {
      setPasswordConfirmError('Confirm password is required');
    } else {
      setPasswordConfirmError('');
    }
  };

  const notSamePassword = () => {
    if (userObj.new_password !== userObj.new_password_confirm) {
      return 'Passwords do not match'
    }
    return ''
  }
  const passwordMessage = notSamePassword()

  const notFullPassword = () => {
    if (userObj.new_password.length < 8 || userObj.new_password_confirm.length < 8) {
      return 'Need to be more than 8'
    }
    return ''
  }
  const fullPass = notFullPassword()

  const { status, loading } = useSelector(state => state.account);
  console.log(status);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(clearStatus());
    dispatch(clearCurrentAccount())
  }, [])

  return (
    <>
      {loading ? (
        <>
          <div className={style.wrapper}>
                <div className={style.container}>
                  <MainNavbar />
                  <div className={style.block__wrapper}>
                    <div className={style.block}>
                      <button className={`${style.forgot__btn} ${style.change__btn}`} onClick={() => navigate('/login')}>
                        <img src={leave} alt="" />
                      </button> 

                      <h3 className={`${style.forgot__title} ${style.complete__title}`}>Change password</h3>

                      <div className={style.email__field}>
                        <p className={style.input__title}>Old password</p>
                        <div className={style.change__input}>
                          <input type={showPassword ? 'text' : 'password'} placeholder='' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, old_password: e.target.value })}/>
                          <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                        </div>
                      </div>

                      <div className={style.email__field}>
                        <p className={style.input__title}>New password</p>
                        <div className={style.change__input}>
                          <input type={showPassword ? 'text' : 'password'} placeholder='' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, new_password: e.target.value })}/>
                          <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                        </div>
                      </div>

                      <div className={style.email__field}>
                        <p className={style.input__title}>New password confirm</p>
                        <div className={style.change__input}>
                          <input type={showPassword ? 'text' : 'password'} placeholder='' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, new_password_confirm: e.target.value })} />
                          <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                        </div>
                      </div>

                      <button className={style.change__button} onClick={() => dispatch(changePassword({ userObj, navigate }))} >Change password</button>
                    </div>
                  </div>
                </div>
              </div>
          <div className={style.loading}>
            <div className={style.spinner}>
              
            </div>
          </div>
        </>
      ) : (
        <>
          {status ? (
            <>
              {status === "error" && (
                <>
                  <div className={style.wrapper}>
                    <div className={style.container}>
                      <MainNavbar />
                      <div className={style.block__wrapper}>
                        <div className={style.block}>
                          <button className={`${style.forgot__btn} ${style.change__btn}`} onClick={() => navigate('/login')}>
                            <img src={leave} alt="" />
                          </button> 

                          <h3 className={`${style.forgot__title} ${style.complete__title}`}>Change password</h3>

                          <div className={style.email__field}>
                            <p className={style.input__title}><span className={style.error}> Incorrect password </span></p>
                            <div className={style.change__input}>
                              <input type={showPassword ? 'text' : 'password'} placeholder={oldPasswordError ? oldPasswordError : ''} className={oldPasswordError ? `${style.email__input} ${style.error__input}` : `${style.email__input} ${style.error__input}`} onChange={(e) => setUserObj({ ...userObj, old_password: e.target.value })} value={userObj.old_password}/>
                              <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                            </div>
                          </div>

                          <div className={style.email__field}>
                            <p className={style.input__title}>{fullPass ? <span className={style.error}> {fullPass} </span> : 'New password'}</p>
                            <div className={style.change__input}>
                              <input type={showPassword ? 'text' : 'password'} placeholder={passwordError ? passwordError : ''} className={passwordError ? `${style.email__input} ${style.error__input}` : `${style.email__input}`} onChange={(e) => setUserObj({ ...userObj, new_password: e.target.value })} value={userObj.new_password}/>
                              <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                            </div>
                          </div>

                          <div className={style.email__field}>
                            <p className={style.input__title}>{passwordMessage ? <span className={style.error}> {passwordMessage} </span> : 'Confirm new password'}</p>
                            <div className={style.change__input}>
                              <input type={showPassword ? 'text' : 'password'} placeholder={passwordConfirmError ? passwordConfirmError : ''} className={passwordConfirmError ? `${style.email__input} ${style.error__input}` : `${style.email__input}`} onChange={(e) => setUserObj({ ...userObj, new_password_confirm: e.target.value })} value={userObj.new_password_confirm} />
                              <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                            </div>
                          </div>

                          <button className={style.change__button} onClick={() => {dispatch(changePassword({ userObj, navigate })); handleCreateAccount(); notSamePassword(); notFullPassword();  } } >Change password</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div className={style.wrapper}>
                <div className={style.container}>
                  <MainNavbar />
                  <div className={style.block__wrapper}>
                    <div className={style.block}>
                      <button className={`${style.forgot__btn} ${style.change__btn}`} onClick={() => navigate('/login')}>
                        <img src={leave} alt="" />
                      </button> 

                      <h3 className={`${style.forgot__title} ${style.complete__title}`}>Change password</h3>

                      <div className={style.email__field}>
                        <p className={style.input__title}>Old password</p>
                        <div className={style.change__input}>
                          <input type={showPassword ? 'text' : 'password'} placeholder='' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, old_password: e.target.value })}/>
                          <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                        </div>
                      </div>

                      <div className={style.email__field}>
                        <p className={style.input__title}>New password</p>
                        <div className={style.change__input}>
                          <input type={showPassword ? 'text' : 'password'} placeholder='' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, new_password: e.target.value })}/>
                          <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                        </div>
                      </div>

                      <div className={style.email__field}>
                        <p className={style.input__title}>New password confirm</p>
                        <div className={style.change__input}>
                          <input type={showPassword ? 'text' : 'password'} placeholder='' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, new_password_confirm: e.target.value })} />
                          <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                        </div>
                      </div>

                      <button className={style.change__button} onClick={() => {dispatch(changePassword({ userObj, navigate })); handleCreateAccount(); notSamePassword(); notFullPassword();  } } >Change password</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className={style.inputs}>
                <input type="password" placeholder='old password' onChange={(e) => setUserObj({ ...userObj, old_password: e.target.value })} />
                <input type="password" placeholder='new password' onChange={(e) => setUserObj({ ...userObj, new_password: e.target.value })} />
                <input type="password" placeholder='new password confirm' onChange={(e) => setUserObj({ ...userObj, new_password_confirm: e.target.value })} />
                <button onClick={() => dispatch(changePassword({ userObj, navigate }))} >Change password</button>
              </div>*/}
            </>
          )}
        </>
      )}
    </>
  )
}

export default ChangePassword