import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './AccountStyles.module.css'
import { clearStatus, clearCurrentAccount } from '../../store/account/AccountSlice'
import { losePasswordComplete } from '../../store/account/AccountActions'

const LosePasswordComplete = () => {
  const [userObj, setUserObj] = useState({
    code: '',
    email: '',
    password: '',
    password_confirm: ''
  })

  const { status, loading } = useSelector(state => state.account);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(clearStatus());
    dispatch(clearCurrentAccount())
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
                <input type="text" placeholder='Enter code' onChange={(e) => setUserObj({ ...userObj, code: e.target.value })} />
                <input type="email" placeholder='Email' onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} />
                <input type="password" placeholder='new password' onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} />
                <input type="password" placeholder='new password confirm' onChange={(e) => setUserObj({ ...userObj, password_confirm: e.target.value })} />
                <button onClick={() => dispatch(losePasswordComplete({ userObj, navigate }))} > Change password</button>
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default LosePasswordComplete