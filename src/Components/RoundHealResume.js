import React from 'react'
import style from '../Styles/RoundResume.module.css'

const RoundHealResume = ({roundHealResumeDetails, setRoundHealResume, healCount, setHealCount}) => {

  function healAction(){
    setRoundHealResume(false)
    setHealCount((prevCount)=>prevCount - 1)
  }


return (
    <section onClick={healAction} className={style.container}>
      <div>
        <p>Você curou <span className={style.heal}>{roundHealResumeDetails.pokemonHeal} pontos de vida</span>, o Mewtwo te causou um dano de <span>{roundHealResumeDetails.bossDamage} pontos de vida</span>.</p>
      </div>
    </section>
  )
}

export default RoundHealResume