import React from 'react'
import style from '../Styles/Atack.module.css'

const Atack = ({player, setPlayer, setBossStats, setRoundAtackResume, setRoundAtackResumeDetails, bossStats}) => {

  
  function Atack(atack){
    let bossDamage
    if(bossStats.name === 'Latios e Latias'){
     bossDamage = Math.floor(Math.random() * 5 + bossStats.atack * bossStats.atackMultply)
      setPlayer((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - bossDamage}))
    }
    else{
      bossDamage = Math.floor(Math.random() * 15 + bossStats.atack)
      setPlayer((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - bossDamage}))
    }

    const pokemonDamage = Math.floor(Math.random() * 10 + atack)
    setBossStats((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - pokemonDamage, atackMultply:beforeStatus.atackMultply + (beforeStatus.atackMultply / 5)}))
    
    setRoundAtackResume(true)
    setRoundAtackResumeDetails({bossDamage:bossDamage, pokemonDamage:pokemonDamage})
  }


  return (
    <button className={style.optionAtack} onClick={()=>Atack(player.atack)}>
      Atacar: 
      <span>
        +-{player.atack}
      </span>
    </button>
  )
}

export default Atack