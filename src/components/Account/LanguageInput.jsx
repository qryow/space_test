import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLanguages } from '../../store/countries/CountriesActions'
import style from './styles/CreateProfile.module.css'

import arrowDown from '../../img/ArrowDown.svg'

const LanguageInput = () => {
  const { languages } = useSelector(state => state.countries);
  console.log(languages);
  
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [filteredLanguages, setFilteredLanguages] = useState(languages);
  const [languageDropdown, setLanguageDropdown] = useState(true)

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdown(true)
  };
  const handleInput = (event) => {
    const inputValue = event.target.value;
    setSelectedLanguage(inputValue);

    const filtered = languages.filter((language) =>
      language.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredLanguages(filtered);
  }

  const [selectedLevel, setSelectedLevel] = useState("");
  const [levelDropdown, setLevelDropdown] = useState(true)
  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    setLevelDropdown(true);
  };


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages())
  }, [])

  useEffect(() => {
    setFilteredLanguages(languages);
  }, [languages]);

  return (
    <>
      <div className={style.language__wrapper}>
        <div className={style.language__input}>
          <h5 className={style.input__title}>Add language</h5>
          <div>
            <input placeholder='Search for language' type="text" className={style.drop__input} 
              value={selectedLanguage}
              onChange={(e) => { handleInput(e); setLanguageDropdown(false)}} />
            <img className={languageDropdown ? `${style.arrow__down}` : `${style.arrow__up}`} src={arrowDown} onClick={() => setLanguageDropdown(!languageDropdown)} alt="" />
          </div>

          <div className={languageDropdown ? `${style.languages__list}` : `${style.languages__list} ${style.list__unactive}`}>
            {filteredLanguages.map((language, index) => (
              <div className={style.one__country} key={index} onClick={() => handleLanguageClick(language)}>
                <h5 className={style.country__name}>{language}</h5>
              </div>
            ))}
          </div>

        </div>

        <div className={style.language__input}>
          <h5 className={style.input__title}>Proficiency level</h5>
          <div>
            <input placeholder='Search for proficiency level' value={selectedLevel} type="text" className={style.drop__input} />
            <img className={levelDropdown ? `${style.arrow__down}` : `${style.arrow__up}`} src={arrowDown} alt=""  onClick={() => setLevelDropdown(!levelDropdown)}/>
          </div>
          <div className={levelDropdown ? `${style.level__list}` : `${style.level__list} ${style.list__unactive}`}>
            <div className={style.one__level} onClick={() => handleLevelClick("Beginner")}>
              <h4 className={style.level__title}>Beginner</h4>
              <p className={style.level__text}>Basic language skills. You can understand and use fundamental phrases and expressions.</p>
            </div>

            <div className={style.one__level} onClick={() => handleLevelClick("Elementary")}>
              <h4 className={style.level__title}>Elementary</h4>
              <p className={style.level__text}>You can communicate on simple topics and understand straightforward conversations.</p>
            </div>

            <div className={style.one__level} onClick={() => handleLevelClick("Intermediate")}>
              <h4 className={style.level__title}>Intermediate</h4>
              <p className={style.level__text}>You have basic communication skills. You can talk about everyday topics and read simple texts.</p>
            </div>

            <div className={style.one__level} onClick={() => handleLevelClick("Upper Intermediate")}>
              <h4 className={style.level__title}>Upper Intermediate</h4>
              <p className={style.level__text}>You can engage in more complex conversations and understand moderately difficult texts.</p>
            </div>

            <div className={style.one__level} onClick={() => handleLevelClick("Advanced")}>
              <h4 className={style.level__title}>Advanced</h4>
              <p className={style.level__text}>Your English level allows you to communicate freely and understand complex texts.</p>
            </div>

            <div className={style.one__level} onClick={() => handleLevelClick("Proficent")}>
              <h4 className={style.level__title}>Proficient</h4>
              <p className={style.level__text}>You have a high level of English proficiency. You can communicate on professional topics.</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default LanguageInput