import React from 'react'
import style from './styles/CreateProfile.module.css'

const Education = () => {
  return (
    <>
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
    </>
  )
}

export default Education