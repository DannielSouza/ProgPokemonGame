import React from 'react'
import mobile from '../assets/phone.png'
import rotate from '../assets/rotate.png'
import style from '../Styles/PortraitScreen.module.css'

const PortraitScreen = () => {
  return (
    <section className={style.mobileView}>
        <div className={style.iconContainer}>
          <img className={style.phoneIcon} src={mobile} alt="celular" />
          <img className={style.rotateIcon} src={rotate} alt="rotacionar" />
          <div className={style.mobileMessage}>
            <p>Por favor, vire o celular.</p>
          </div>
        </div>
      </section>
  )
}

export default PortraitScreen