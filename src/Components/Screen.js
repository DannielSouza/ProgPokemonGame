import React from 'react'
import style from '../Styles/Screen.module.css'
import ChoosePokemon from './ChoosePokemon'
import Gameboard from './Gameboard'
import Menu from './Menu'
import SelectDifficulty from './SelectDifficulty'

const Screen = () => {
  const [play, setPlay] = React.useState(false)
  const [pokemon, setPokemon] = React.useState(null)
  const [bossStats, setBossStats] =  React.useState(null)

  React.useEffect(()=>{

  },[])


  return (
    <section className={style.screenContainer}>

      {!play && <Menu setPlay={setPlay} />}
      {!pokemon && play && <ChoosePokemon setPokemon={setPokemon}/>}
      {pokemon && !bossStats && <SelectDifficulty setBossStats={setBossStats} />}
      {pokemon && bossStats && <Gameboard pokemon={pokemon} bossStats={bossStats} setBossStats={setBossStats}/>}
    </section>
  )
}

export default Screen