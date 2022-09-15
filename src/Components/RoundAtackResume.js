import React from 'react'
import style from '../Styles/RoundResume.module.css'

const RoundAtackResume = ({roundAtackResumeDetails, setRoundAtackResume, setSpecialCount, specialCount, bossStats}) => {
  
  function skipAtackResume(){
    setRoundAtackResume(false)
    if(specialCount > 0){
      setSpecialCount((before)=> before - 1)
    }
  }
return (
    <section onClick={skipAtackResume} className={style.container}>
      <div>
        <p>Você causou um dano de <span>{roundAtackResumeDetails.pokemonDamage} pontos de vida</span> no {bossStats.name}, e lhe foi causado um dano de <span>{roundAtackResumeDetails.bossDamage} pontos de vida</span>.</p>
      </div>
    </section>
  )
}

export default RoundAtackResume