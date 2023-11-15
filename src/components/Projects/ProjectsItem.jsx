import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./ProjectsItemStyles.module.css";

import cardImage from "../../img/projects/image.png";
import favoriteImage from "../../img/projects/favoriteImg.png";
import locationImage from "../../img/projects/Location.png";
import likesImage from "../../img/projects/like.png";
import viewsImage from "../../img/projects/SWM icons.png";

const ProjectsItem = ({ item }) => {
    const navigate = useNavigate();
    console.log(item);
    return (
        <>
            {/* это сама карточка */}
            <div className={style.card}>
                <div className={style.card_container}>
                    {/* фото */}
                    <div className={style.card_image__div}>
                        <img
                            src={cardImage}
                            alt=""
                            className={style.card_image}
                        />
                    </div>
                    {/* здесь будет название проекта и кнопка сохранить */}
                    <div className={style.title_div}>
                        <h2>{item.title}</h2>
                        <img
                            src={favoriteImage}
                            alt=""
                            className={style.title_div__image}
                        />
                    </div>
                    {/* описание карточки */}

                    <div className={style.card_description}>
                        {item.description}
                    </div>

                    {/* локация */}
                    <div className={style.card_location}>
                        <img src={locationImage} alt="" />
                        <p>{item.location}</p>
                    </div>
                    {/* лайки и просмотры */}
                    <div className={style.card_likeDiv}>
                        {/* лайки */}
                        <div className={style.card_likes}>
                            <img src={likesImage} alt="" />
                            <p>{item.likes}</p>
                        </div>
                        {/* просмотры */}
                        <div className={style.card_views}>
                            <img src={viewsImage} alt="" />
                            <p>{item.views_count}</p>
                        </div>
                    </div>
                </div>
                {/* белая линия разделения */}
                <div className={style.white_line}></div>
                {/* просмотреть детали */}
                <div className={style.card_details}>
                    <p>View Details</p>
                </div>
            </div>
        </>
    );
};

export default ProjectsItem;
