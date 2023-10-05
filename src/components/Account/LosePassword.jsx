import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './AccountStyles.module.css'
import { clearStatus, clearCurrentAccount } from '../../store/account/AccountSlice'
import { losePassword } from '../../store/account/AccountActions'

const LosePassword = () => {
  const [userObj, setUserObj] = useState({
    email: ''
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
                <input type="email" placeholder='Email' onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} />
                <button onClick={() => dispatch(losePassword({ userObj, navigate }))} > Get new password </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  )
}

export default LosePassword