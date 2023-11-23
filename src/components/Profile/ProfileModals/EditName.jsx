import React, { useState, useEffect } from "react";
import style from "./styles/ProfileModals.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../../store/countries/CountriesActions";
import { editProfile, getProfile } from "../../../store/profile/ProfileActions";
import arrowDown from "../../../img/ArrowDown.svg";

const EditName = ({ activeName, setActiveName }) => {
  const { profile, countries } = useSelector((state) => ({
    profile: state.profile.profile,
    countries: state.countries.countries,
  }));

  const [username, setUsername] = useState(profile.username);
  const [firstName, setFirstName] = useState(profile.first_name);
  const [professions, setProfessions] = useState(profile.professions);
  const [selectedCountry, setSelectedCountry] = useState(profile.country);
  const [last, setLast] = useState(profile.last_name);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countryDropdown, setCountryDropdown] = useState(true);
  const [area, setArea] = useState(profile.arial);

  const profileId = profile.id;
  const dispatch = useDispatch();

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setCountryDropdown(true);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSelectedCountry(inputValue);

    const filtered = countries
      ? countries.filter((country) =>
          country.name.common.toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];
    setFilteredCountries(filtered);
  };

  const handleSave = () => {
    const editedProfile = {
      id: profileId,
      username,
      first_name: firstName,
      professions,
      country: selectedCountry,
      arial: area,
      last_name: last,
    };

    dispatch(editProfile({ editedObj: editedProfile, id: profileId }));
  };

  useEffect(() => {
    setUsername(profile.username);
    setFirstName(profile.first_name);
    setProfessions(profile.professions);
    setSelectedCountry(profile.country);
    setArea(profile.arial);
    setLast(profile.last_name);
  }, [profile]);

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (countries) {
      setFilteredCountries(countries);
    }
  }, [countries]);

  return (
    <div
      className={
        activeName
          ? `${style.editName} ${style.activeName}`
          : `${style.editName}`
      }
      onClick={(e) => {
        setActiveName(false);
        e.stopPropagation();
      }}
    >
      <div
        className={
          activeName
            ? `${style.editName__content} ${style.active}`
            : `${style.editName__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.name__block}>
          <h3 className={style.h3}>Username</h3>
          <input
            className={style.name__input}
            value={username}
            type="text"
            placeholder="@username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={style.name__wrapp}>
          <div className={style.name__block2_block}>
            <h3 className={style.h3}>Name</h3>
            <input
              className={style.name__input}
              value={firstName}
              type="text"
              placeholder="Username"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className={style.name__block2_block}>
            <h3 className={style.h3}>Last name</h3>
            <input
              className={style.name__input}
              value={last}
              type="text"
              placeholder="Last name"
              onChange={(e) => setLast(e.target.value)}
            />
          </div>
        </div>

        <div className={style.name__block}>
          <h3 className={style.h3}>Professional role</h3>
          <input
            className={style.name__input}
            value={professions}
            type="text"
            placeholder="Professional role"
            onChange={(e) => setProfessions(e.target.value)}
          />
        </div>
        <div className={style.country__wrapper}>
          <div className={style.input__drop}>
            <h3 className={style.h3}>Country</h3>
            <div>
              <input
                placeholder="Choose country"
                className={style.drop__input}
                type="text"
                value={selectedCountry}
                onChange={(e) => {
                  handleInputChange(e);
                  setCountryDropdown(false);
                }}
                onClick={() => setCountryDropdown(!countryDropdown)}
              />
              <img
                className={
                  countryDropdown
                    ? `${style.arrow__down}`
                    : `${style.arrow__up}`
                }
                src={arrowDown}
                alt=""
                onClick={() => setCountryDropdown(!countryDropdown)}
              />
            </div>

            <div
              className={
                countryDropdown
                  ? `${style.countries__list}`
                  : `${style.countries__list} ${style.list__unactive}`
              }
            >
              {filteredCountries.map((country, index) => (
                <div
                  className={style.one__country}
                  key={index}
                  onClick={() => handleCountryClick(country.name.common)}
                >
                  <img
                    className={style.flag__icon}
                    src={country.flags.svg}
                    alt=""
                  />
                  <h5 className={style.country__name}>{country.name.common}</h5>
                </div>
              ))}
            </div>
          </div>
          <div className={style.name__block2_block}>
            <h3 className={style.h3}>Area</h3>
            <input
              className={style.name__input}
              value={area}
              type="text"
              placeholder="Enter your area"
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
        </div>
        <div className={style.name__buttons}>
          <button
            className={style.name__button1}
            onClick={(e) => setActiveName(false)}
          >
            Cancel
          </button>
          <button
            className={style.name__button2}
            onClick={(e) => {
              handleSave();
              setActiveName(false);
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
