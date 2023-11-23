import React, { useState } from "react";
import style from "./styles/ProfileModals.module.css";
import { useDispatch } from "react-redux";
import arrowDown from "../../../img/ArrowDown.svg";

const CreateSocial = ({ createSocialModal, setCreateSocialModal }) => {
  const [socialDropdown, setSocialDropdown] = useState(false);

  const [social, setSocial] = useState({
    social_netwok: "",
    social_url: "",
  });
  return (
    <div
      className={
        createSocialModal
          ? `${style.langModal} ${style.activeLang}`
          : `${style.langModal}`
      }
      onClick={(e) => {
        setCreateSocialModal(false);
        e.stopPropagation();
      }}
    >
      <div
        className={
          createSocialModal
            ? `${style.createLang__content} ${style.active}`
            : `${style.createLang__content}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.social_up}>
          <div className={style.social_up__block}>
            <h3>Add Social networks</h3>
          </div>
          <div className={style.social_up__block}>
            <h3>URL</h3>
          </div>
        </div>

        <div className={style.createSocialInp}>
          <div>
            <select
              placeholder="Search for language"
              onClick={() => setSocialDropdown(!socialDropdown)}
              onChange={(e) =>
                setSocial({ ...social, social_netwok: e.target.value })
              }
              className={style.dropdown}
            >
              <option value="discord">discord</option>
              <option value="facebook">facebook</option>
              <option value="github">github</option>
              <option value="instagramm">instagramm</option>
              <option value="linkedin">linkedin</option>
              <option value="pinterest">pinterest</option>
              <option value="telegramm">telegramm</option>
              <option value="tiktok">tiktok</option>
              <option value="twitter">twitter</option>
              <option value="vk">vk</option>
              <option value="youtube">youtube</option>
            </select>
            <img
              src={arrowDown}
              alt=""
              className={
                socialDropdown
                  ? `${style.arrow__down} ${style.langArrowBtn}`
                  : `${style.arrow__up} ${style.langArrowBtn}`
              }
            />
          </div>
          <input type="text" placeholder="https://example.com" />
        </div>

        <div className={style.name__buttons}>
          <button
            className={style.name__button1}
            onClick={() => setCreateSocialModal(false)}
          >
            Cancel
          </button>
          <button
            className={style.name__button2}
            onClick={() => {
              setCreateSocialModal(false);
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSocial;
