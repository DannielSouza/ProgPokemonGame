import React from 'react'
import style from '../Styles/Stats.module.css'
import RoundAtackResume from './RoundAtackResume';

const Stats = ({bossStats, setBossStats, bossStatsAtack, player, setPlayer}) => {
  const [roundAtackResume, setRoundAtackResume] = React.useState(false)
  let pokemonDamage = null
  let bossDamage = null
  let pokemonHeal = null
  

  function Atack(atack){
    bossDamage = Math.floor(Math.random() * 5 + bossStatsAtack)
    setPlayer((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - bossDamage}))

    pokemonDamage = Math.floor(Math.random() * 10 + atack)
    setBossStats((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - pokemonDamage}))
    setRoundAtackResume({pokemonDamage, bossDamage})
  }

  function Heal(){
    pokemonHeal = Math.floor(Math.random() * 90 + 115/2)
    setPlayer((beforeStatus)=> ({...beforeStatus, hp:beforeStatus.hp + pokemonHeal}))

    bossDamage = Math.floor(Math.random() * 5 + bossStatsAtack)
    setPlayer((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - bossDamage}))
  }

  return (
    <div className={style.container}>
      <div className={style.itemContainer}>
        <h3>Nome: {player.name}</h3>

        <div className={style.containerBar}>
          <div className={style.lifeBarContainer}></div>
            <h4>HP: {player.hp}</h4>
            <div style={{width: player.hp / 5 +"px"}} className={style.lifeBar}>
          </div>
        </div>


       <button className={style.option} onClick={()=>Atack(player.atack)}>Atacar: <span>+-{player.atack}</span></button>
       <button className={style.option} onClick={Heal}>Curar: <span>+- ?</span></button>
      </div>

      {roundAtackResume && <RoundAtackResume pokemonDamage={pokemonDamage} bossDamage={bossDamage} setRoundAtackResume={setRoundAtackResume}/>}
    </div>
  )
}

export default Stats