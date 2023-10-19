import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearStatus } from '../../store/account/AccountSlice';
import { addLang, getUsers, patchUser } from '../../store/account/AccountActions';
import { getCountries, getLanguages } from '../../store/countries/CountriesActions';
import style from './styles/CreateProfile.module.css'
import MainNavbar from '../Main/MainNavbar';


import arrowDown from '../../img/ArrowDown.svg'
import ProfileLanguage from './ProfileLanguage';
import Preferences from './Preferences';

const CreateProfile = () => {
  const [userObj, setUserObj] = useState({
    username: '',
    first_name: '',
    last_name: '',
    professions: '',
    country: '',
    arial: '',
  })


  const localEmail = localStorage.getItem('account');
  const emailWithoutQuotes = localEmail ? localEmail.replace(/"/g, '') : '';


  const { status, loading, users } = useSelector(state => state.account);


  const { countries } = useSelector(state => state.countries);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [countryDropdown, setCountryDropdown] = useState(true)
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setCountryDropdown(true);
    setUserObj({ ...userObj, country });
  };
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSelectedCountry(inputValue);

    setUserObj({ ...userObj, country: inputValue });

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCountries(filtered);
  }

  const [updatedLangObj, setUpdatedLangObj] = useState(null);
  console.log(updatedLangObj);

  const handleLangObjUpdate = (updatedLangObj) => {
    setUpdatedLangObj(updatedLangObj);
  };

  useEffect(() => {
  }, [updatedLangObj]);


  const dispatch = useDispatch();
  const navigate = useNavigate()
    
  useEffect(() => {
    dispatch(clearStatus());
    dispatch(getUsers());
    dispatch(getCountries());
    dispatch(patchUser());
    dispatch(addLang())
  }, [])

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  const [matchingUserId, setMatchingUserId] = useState(null);

  useEffect(() => {
    if (users.length > 0) {
      const userWithMatchingEmail = users.find(user => user.email === emailWithoutQuotes);
      if (userWithMatchingEmail) {
        setMatchingUserId(userWithMatchingEmail.id);
      }
    }
  }, [users]);
  
  return (
    <>
      {loading ? (
        <>

        </>
      ) : (
        <>
          {status ? (
            <>
              {status === 'error' && (
                <>

                </>
              )}
            </>
          ) : (
            <>
              <div className={style.wrapper}>
                <div className={style.container}>
                  <MainNavbar />

                  <div className={style.profile__wrapper}>
                    <div className={style.profile__block}>
                      <h3 className={style.create_profile__title}>Create your profile</h3>
                      
                      <div className={style.first__inputs}>
                        <h5 className={style.input__title}>Your username</h5>
                        <input placeholder='Enter your username' className={style.username__input} type="text" onChange={(e) => setUserObj({ ...userObj, username: e.target.value })} />

                        <div className={style.name__wrapper}>
                          <div className={style.name__inputs}>
                            <h5 className={style.input__title}>Your first name</h5>
                            <input placeholder='Enter your first name' type="text" className={style.name__input} onChange={(e) => setUserObj({ ...userObj, first_name: e.target.value })} />
                          </div>

                          <div className={style.name__inputs}>
                            <h5 className={style.input__title}>Your last name</h5>
                            <input placeholder='Enter your last name' type="text" className={style.name__input} onChange={(e) => setUserObj({ ...userObj, last_name: e.target.value })} />
                          </div>
                        </div>
                        
                        <h5 className={style.input__title}>Your professional role</h5>
                        <input placeholder='Scientist | Engineer | Technologist' className={style.username__input} type="text" onChange={(e) => setUserObj({ ...userObj, professions: e.target.value })} />
                      </div>

                      
                      <div className={style.country__wrapper}>
                        <div className={style.input__drop}>
                          <h5 className={style.input__title}>Country</h5>
                          <div>
                            <input 
                              placeholder='Choose country' 
                              className={style.drop__input} 
                              type="text"
                              value={selectedCountry}
                              onChange={(e) => {
                                handleInputChange(e);
                                setCountryDropdown(false);
                              }} />
                            <img className={countryDropdown ? `${style.arrow__down}` : `${style.arrow__up}`} src={arrowDown} alt=""  onClick={() => setCountryDropdown(!countryDropdown)} />
                          </div>

                          <div className={countryDropdown ? `${style.countries__list}` : `${style.countries__list} ${style.list__unactive}`}>
                            {filteredCountries.map((country, index) => (
                              <div className={style.one__country} key={index} onClick={() => handleCountryClick(country.name.common)}>
                                <img className={style.flag__icon} src={country.flags.svg} alt="" />
                                <h5 className={style.country__name}>{country.name.common}</h5>
                              </div>
                            ))}
                          </div>

                        </div>
                        <div className={style.input__drop}>
                          <h5 className={style.input__title}>Area</h5>
                          <div>
                            <input placeholder='Enter your area' className={style.drop__input} type="text" onChange={(e) => setUserObj({ ...userObj, arial: e.target.value })} />
                          </div>

                        </div>
                      </div>

                      <ProfileLanguage onLangObjUpdate={handleLangObjUpdate} />

                      <button className={style.continue} onClick={() => {dispatch(addLang({ updatedLangObj }))}}>Continue</button>
                      {/*dispatch(patchUser({ userObj, navigate, id: matchingUserId }));*/}
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

export default CreateProfile

