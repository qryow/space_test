import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './styles/AccountStyles.module.css'
import { clearStatus, clearCurrentAccount } from '../../store/account/AccountSlice'
import { getUsers, losePassword } from '../../store/account/AccountActions'
import MainNavbar from '../Main/MainNavbar'

import leave from '../../img/leftarrow.svg'

const LosePassword = () => {
  const localEmail = localStorage.getItem('account');
  const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, '') : '';
  const [userObj, setUserObj] = useState({
    email: emailWithoutQuotes
  })

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
  
  useEffect(() => {
    dispatch(clearStatus());
    dispatch(clearCurrentAccount())
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
                <div className={style.block}>
                  <button className={style.forgot__btn}>
                    <img src={leave} alt="" />
                  </button>
                  <h3 className={style.forgot__title}>Forgot password ?</h3>
                  <p className={style.forgot__sub}>Please enter the email associated with your account.</p>

                  <div className={style.email__field}>
                    <p className={style.input__title}>Email address</p>
                    <input type="text" placeholder='@' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} value={userObj.email} />
                  </div>

                  <button className={style.for__btn} onClick={() => dispatch(losePassword({ userObj, navigate }))}>Send code</button>
                  <p className={style.block__subtitle}>Remember password? <a onClick={() => navigate('/login')} className={style.link}>Log in</a></p>
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
                        <div className={style.block}>
                          <button className={style.forgot__btn} onClick={() => navigate('/login')}>
                            <img src={leave} alt="" />
                          </button>
                          <h3 className={style.forgot__title}>Forgot password ?</h3>
                          <p className={style.forgot__sub}>Please enter the email associated with your account.</p>

                          <div className={style.email__field}>
                            <p className={style.input__title}>{emailErrorMessage ? <span className={style.error}>{emailErrorMessage}</span> : 'Email address '}</p>
                            <input type="email" placeholder='@' className={emailErrorMessage ? `${style.email__input} ${style.error__input}` : `${style.email__input}`} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} value={userObj.email} />
                          </div>

                          <button className={style.for__btn} onClick={() => dispatch(losePassword({ userObj, navigate }))}>Send code</button>
                          <p className={style.block__subtitle}>Remember password? <a onClick={() => navigate('/login')} className={style.link}>Log in</a></p>
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
                      <button className={style.forgot__btn} onClick={() => navigate('/login')}>
                        <img src={leave} alt="" />
                      </button>
                      <h3 className={style.forgot__title}>Forgot password ?</h3>
                      <p className={style.forgot__sub}>Please enter the email associated with your account.</p>

                      <div className={style.email__field}>
                        <p className={style.input__title}>Email address</p>
                        <input type="email" placeholder='@' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} value={userObj.email} />
                      </div>

                      <button className={style.for__btn} onClick={() => dispatch(losePassword({ userObj, navigate }))}>Send code</button>
                      <p className={style.block__subtitle}>Remember password? <a onClick={() => navigate('/login')} className={style.link}>Log in</a></p>
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

export default LosePassword