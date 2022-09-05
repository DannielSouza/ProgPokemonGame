import React from 'react'
import style from '../Styles/RoundResume.module.css'

const RoundAtackResume = ({roundAtackResumeDetails, setRoundAtackResume}) => {

return (
    <section onClick={()=>setRoundAtackResume(false)} className={style.container}>
      <div>
        <p>Você causou <span>{roundAtackResumeDetails.pokemonDamage} pontos de vida</span> no Mewtwo, e ele te causou <span>{roundAtackResumeDetails.bossDamage} pontos de vida</span>.</p>
      </div>
    </section>
  )
}

export default RoundAtackResume