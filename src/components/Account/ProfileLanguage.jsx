//import React, { useState, useEffect } from 'react'
//import { useSelector, useDispatch } from 'react-redux'
//import { getLanguages } from '../../store/countries/CountriesActions'
//import style from './styles/CreateProfile.module.css'


//import arrowDown from '../../img/ArrowDown.svg'
//import plus from '../../img/Add_Plus.svg'

//const ProfileLanguage = () => {
//  const { languages } = useSelector(state => state.countries);
//  console.log(languages);

//  const [selectedLanguage, setSelectedLanguage] = useState('');
//  const [filteredLanguages, setFilteredLanguages] = useState(languages);
//  const [languageDropdown, setLanguageDropdown] = useState(true)

//  const handleLanguageClick = (language) => {
//    setSelectedLanguage(language);
//    setLanguageDropdown(true)
//  };
//  const handleInput = (event) => {
//    const inputValue = event.target.value;
//    setSelectedLanguage(inputValue);

//    const filtered = languages.filter((language) =>
//      language.toLowerCase().includes(inputValue.toLowerCase())
//    );
//    setFilteredLanguages(filtered);
//  }

//  const [languageWrappers, setLanguageWrappers] = useState([{ id: 1 }]);

//  const addLanguageWrapper = () => {
//    // Добавление нового блока
//    const newId = Math.max(...languageWrappers.map((wrapper) => wrapper.id), 0) + 1;
//    setLanguageWrappers([...languageWrappers, { id: newId }]);
//  };


//  const dispatch = useDispatch();

//  useEffect(() => {
//    dispatch(getLanguages())
//  }, [])

//  useEffect(() => {
//    setFilteredLanguages(languages);
//  }, [languages]);
//  return (
//    <>
//      {languageWrappers.map((wrapper, index) => (
//        <div key={wrapper.id} className={style.language__wrapper}>
//          <div className={style.language__input}>
//            <h5 className={style.input__title}>Add language</h5>
//            <div>
//              <input placeholder='Search for language' type="text" className={style.drop__input} 
//                value={selectedLanguage}
//                onChange={(e) => { handleInput(e); setLanguageDropdown(false)}} />
//              <img className={languageDropdown ? `${style.arrow__down}` : `${style.arrow__up}`} src={arrowDown} onClick={() => setLanguageDropdown(!languageDropdown)} alt="" />
//            </div>

//            <div className={languageDropdown ? `${style.languages__list}` : `${style.languages__list} ${style.list__unactive}`}>
//              {filteredLanguages.map((language, index) => (
//                <div className={style.one__country} key={index} onClick={() => handleLanguageClick(language)}>
//                  <h5 className={style.country__name}>{language}</h5>
//                </div>
//              ))}
//            </div>

//          </div>

//          <div className={style.language__input}>
//            <h5 className={style.input__title}>Proficiency level</h5>
//            <div>
//              <input placeholder='Search for proficiency level' type="text" className={style.drop__input} />
//              <img className={style.arrow__down} src={arrowDown} alt="" />
//            </div>
//            <div className={style.level__list}>
//              <div className={style.one__level}>

//              </div>
//            </div>
//          </div>

//        </div>
//      ))}

//      <button onClick={addLanguageWrapper} className={style.add__lang__btn}>Add a language <img className={style.plus} src={plus} alt="" /></button>
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

const ProfileLanguage = () => {

  const [languageWrappers, setLanguageWrappers] = useState([{ id: 1 }]);

  const addLanguageWrapper = () => {
    // Добавление нового блока
    const newId = Math.max(...languageWrappers.map((wrapper) => wrapper.id), 0) + 1;
    setLanguageWrappers([...languageWrappers, { id: newId }]);
  };

  return (
    <>
      {languageWrappers.map((wrapper, index) => (
        <div key={wrapper.id}>
          <LanguageInput />
        </div>
      ))}

      <button onClick={addLanguageWrapper} className={style.add__lang__btn}>Add a language <img className={style.plus} src={plus} alt="" /></button>
    </>
  )
}

export default ProfileLanguage