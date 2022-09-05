import React from 'react'
import style from '../Styles/Stats.module.css'
import DefeatResume from './DefeatResume';
import RoundAtackResume from './RoundAtackResume';
import RoundHealResume from './RoundHealResume';
import WinResume from './WinResume';

const Stats = ({bossStats, setBossStats, bossStatsAtack, player, setPlayer}) => {
  const [roundAtackResume, setRoundAtackResume] = React.useState(false)
  const [roundAtackResumeDetails, setRoundAtackResumeDetails] = React.useState({})

  const [roundHealResume, setRoundHealResume] = React.useState(false)
  const [roundHealResumeDetails, setRoundHealResumeDetails] = React.useState({})
  const [healCount, setHealCount] = React.useState(3)

  const [win, setWin] = React.useState(false)
  const [defeat, setDefeat] = React.useState(false)
  

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
    const pokemonHeal = Math.floor(Math.random() * 100 + 790/2)
    setPlayer((beforeStatus)=> ({...beforeStatus, hp:beforeStatus.hp + pokemonHeal}))

    const bossDamage = Math.floor(Math.random() * 5 + bossStatsAtack)
    setPlayer((beforeStatus)=>({...beforeStatus, hp:beforeStatus.hp - bossDamage}))

    setRoundHealResume(true)
    setRoundHealResumeDetails({bossDamage:bossDamage, pokemonHeal:pokemonHeal})
  }

  React.useEffect(()=>{
    const playerLife = player.hp
    const bossLife = bossStats.hp

    if(bossLife <= 0) setWin(true)
    if(playerLife <= 0) setDefeat(true)

  },[player, bossStats])


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


       <button className={style.optionAtack} onClick={()=>Atack(player.atack)}>Atacar: <span>+-{player.atack}</span></button>
       {healCount > 0? <button className={style.optionHeal} onClick={Heal}>Curar: <span>+- ?</span> <h4 className={style.healCount}>{healCount}</h4></button> : <button disabled className={style.optionHeal} onClick={Heal}>Curar: <span>+- ?</span> <h4 className={style.healCount}>{healCount}</h4></button>}
      </div>

      {roundAtackResume && <RoundAtackResume roundAtackResumeDetails={roundAtackResumeDetails} setRoundAtackResume={setRoundAtackResume}/>}
      {roundHealResume && <RoundHealResume roundHealResumeDetails={roundHealResumeDetails} setRoundHealResume={setRoundHealResume} healCount={healCount} setHealCount={setHealCount}/>}

      {win && <WinResume />}
      {defeat && <DefeatResume />}
    </div>
  )
}

export default Stats