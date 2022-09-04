import React from 'react'
import style from '../Styles/Stats.module.css'

const Stats = ({bossStats, setBossStats, bossStatsAtack, player, setPlayer}) => {

  function Atack(atack){
    const pokemonDamage = Math.floor(Math.random() * 10 + atack)
    setBossStats({...bossStats, hp:bossStats.hp - pokemonDamage})

    const bossDamage = Math.floor(Math.random() * 5 + bossStatsAtack)
    setPlayer({...player, hp:player.hp - bossDamage})
  }

  function Heal(){
    const bossDamage = Math.floor(Math.random() * 5 + bossStatsAtack)
    console.log(bossDamage)
    setPlayer({...player, hp:player.hp - bossDamage})
    
    const pokemonHeal = Math.floor(Math.random() * 90 + 120/2)
    console.log(pokemonHeal)
    setPlayer({...player, hp:player.hp + pokemonHeal})
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
       <button className={style.option} onClick={Heal}>Curar: <span>+-120</span></button>
      </div>
    </div>
  )
}

export default Stats