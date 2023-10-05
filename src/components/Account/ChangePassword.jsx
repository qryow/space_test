import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './AccountStyles.module.css'
import { clearStatus, clearCurrentAccount } from '../../store/account/AccountSlice'
import { changePassword } from '../../store/account/AccountActions'

const ChangePassword = () => {
  const [userObj, setUserObj] = useState({
    old_password: '',
    new_password: '',
    new_password_confirm: ''
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
                <input type="password" placeholder='old password' onChange={(e) => setUserObj({ ...userObj, old_password: e.target.value })} />
                <input type="password" placeholder='new password' onChange={(e) => setUserObj({ ...userObj, new_password: e.target.value })} />
                <input type="password" placeholder='new password confirm' onChange={(e) => setUserObj({ ...userObj, new_password_confirm: e.target.value })} />
                <button onClick={() => dispatch(changePassword({ userObj, navigate }))} >Change password</button>
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default ChangePassword