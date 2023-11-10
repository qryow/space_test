import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./ProjectsItemStyles.module.css";

const ProjectsItem = ({ item }) => {
    const navigate = useNavigate();
    return (
        <>
            {/* это сама карточка */}
            <div className={style.card}>
                {/* фото */}
                <div>
                    <img src="" alt="" />
                </div>
                {/* здесь будет название проекта и кнопка сохранить */}
                <div>
                    <h2></h2>
                    <img src="" alt="" />
                </div>
                {/* описание карточки */}
                <p></p>
                {/* локация */}
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                {/* лайки и просмотры */}
                <div>
                    {/* лайки */}
                    <div>
                        <img src="" alt="" />
                        <p></p>
                    </div>
                    {/* просмотры */}
                    <div>
                        <img src="" alt="" />
                        <p></p>
                    </div>
                </div>
                {/* белая линия разделения */}
                <div></div>
                {/* просмотреть детали */}
                <div>
                    <p>View Details</p>
                </div>
            </div>
        </>
    );
};

export default ProjectsItem;
