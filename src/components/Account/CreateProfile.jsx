import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearStatus } from '../../store/account/AccountSlice';
import { getUsers } from '../../store/account/AccountActions';
import { getCountries, getLanguages } from '../../store/countries/CountriesActions';
import style from './styles/CreateProfile.module.css'
import MainNavbar from '../Main/MainNavbar';


import arrowDown from '../../img/ArrowDown.svg'
import ProfileLanguage from './ProfileLanguage';
import Preferences from './Preferences';

const CreateProfile = () => {
  const { status, loading } = useSelector(state => state.account);
  const { countries } = useSelector(state => state.countries);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [countryDropdown, setCountryDropdown] = useState(true)
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setCountryDropdown(true)
  };
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSelectedCountry(inputValue);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCountries(filtered);
  }


  const dispatch = useDispatch();
  const navigate = useNavigate()
    
  useEffect(() => {
    dispatch(clearStatus());
    dispatch(getUsers());
    dispatch(getCountries());
  }, [])

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);
  
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
                        <input placeholder='Enter your username' className={style.username__input} type="text" />

                        <div className={style.name__wrapper}>
                          <div className={style.name__inputs}>
                            <h5 className={style.input__title}>Your first name</h5>
                            <input placeholder='Enter your first name' type="text" className={style.name__input} />
                          </div>

                          <div className={style.name__inputs}>
                            <h5 className={style.input__title}>Your last name</h5>
                            <input placeholder='Enter your last name' type="text" className={style.name__input} />
                          </div>
                        </div>
                        
                        <h5 className={style.input__title}>Your professional role</h5>
                        <input placeholder='Scientist | Engineer | Technologist' className={style.username__input} type="text" />
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
                            <input placeholder='Enter your area' className={style.drop__input} type="text" />
                          </div>

                        </div>
                      </div>

                      <ProfileLanguage />

                      <h3 className={style.create_profile__title}>Add Education History</h3>

                      <div className={style.education__wrapper}>
                        <h5 className={style.input__title}>School</h5>
                        <input type="text" placeholder='Ex: Northwestern University' className={style.just__input} />

                        <h5 className={style.input__title}>Degree (Optional)</h5>
                        <input type="text" placeholder='Ex: Bachelors' className={style.just__input} />
                        
                        <h5 className={style.input__title}>Field of Study</h5>
                        <input type="text" placeholder='Ex: Computer Astronomy' className={style.just__input} />

                        <h5 className={style.input__title}>Description</h5>
                        <textarea placeholder='Describe your studies, awards, etc.' className={style.desc__textarea}></textarea>
                      </div>

                      <button className={style.continue}>Continue</button>

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

