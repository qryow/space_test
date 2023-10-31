import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './styles/AccountStyles.module.css'
import { clearStatus, clearCurrentAccount } from '../../store/account/AccountSlice'
import { getUsers, loginUser } from '../../store/account/AccountActions'
import MainNavbar from '../Main/MainNavbar'

import open from '../../img/hide-pass.svg'
import hide from '../../img/pass_open.svg'

const Login = () => {
  const localEmail = localStorage.getItem('account');
  const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, '') : '';
  const [userObj, setUserObj] = useState({
    email: emailWithoutQuotes,
    password: '',
  })
  
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleCreateAccount = () => {
    if (!userObj.email) {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
    if (!userObj.password) {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const { users, status, loading } = useSelector(state => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(clearStatus());
    dispatch(clearCurrentAccount());
    dispatch(getUsers())
  }, [])


  const [matchingUser, setMatchingUser] = useState(null);
  console.log(matchingUser);

  useEffect(() => {
    if (users.length > 0) {
      const userWithMatchingEmail = users.find(user => user.email === emailWithoutQuotes);
      if (userWithMatchingEmail) {
        setMatchingUser(userWithMatchingEmail);
      }
    }
  }, [users]);

  return (
    <>
      {loading ? (
        <>
          <div className={style.wrapper}>
                <div className={style.container}>
                  <MainNavbar />
                  <div className={style.block__wrapper}>
                    <div className={style.login__block}>
                      <h2 className={style.block__title}>Login</h2>
                      <p className={style.block__subtitle}>Don't have an ccount? <a onClick={() => navigate('/register')} className={style.link}>Sign up</a></p>

                      <div className={style.email__field}>
                        <p className={style.input__title}>Email address</p>
                        <input type="text" placeholder='@' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} value={userObj.email} />
                      </div>

                      <div className={style.login__pass}>
                        <p className={style.input__title}>Password</p>
                        <div className={style.input__wrapper}>
                          <input type={showPassword ? 'text' : 'password'} className={style.log__pass} onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} value={userObj.password} />
                          <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : hide} alt="" />
                        </div>
                      </div>
                      <div className={style.for}>
                        <a className={style.forgot} href="">Forgot your password ?</a>
                      </div>

                      <button className={style.reg__btn} onClick={() => {dispatch(loginUser({ userObj, navigate }));}}>Login</button>
                      <p className={style.block__subtitle}>Don't have an ccount? <a onClick={() => navigate('/register')} className={style.link}>Sign up</a></p>
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
                        <div className={style.login__block}>
                          <h2 className={style.block__title}>Login</h2>
                          <p className={style.block__subtitle}>Don't have an ccount? <a onClick={() => navigate('/register')} className={style.link}>Sign up</a></p>

                          <div className={style.email__field}>
                            <p className={style.input__title}>Email address</p>
                            <input type="email" placeholder={emailError ? emailError : '@'} className={emailError ? `${style.email__input} ${style.error__input}` : `${style.email__input}`} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} value={userObj.email} />
                          </div>

                          <p className={style.error__login}>Incorrect password or email.</p>

                          <div className={style.login__pass}>
                            <p className={style.input__title}>Password</p>
                            <div className={style.input__wrapper}>
                              <input type={showPassword ? 'text' : 'password'} placeholder={passwordError ? passwordError : ''} className={passwordError ? `${style.log__pass} ${style.error__log}` : `${style.log__pass}`} onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} value={userObj.password} />
                              <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                            </div>
                          </div>
                          <div className={style.for}>
                            <a className={style.forgot} onClick={() => navigate('/lose-password')} href="">Forgot your password ?</a>
                          </div>

                          <button className={style.reg__btn} onClick={() => {dispatch(loginUser({ userObj, navigate })); handleCreateAccount(); }}>Login</button>
                          <p className={style.block__subtitle}>Don't have an ccount? <a onClick={() => navigate('/register')} className={style.link}>Sign up</a></p>
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
                    <div className={style.login__block}>
                      <h2 className={style.block__title}>Login</h2>
                      <p className={style.block__subtitle}>Don't have an ccount? <a onClick={() => navigate('/register')} className={style.link}>Sign up</a></p>

                      <div className={style.email__field}>
                        <p className={style.input__title}>Email address</p>
                        <input type="email" placeholder='@' className={style.email__input} onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} value={userObj.email} />
                      </div>

                      <div className={style.login__pass}>
                        <p className={style.input__title}>Password</p>
                        <div className={style.input__wrapper}>
                          <input type={showPassword ? 'text' : 'password'} className={style.log__pass} onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} value={userObj.password} />
                          <img onClick={togglePasswordVisibility} className={style.hide} src={showPassword ? hide : open} alt="" />
                        </div>
                      </div>
                      <div className={style.for}>
                        <a className={style.forgot} onClick={() => navigate('/lose-password')} href="">Forgot your password ?</a>
                      </div>

                      <button className={style.reg__btn} onClick={() => {dispatch(loginUser({ userObj })); handleCreateAccount(); matchingUser.is_profile_complete ? navigate("/create-profile") : navigate("/create-profile")  }}>Login</button>
                      <p className={style.block__subtitle}>Don't have an ccount? <a onClick={() => navigate('/register')} className={style.link}>Sign up</a></p>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className={style.inputs}>
                <input type="email" placeholder='Email' onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} />
                <input type="password" placeholder='password' onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} />
                <button onClick={() => dispatch(loginUser({ userObj, navigate }))} >Login</button>
              </div>*/}
            </>
          )}
        </>
      )}
    </>
  )
}
export default Login