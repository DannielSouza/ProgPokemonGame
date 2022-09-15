import React from 'react'
import style from '../Styles/Heal.module.css'

const Heal = ({healCount, setPlayer, bossStatsAtack, setRoundHealResume, setRoundHealResumeDetails}) => {

  function Heal(){
    const pokemonHeal = Math.floor(Math.random() * 100 + 790/2)
    setPlayer((beforeStatus)=> ({...beforeStatus, hp:beforeStatus.hp + pokemonHeal}))

    const bossDamage = Math.floor(Math.random() * 5 + bossStatsAtack)
    setPlayer((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - bossDamage}))

    setRoundHealResume(true)
    setRoundHealResumeDetails({bossDamage:bossDamage, pokemonHeal:pokemonHeal})
  }


  if (healCount > 0)return (
    <button className={style.optionHeal} onClick={Heal}>
      Curar: 
      <span>
        +- ?
      </span> 
      <h4 className={style.count}>
        {healCount}
      </h4>
    </button>
  )
  return(
    <button disabled className={style.optionHeal} onClick={Heal}>
      Curar: 
      <span>
        +- ?
      </span> 
        <h4 className={style.count}>
          {healCount}
        </h4>
    </button>
  )
}

export default Heal