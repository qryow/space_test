import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './styles/AccountStyles.module.css'
import MainNavbar from '../Main/MainNavbar'

import leave from '../../img/leftarrow.svg'
import { activateUser } from '../../store/account/AccountActions'

const Activate = () => {
  const localEmail = localStorage.getItem('account');
  const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, '') : '';
  const [userObj, setUserObj] = useState({
    email: emailWithoutQuotes,
    code: '',
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { status, loading } = useSelector(state => state.account);

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


  return (
    <>
      {loading ? (
        <>
          <div className={style.wrapper}>
            <div className={style.container}>
              <MainNavbar />
                <div className={style.block__wrapper}>
                  <div className={style.block}>
                    <button className={`${style.forgot__btn} ${style.complete}`} onClick={() => navigate('/register')}>
                      <img src={leave} alt="" />
                    </button>

                    <h2 className={style.activate__title}>Please check your email</h2>
                    <p className={style.activate__text}>We’ve sent a code to <span> {emailWithoutQuotes} </span></p>

                    <div className={style.activate__wrapper}>
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

                    <button className={style.activate__btn}>Verify</button>
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
              {status === 'error' && (
                <>
                  <div className={style.wrapper}>
                    <div className={style.container}>
                      <MainNavbar />
                        <div className={style.block__wrapper}>
                          <div className={style.block}>
                            <button className={`${style.forgot__btn} ${style.complete}`} onClick={() => navigate('/register')}>
                              <img src={leave} alt="" />
                            </button>
              
                            <h2 className={style.activate__title}>Please check your email</h2>
                            <p className={style.activate__text}>We’ve sent a code to <span> {emailWithoutQuotes} </span></p>
              
                            <div className={style.activate__wrapper}>
                              {inputRefs.map((inputRef, index) => (
                                <input
                                  key={index}
                                  maxLength={1}
                                  type="text"
                                  placeholder=""
                                  className={`${style.complete__input} ${style.error__input}`}
                                  onChange={(e) => handleInputChange(e, index)}
                                  onKeyUp={(e) => handleKeyUp(e, index)} // Используем событие keyUp
                                  ref={inputRef}
                                />
                              ))}
                            </div>
                            <p className={style.activate__error}>Wrong code, please try again</p>
              
                            <button className={style.activate__btn} onClick={() => dispatch(activateUser({ userObj, navigate }))}>Verify</button>
                          </div> 
                        </div>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className={style.wrapper}>
              <div className={style.container}>
                <MainNavbar />
                  <div className={style.block__wrapper}>
                    <div className={style.block}>
                      <button className={`${style.forgot__btn} ${style.complete}`} onClick={() => navigate('/register')}>
                        <img src={leave} alt="" />
                      </button>
        
                      <h2 className={style.activate__title}>Please check your email</h2>
                      <p className={style.activate__text}>We’ve sent a code to <span> {emailWithoutQuotes} </span></p>
        
                      <div className={style.activate__wrapper}>
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
        
                      <button className={style.activate__btn} onClick={() => {dispatch(activateUser({ userObj, navigate })); }   }>Verify</button>
                    </div> 
                  </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Activate