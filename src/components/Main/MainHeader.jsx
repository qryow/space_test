import React from 'react'
import style from './MainStyles.module.css'
import headerStyle from './MainStylesHeader.module.css'
import { isUserLogin } from '../../helpers/functions';
import { useNavigate } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

import MainNavbar from './MainNavbar'

import bg from '../../img/main-bg.svg'
import sphere from '../../img/sphere.webp'
import photo from '../../img/header-img.png'
import cooperation from '../../img/distribution.svg'
import globe from '../../img/Globe.svg'
import note from '../../img/Note_Edit.svg'
import safety from '../../img/safety.svg'

import features1 from '../../img/features1.svg'
import features2 from '../../img/features2.svg'
import features3 from '../../img/features3.svg'

import tuman from '../../img/tuman.png'
import luna from '../../img/luna.png'


const MainHeader = () => {

  const navigate = useNavigate()

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <img id={style.img} src={bg} alt="" />
        <div className={style.container}>
          <MainNavbar />
          <div className={headerStyle.header__wrapper}>
            <div className={headerStyle.header__left}>
              <h1 className={headerStyle.header__title}>SpaceHub</h1>
              <p className={headerStyle.header__text}>
                A platform for collaboration <br />
                between scientists, engineers and startups <br />
                in the name of new horizons and discoveries
              </p>
              <div className={headerStyle.header__sub}>
                <p className={headerStyle.sub__text}>
                Become a part of our community
                </p>
                {isUserLogin() ? (
                  <>
                    <button className={headerStyle.upload__btn}>
                      Upload a project
                    </button>
                  </>
                ) : (
                  <>
                    <button className={headerStyle.upload__btn} onClick={() => navigate('/register')}>
                      Create Account
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className={headerStyle.header__right}>
              <img id={headerStyle.sphere} src={sphere} alt="" /> 
            </div>
          </div>

          <div className={headerStyle.header__info_block}>
            <div className={headerStyle.header__info_left}>
              <img className={headerStyle.header__img} src={photo} alt="" />
            </div>

            <div className={headerStyle.header__info_right}>
              <h4 className={headerStyle.info__pretitle}>Connecting Visionaries for Cosmic Exploration</h4>
              <h3 className={headerStyle.info__title}>SpaceHub:</h3>
              <p className={headerStyle.info__text} >
              Spacehab is an innovative platform that brings together scientists, <br />
              engineers and startups striving for space exploration. <br />
              <br />
              We provide a space for collaboration and inspiration, where minds from <br />
              all over the world can exchange ideas, create projects and <br />
              work together on scientific research, innovative technologies <br />
              and missions in space. Our resources and tools make it possible to turn <br />
              space dreams into reality
              </p>
              <button className={headerStyle.learn__more}>Learn more</button>
            </div>
          </div>

          <div className={headerStyle.advantages__block}>
            <div className={headerStyle.ellipse1}></div>
            <h3 className={headerStyle.block__title}>Our platform</h3>

            <div className={headerStyle.blocks}>
              <div className={headerStyle.one__block}>
                <div className={headerStyle.one__block_wrapper}>
                  <img className={headerStyle.block__img} src={cooperation} alt="cooperation" />
                  <h3 className={headerStyle.oneblock__title}>Cooperation</h3>
                  <p className={headerStyle.oneblock__text}>
                  Spaceweb provides a unique 
                  scientists, engineers and 
                  startups working in the field
                  of space research. Here you 
                  can find partners and like-minded people to jointly
                  develop projects 
                  and research.
                  </p>
                </div>
              </div>

              <div className={headerStyle.one__block}>
                <div className={headerStyle.one__block_wrapper}>
                  <img className={headerStyle.block__img} src={globe} alt="globe" />
                  <h3 className={headerStyle.oneblock__title}>Blog and news</h3>
                  <p className={headerStyle.oneblock__text}>
                  Users can share their projects, 
                  research and news in the field 
                  of space. You can create your 
                  own publications, share your 
                  experience and contribute to the 
                  general knowledge about space 
                  research. Spacehab is the place 
                  for an active exchange of 
                  opinions and knowledge.
                  </p>
                </div>
              </div>

              <div className={headerStyle.one__block}>
                <div className={headerStyle.one__block_wrapper}>
                  <img className={headerStyle.block__img} src={note} alt="note" />
                  <h3 className={headerStyle.oneblock__title}>Training and education</h3>
                  <p className={headerStyle.oneblock__text}>
                  SpaceHub supports educational and 
                  training programs for those who 
                  want to expand their knowledge in 
                  the field of space. You can learn 
                  from experts and share your 
                  experience.
                  </p>
                </div>
              </div>

              <div className={headerStyle.one__block}>
                <div className={headerStyle.one__block_wrapper}>
                  <img className={headerStyle.block__img} src={safety} alt="safety" />
                  <h3 className={headerStyle.oneblock__title}>Safety</h3>
                  <p className={headerStyle.oneblock__text}>
                  SpaceHub supports educational and 
                  training programs for those who 
                  want to expand their knowledge in 
                  the field of space. You can learn 
                  from experts and share your 
                  experience.
                  </p>
                </div>
              </div>

              
            </div>
          </div>

                  
          <div className={headerStyle.features}>
            <div className={headerStyle.ellipse2}></div>
            <h3 className={headerStyle.features__title}>Features of our platform</h3>

            <div className={headerStyle.features__blocks}>
              <div className={headerStyle.block__left}>
                <div className={headerStyle.features__block}>
                  <img className={headerStyle.features1} src={features1} alt="" />
                </div>

                <div className={headerStyle.features__block}>
                  <div className={headerStyle.block__content_left}>
                    <div className={headerStyle.number}>2</div>

                    <h4 className={headerStyle.content__title}>Chat</h4>

                    <p className={headerStyle.content__text_right}>
                    Chat is one of the most important features 
                    of the SpaceHub platform for providing communication 
                    and cooperation between scientists, engineers and 
                    startups engaged in space research. Both private 
                    messages and group chats are presented on the platform.
                    </p>
                  </div>
                </div>

                <div className={headerStyle.features__block}>
                  <img className={headerStyle.features1} src={features3} alt="" />
                </div>

              </div>

              <div className={headerStyle.vertical__line}></div>

              <div className={headerStyle.block__right}>
                <div className={headerStyle.features__block}>
                  <div className={headerStyle.block__content}>
                    <div className={headerStyle.number}>1</div>

                    <h4 className={headerStyle.content__title}>Publishing projects</h4>

                    <p className={headerStyle.content__text}>
                    Publications on the Spacehab platform 
                    are a way for participants to share 
                    information about their research, projects, 
                    discoveries and other space-related research
                    with other participants.
                    </p>
                  </div>
                </div>

                <div className={headerStyle.features__block}>
                  <img className={headerStyle.features1} src={features2} alt="" />
                </div>

                <div className={headerStyle.features__block}>
                  <div className={headerStyle.block__conten}>
                    <div className={headerStyle.number}>3</div>

                    <h4 className={headerStyle.content__title}>Training and resources</h4>

                    <p className={headerStyle.content__text}>
                    Providing training materials, webinars and resources 
                    to help participants develop their knowledge and 
                    skills in the space field. Courses may include video 
                    tutorials, lectures, assignments, testing, and the 
                    opportunity to interact with teachers and other students.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

            <VideoPlayer />

          
        </div>
            <div className={headerStyle.footer}>
              <img className={headerStyle.tuman} src={tuman} alt="" />
              <img className={headerStyle.luna} src={luna} alt="" />
              <div className={headerStyle.footer__info}>
                <h3 className={headerStyle.footer__title}>SPACEHUB</h3>
                <div className={headerStyle.footer__menu}>
                  <div className={headerStyle.footer__item}>Home</div>
                  <div className={headerStyle.footer__item}>About</div>
                  <div className={headerStyle.footer__item}>Projects</div>
                  <div className={headerStyle.footer__item}>News</div>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default MainHeader