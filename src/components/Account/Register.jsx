import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './AccountStyles.module.css'
import { clearStatus } from '../../store/account/AccountSlice'
import { registerUser } from '../../store/account/AccountActions'

const Register = () => {
  const [userObj, setUserObj] = useState({
    email: '',
    username: '',
    password: '',
    password_confirm: ''
  })

  const { status, loading } = useSelector(state => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(clearStatus())
  })

  return (
    <>
      {loading ? (
        <>
          <h3>loading .....</h3>
        </>
      ) : (
        <>
          { status ? (
            <>
              { status === 'error' && (
                <>
                  <h3>error...</h3>
                </>
              )}
            </>
          ) : (
            <>
              <div className={style.inputs}>
                <input type="email" placeholder='Email' onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} />
                <input type="text" placeholder='username' onChange={(e) => setUserObj({ ...userObj, username: e.target.value })} />
                <input type="password" placeholder='password' onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} />
                <input type="password" placeholder='password confirm' onChange={(e) => setUserObj({ ...userObj, password_confirm: e.target.value })} />
                <button onClick={() => dispatch(registerUser({ userObj, navigate }))} >Register</button>
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default Register