import React from 'react'
import style from '../Styles/Stats.module.css'
import RoundAtackResume from './RoundAtackResume';
import RoundHealResume from './RoundHealResume';

const Stats = ({bossStats, setBossStats, bossStatsAtack, player, setPlayer}) => {
  const [roundAtackResume, setRoundAtackResume] = React.useState(false)
  const [roundAtackResumeDetails, setRoundAtackResumeDetails] = React.useState({})

  const [roundHealResume, setRoundHealResume] = React.useState(false)
  const [roundHealResumeDetails, setRoundHealResumeDetails] = React.useState({})
  

  function Atack(atack){
    const bossDamage = Math.floor(Math.random() * 5 + bossStatsAtack)
    setPlayer((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - bossDamage}))

    const pokemonDamage = Math.floor(Math.random() * 10 + atack)
    setBossStats((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - pokemonDamage}))
    setRoundAtackResume({pokemonDamage, bossDamage})

    setRoundAtackResume(true)
    setRoundAtackResumeDetails({bossDamage:bossDamage, pokemonDamage:pokemonDamage})
  }

  function Heal(){
    const pokemonHeal = Math.floor(Math.random() * 100 + 110/2)
    setPlayer((beforeStatus)=> ({...beforeStatus, hp:beforeStatus.hp + pokemonHeal}))

    const bossDamage = Math.floor(Math.random() * 5 + bossStatsAtack)
    setPlayer((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - bossDamage}))

    setRoundHealResume(true)
    setRoundHealResumeDetails({bossDamage:bossDamage, pokemonHeal:pokemonHeal})
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

      {roundAtackResume && <RoundAtackResume roundAtackResumeDetails={roundAtackResumeDetails} setRoundAtackResume={setRoundAtackResume}/>}
      {roundHealResume && <RoundHealResume roundHealResumeDetails={roundHealResumeDetails} setRoundHealResume={setRoundHealResume}/>}
    </div>
  )
}

export default Stats