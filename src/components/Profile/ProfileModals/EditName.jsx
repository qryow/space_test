import React, { useState, useEffect } from "react";
import style from "./styles/ProfileModals.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../../store/countries/CountriesActions";
import { editProfile } from "../../../store/profile/ProfileActions";

import arrowDown from "../../../img/ArrowDown.svg";

const EditName = ({ activeName, setActiveName, user }) => {
  const [oneUser, setOneUser] = useState(user);
  const { countries } = useSelector((state) => state.countries);
  const [selectedCountry, setSelectedCountry] = useState(oneUser.country);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [countryDropdown, setCountryDropdown] = useState(true);

  const profileId = oneUser.id;
  
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setCountryDropdown(true);

    setOneUser({ ...oneUser, country });
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSelectedCountry(inputValue);
  
    setOneUser({ ...oneUser, country: inputValue });
  
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredCountries(filtered);
  };
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  return (
    <div
      className={
        activeName
          ? `${style.editName} ${style.activeName}`
          : `${style.editName}`
      }
      onClick={() => setActiveName(false)}
    >
      <div
        className={
          activeName
            ? `${style.editName__content} ${style.activeName}`
            : `${style.editName__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.name__block}>
          <h3>Username</h3>
          <input
            className={style.name__input}
            value={oneUser.username}
            type="text"
            placeholder="@username"
            onChange={(e) =>
              setOneUser({ ...oneUser, username: e.target.value })
            }
          />
        </div>
        <div className={style.name__block}>
          <h3>Name</h3>
          <input
            className={style.name__input}
            value={oneUser.first_name}
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setOneUser({ ...oneUser, first_name: e.target.value })
            }
          />
        </div>
        <div className={style.name__block}>
          <h3>Professional role</h3>
          <input
            className={style.name__input}
            value={oneUser.professions}
            type="text"
            placeholder="Professional role"
            onChange={(e) =>
              setOneUser({ ...oneUser, professions: e.target.value })
            }
          />
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
                                  }}
                                  onClick={() => setCountryDropdown(!countryDropdown)}
                                  />
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
          <div className={style.name__block2_block}>
            <h3>Area</h3>
            <input
              className={style.name__input}
              value={oneUser.arial}
              type="text"
              placeholder="Enter your area"
              onChange={(e) =>
                setOneUser({ ...oneUser, arial: e.target.value })
              }
            />
          </div>
        </div>
        <div className={style.name__buttons}>
          <button
            className={style.name__button1}
            onClick={() => setActiveName(false)}
          >
            Cancel
          </button>
          <button
            className={style.name__button2}
            onClick={() => {
              setActiveName(false);
              dispatch(editProfile({ editedObj: oneUser, id: profileId }));
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditName;
