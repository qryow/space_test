//import React, { useState, useEffect } from 'react'
//import { useSelector, useDispatch } from 'react-redux'
//import { getLanguages } from '../../store/countries/CountriesActions'
//import style from './styles/CreateProfile.module.css'


//import plus from '../../img/Add_Plus.svg'
//import LanguageInput from './LanguageInput'
//import { addLang } from '../../store/account/AccountActions'

//const ProfileLanguage = ({ onLangObjUpdate }) => {

//  const [languageWrappers, setLanguageWrappers] = useState([{ id: 1 }]);

//  const addLanguageWrapper = () => {
//    const newId = Math.max(...languageWrappers.map((wrapper) => wrapper.id), 0) + 1;
//    setLanguageWrappers([...languageWrappers, { id: newId }]);
//  };

//  const sendUpdatedLangObjToParent = (updatedLangObj) => {
//    onLangObjUpdate(updatedLangObj);
//  };

//  const dispatch = useDispatch()

//  useEffect(() => {
//    dispatch(addLang())
//  }, [])

//  return (
//    <>
//      {languageWrappers.map((wrapper, index) => (
//        <div key={wrapper.id}>
//          <LanguageInput onLangObjUpdate={sendUpdatedLangObjToParent} />
//        </div>
//      ))}

//      <button onClick={() => {addLanguageWrapper(); }} className={style.add__lang__btn}>Add a language <img className={style.plus} src={plus} alt="" /></button>
//    </>
//  )
//}

//export default ProfileLanguage




import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLanguages } from '../../store/countries/CountriesActions'
import style from './styles/CreateProfile.module.css'


import plus from '../../img/Add_Plus.svg'
import LanguageInput from './LanguageInput'
import { addLang } from '../../store/account/AccountActions'

const ProfileLanguage = ({ onLangObjUpdate }) => {

  const [updatedLangObjs, setUpdatedLangObjs] = useState([]);
  console.log(updatedLangObjs);

  const addLanguageWrapper = () => {
    setUpdatedLangObjs([...updatedLangObjs, { language: '', languages_level: '' }]);
  };

  const updateLangObj = (index, langObj) => {
    const newLangObjs = [...updatedLangObjs];
    newLangObjs[index] = langObj;
    setUpdatedLangObjs(newLangObjs);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addLang())
  }, [])

  useEffect(() => {
    // Вызов функции onLangObjUpdate с массивом updatedLangObjs внутри компонента
    onLangObjUpdate(updatedLangObjs);
  }, [updatedLangObjs, onLangObjUpdate]);

  return (
    <>
      {updatedLangObjs.map((wrapper, index) => (
        <div key={index}>
          <LanguageInput onLangObjUpdate={(langObj) => updateLangObj(index, langObj)} />
        </div>
      ))}

      <button onClick={() => {addLanguageWrapper(); }} className={style.add__lang__btn}>Add a language <img className={style.plus} src={plus} alt="" /></button>
    </>
  )
}

export default ProfileLanguage