import React from 'react'
import style from '../Styles/RoundResume.module.css'

const RoundHealResume = ({roundHealResumeDetails, setRoundHealResume}) => {

return (
    <section onClick={()=>setRoundHealResume(false)} className={style.container}>
      <div>
        <p>Você curou <span className={style.heal}>{roundHealResumeDetails.pokemonHeal} pontos de vida</span>, e o Mewtwo te causou <span>{roundHealResumeDetails.bossDamage} pontos de vida</span>.</p>
      </div>
    </section>
  )
}

export default RoundHealResume