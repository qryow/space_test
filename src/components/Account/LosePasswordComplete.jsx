import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './styles/AccountStyles.module.css'
import { clearStatus, clearCurrentAccount } from '../../store/account/AccountSlice'
import { losePasswordComplete, getUsers } from '../../store/account/AccountActions'
import MainNavbar from '../Main/MainNavbar'

import leave from '../../img/leftarrow.svg'
import open from '../../img/hide-pass.svg'
import hide from '../../img/pass_open.svg'

const LosePasswordComplete = () => {
  const localEmail = localStorage.getItem('account');
  const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, '') : '';
  const [userObj, setUserObj] = useState({
    code: '',
    email: emailWithoutQuotes,
    password: '',
    password_confirm: ''
  })
  console.log(userObj);

  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()]; 

  const updateCode = () => {
    const code = inputRefs.map((inputRef) => inputRef.current.value).join('');
    console.log(code);
    setUserObj({ ...userObj, code });
  };

  const handleInputChange = (e, index) => {
    let value = e.target.value;

    // Преобразуем текст в верхний регистр
    value = value.toUpperCase();

    if (value.length === 1) {
      // Если введена одна буква, переключаем фокус на следующий инпут, если он существует
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    } else if (value.length === 0) {
      // Если инпут пустой, переключаем фокус на предыдущий инпут, если он существует
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    } else if (value.length > 1) {
      // Если введено более одной буквы, оставляем только первую
      value = value.charAt(0);
    }

    // Устанавливаем преобразованный текст в инпут
    inputRefs[index].current.value = value;

    updateCode();
  };

  const handleKeyUp = (e, index) => {
    // Обработка удаления символа (Backspace)
    if (e.key === 'Backspace' && index > 0 && inputRefs[index].current.value === '') {
      // Если нажата клавиша Backspace, индекс больше 0 и инпут пустой, переключаем фокус на предыдущий инпут
      inputRefs[index - 1].current.focus();
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { status, loading, users } = useSelector(state => state.account);
  console.log(users);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const sameEmailError = () => {
    const userWithEmail = users.find(user => user.email === userObj.email);
    if (userWithEmail) {
      return '';
    }
    return 'There is no user with this email';
  }
  const emailErrorMessage = sameEmailError();
  const [codeError, setCodeError] = useState('')
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmError, setPasswordConfirmError] = useState('');
  const [emailError, setEmailError] = useState('');
  const handleCreateAccount = () => {
    if (!userObj.email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
  
    if (!userObj.code) {
      setCodeError('Code is required');
    } else {
      setCodeError('');
    }
  
    if (!userObj.password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  
    if (!userObj.password_confirm) {
      setPasswordConfirmError('Confirmation is required');
    } else {
      setPasswordConfirmError('');
    }
  };

  const notSamePassword = () => {
    if (userObj.password !== userObj.password_confirm) {
      return 'Passwords do not match'
    }
    return ''
  }
  const passwordMessage = notSamePassword()

  const notFullPassword = () => {
    if (userObj.password.length < 8 || userObj.password_confirm.length < 8) {
      return 'Need to be more than 8'
    }
    return ''
  }
  const fullPass = notFullPassword()

  useEffect(() => {
    dispatch(clearStatus());
    dispatch(clearCurrentAccount());
    dispatch(getUsers())
  }, [])

  return (
    <>
      {loading ? (
        <>
          <div className={style.wrapper}>
                <div className={style.container}>
                  <MainNavbar />
                  <div className={style.block__wrapper}>
                    <div className={`${style.block} ${style.complete__block}`}>
                      <button className={`${style.forgot__btn} ${style.complete}`} onClick={() => navigate('/lose-password')}>
                        <img src={leave} alt="" />
                      </button>

                      <h3 className={`${style.forgot__title} ${style.complete__title}`}>Reset password</h3>
                      <div className={style.complete__field}>
                        <p className={style.input__title}>Enter code in gmail</p>
                        <div className={style.complete__wrapper}>
                        {inputRefs.map((inputRef, index) => (
                          <input
                            key={index}
                            maxLength={1}
                            type="text"
                            placeholder=""
                            className={style.complete__input}
                            onChange={(e) => handleInputChange(e, index)}
                            onKeyUp={(e) => handleKeyUp(e, index)} // Используем событие keyUp
                            ref={inputRef}
                          />
                          ))}
                        </div>
                      </div>

                      <div className={style.email__field}>
                        <p className={style.input__title}>Email address</p>
                        <input type="email" placeholder='@' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })}/>
                      </div>

                      <div className={`${style.pass__fields}  ${style.margin__bottom}`}>
                        <div className={style.pass__field}>
                          <p className={style.input__title}>New Password</p>
                          <div className={style.input__wrapper}>
                            <input minLength={8} type={showPassword ? 'text' : 'password'} className={style.pass__input} onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} value={userObj.password} />
                            <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                          </div>
                        </div>

                        <div className={`${style.pass__field}`}>
                          <p className={style.input__title}>Confirm new password</p>
                          <div className={style.input__wrapper}>
                            <input minLength={8} type={showPassword ? 'text' : 'password'} className={style.pass__input} onChange={(e) => setUserObj({ ...userObj, password_confirm: e.target.value })} value={userObj.password_confirm} />
                            <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                          </div>
                        </div>
                      </div>

                      <button className={style.reg__btn} onClick={() => {dispatch(losePasswordComplete({ userObj, navigate }));} }>ChangePassword</button>

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
          { status ? (
            <>
              { status === 'error' && (
                <>
                  <div className={style.wrapper}>
                    <div className={style.container}>
                      <MainNavbar />
                      <div className={style.block__wrapper}>
                        <div className={`${style.block} ${style.complete__block}`}>
                          <button className={`${style.forgot__btn} ${style.complete}`} onClick={() => navigate('/lose-password')}>
                            <img src={leave} alt="" />
                          </button>

                          <h3 className={`${style.forgot__title} ${style.complete__title}`}>Reset password</h3>
                          <div className={style.complete__field}>
                            <p className={style.input__title}>Enter code in gmail</p>
                            <div className={style.complete__wrapper}>
                            {inputRefs.map((inputRef, index) => (
                              <input
                                key={index}
                                maxLength={1}
                                type="text"
                                placeholder=''
                                className={codeError ? `${style.complete__input} ${style.error__input}` : `${style.complete__input} ${style.error__input}`}
                                onChange={(e) => handleInputChange(e, index)}
                                onKeyUp={(e) => handleKeyUp(e, index)} // Используем событие keyUp
                                ref={inputRef}
                              />
                              ))}
                            </div>
                          </div>

                          <div className={style.email__field}>
                            <p className={style.input__title}>{emailErrorMessage ? <span className={style.error}>{emailErrorMessage}</span> : 'Email address '}</p>
                            <input type="email" placeholder={emailError ? emailError : '@'} className={emailError || emailErrorMessage ? `${style.email__input} ${style.error__input}` : `${style.email__input}`} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} value={userObj.email}/>
                          </div>

                          <div className={`${style.pass__fields}  ${style.margin__bottom}`}>
                            <div className={style.pass__field}>
                              <p className={style.input__title}>{fullPass ? <span className={style.error}> {fullPass} </span> : 'New password'}</p>
                              <div className={style.input__wrapper}>
                                <input minLength={8} type={showPassword ? 'text' : 'password'} placeholder={passwordError ? passwordError : ''} className={passwordError || passwordMessage || fullPass ? ` ${style.pass__input} ${style.error__input}` : `${style.pass__input}`} onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} value={userObj.password} />
                                <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                              </div>
                            </div>

                            <div className={`${style.pass__field}`}>
                              <p className={style.input__title}>{passwordMessage ? <span className={style.error}> {passwordMessage} </span> : 'Confirm new password'}</p>
                              <div className={style.input__wrapper}>
                                <input minLength={8} type={showPassword ? 'text' : 'password'} placeholder={passwordConfirmError ? passwordConfirmError : ''} className={passwordConfirmError || passwordMessage || fullPass ? `${style.error__input} ${style.pass__input}` : `${style.pass__input}`} onChange={(e) => setUserObj({ ...userObj, password_confirm: e.target.value })} value={userObj.password_confirm} />
                                <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                              </div>
                            </div>
                          </div>

                          <button className={style.reg__btn} onClick={() => {dispatch(losePasswordComplete({ userObj, navigate })); handleCreateAccount(); sameEmailError(); notFullPassword(); notSamePassword()} }>ChangePassword</button>

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
                    <div className={`${style.block} ${style.complete__block}`}>
                      <button className={`${style.forgot__btn} ${style.complete}`} onClick={() => navigate('/lose-password')}>
                        <img src={leave} alt="" />
                      </button>

                      <h3 className={`${style.forgot__title} ${style.complete__title}`}>Reset password</h3>
                      <div className={style.complete__field}>
                        <p className={style.input__title}>Enter code in gmail</p>
                        <div className={style.complete__wrapper}>
                        {inputRefs.map((inputRef, index) => (
                          <input
                            key={index}
                            maxLength={1}
                            type="text"
                            placeholder=""
                            className={style.complete__input}
                            onChange={(e) => handleInputChange(e, index)}
                            onKeyUp={(e) => handleKeyUp(e, index)} // Используем событие keyUp
                            ref={inputRef}
                          />
                          ))}
                        </div>
                      </div>

                      <div className={style.email__field}>
                        <p className={style.input__title}>Email address</p>
                        <input type="email" placeholder='@' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} value={userObj.email}/>
                      </div>

                      <div className={`${style.pass__fields}  ${style.margin__bottom}`}>
                        <div className={style.pass__field}>
                          <p className={style.input__title}>New Password</p>
                          <div className={style.input__wrapper}>
                            <input minLength={8} type={showPassword ? 'text' : 'password'} className={style.pass__input} onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} value={userObj.password} />
                            <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                          </div>
                        </div>

                        <div className={`${style.pass__field}`}>
                          <p className={style.input__title}>Confirm new password</p>
                          <div className={style.input__wrapper}>
                            <input minLength={8} type={showPassword ? 'text' : 'password'} className={style.pass__input} onChange={(e) => setUserObj({ ...userObj, password_confirm: e.target.value })} value={userObj.password_confirm} />
                            <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                          </div>
                        </div>
                      </div>

                      <button className={style.reg__btn} onClick={() => {dispatch(losePasswordComplete({ userObj, navigate })); handleCreateAccount(); sameEmailError(); notFullPassword(); notSamePassword()} }>Change Password</button>

                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default LosePasswordComplete