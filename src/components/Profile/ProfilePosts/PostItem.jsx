import React from 'react';
import style from './styles/Posts.module.css';

import user from "../../../img/profile/user.svg";
import btn from '../../../img/profile/project_btn.svg';
import media from '../../../img/profile/Media.svg';
import chat from '../../../img/profile/Chat.svg';
import like from '../../../img/profile/like.svg';
import share from '../../../img/profile/Share.svg';
import repost from '../../../img/profile/repost.svg';


const PostItem = ({ post }) => {
    return (
        <div className={style.post_cart}>
            <div className={style.avatar}>
                <div className={style.avatar__block}>
                    <img className={style.account__img} src={user} alt="" />
                </div>
            </div>
            <div className={style.cart_right}>
                <div className={style.cart_right_top}>
                    <div className={style.cart__name}>
                        <h2>{post.title}</h2>
                        <p>{post.date_posted}</p>
                    </div>
                    <button>
                        <img src={btn} alt="" />
                    </button>
                </div>
                <div className={style.cart__desc}>
                    {post.content}
                </div>
                <div className={style.cart__images}>
                    <img src={media} alt="" />
                </div>
                <div className={style.cart__reactions}>
                    <button><img src={chat} alt="" /> <span>4</span></button>
                    <button><img src={like} alt="" /> <span>6.5K</span></button>
                    <button><img src={share} alt="" /> <span>55</span></button>
                    <button><img src={repost} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default PostItem;