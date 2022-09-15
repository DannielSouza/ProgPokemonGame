import React from 'react'
import style from '../Styles/BastoiseSuper.module.css'
import wave from '../assets/wave.gif'

const BlastoiseSuper = ({setBossStats}) => {
  React.useEffect(()=>{
    setBossStats((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - 1150}))
  },[])

  return (
    <section className={style.container}>
      <img className={style.wave1} src={wave} alt='Bastoise especial'/>
      <img className={style.wave2} src={wave} alt='Bastoise especial'/>
      <img className={style.wave3} src={wave} alt='Bastoise especial'/>
    </section>
  )
}

export default BlastoiseSuper