import React from 'react';
import style from './styles/Projects.module.css';

import project_img from '../../img/project_img.svg';

const ProjectItem = () => {
    return (
        <div className={style.project_carts}>
            <div className={style.project_cart}>
            <img src={project_img} alt="" />
            <div className={style.project_name}>
            <h2>Project Name</h2>
            <img src="" alt="qsq" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt blanditiis dicta architecto nihil. Quos nemo, culpa sunt totam amet dolor autem dicta similique provident repudiandae non fuga quo, tenetur repellat!</p>
            <div className={style.location}>
                <img src="" alt="qw" />
                <p>KGZ</p>
            </div>
            <div className={style.project_reactions}>
                <div className={style.project_likes}>123 likes</div>
                <div className={style.project_views}>888</div>
            </div>
            <hr />
            <button className={style.project_edit_button}>View Detail</button>
            </div>

            <div className={style.project_cart}>
            <img src={project_img} alt="" />
            <div className={style.project_name}>
            <h2>Project Name</h2>
            <img src="" alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt blanditiis dicta architecto nihil. Quos nemo, culpa sunt totam amet dolor autem dicta similique provident repudiandae non fuga quo, tenetur repellat!</p>
            <div className={style.location}>
                <img src="" alt="" />
                <p>KGZ</p>
            </div>
            <div className={style.project_reactions}>
                <div className={style.project_likes}>123 likes</div>
                <div className={style.project_views}>888</div>
            </div>
            <hr />
            <button className={style.project_edit_button}>View Detail</button>
            </div>

            <div className={style.project_cart}>
            <img src={project_img} alt="" />
            <div className={style.project_name}>
            <h2>Project Name</h2>
            <img src="" alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt blanditiis dicta architecto nihil. Quos nemo, culpa sunt totam amet dolor autem dicta similique provident repudiandae non fuga quo, tenetur repellat!</p>
            <div className={style.location}>
                <img src="" alt="" />
                <p>KGZ</p>
            </div>
            <div className={style.project_reactions}>
                <div className={style.project_likes}>123 likes</div>
                <div className={style.project_views}>888</div>
            </div>
            <hr />
            <button className={style.project_edit_button}>View Detail</button>
            </div>

            <div className={style.project_cart}>
            <img src={project_img} alt="" />
            <div className={style.project_name}>
            <h2>Project Name</h2>
            <img src="" alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt blanditiis dicta architecto nihil. Quos nemo, culpa sunt totam amet dolor autem dicta similique provident repudiandae non fuga quo, tenetur repellat!</p>
            <div className={style.location}>
                <img src="" alt="" />
                <p>KGZ</p>
            </div>
            <div className={style.project_reactions}>
                <div className={style.project_likes}>123 likes</div>
                <div className={style.project_views}>888</div>
            </div>
            <hr />
            <button className={style.project_edit_button}>View Detail</button>
            </div>
        </div>
    );
};

export default ProjectItem;