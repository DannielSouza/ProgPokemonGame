import React from 'react'
import style from '../Styles/PokemonDetails.module.css'

const PokemonDetails = ({player}) => {
  return (
    <>
      <h3>Nome: {player.name}</h3>
      <div className={style.containerBar}>
        <div className={style.lifeBarContainer}></div>
          <h4>HP: {player.hp}</h4>
          <div style={{width: player.hp / 5 +"px"}} className={style.lifeBar}>
        </div>
      </div>
    </>
  )
}

export default PokemonDetails