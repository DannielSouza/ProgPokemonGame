import React from 'react'
import style from '../Styles/Special.module.css'
import megaCharizard from '../assets/MegaCharizarad.gif'
import shildBuff from '../assets/shild.gif'

const Special = ({setVenusaurSpecialResume, setCharizardSpecialResume, setBlastoiseSpecialResume, setSpecialCount, specialCount, pokemon, setPlayer, setBastoiseSuper, bossStats}) => {
  const specialButton = React.useRef()

  function activeSpecialPower(){
    if(pokemon === 'Charizard' || pokemon === 'Mega Charizard'){ 
      setCharizardSpecialResume(true)
      setPlayer((before) =>({
        name: 'Mega Charizard',
        hp: before.hp + 1000,
        atack: before.atack + 30, 
        img: megaCharizard
      }))
    }
    if(pokemon === 'Blastoise'){ 
      setBlastoiseSpecialResume(true)
      setBastoiseSuper(true)
      setTimeout(()=>{
        setBastoiseSuper(false)
      },1000)
    }
    if(pokemon === 'Venusaur'){
      setVenusaurSpecialResume(true)
      setPlayer((before) =>({
        ...before,
        hp: before.hp + 1500,
        buff: shildBuff
      }))
    }

    setSpecialCount(20)
    if(bossStats.name === 'Rayquaza'){
      setSpecialCount(10)
    }
  }

  if(specialCount > 0) return(
    <button disabled className={style.optionSpecial}>
      SUPER
      <h4 className={style.count}>{specialCount}</h4>
    </button>
  )
  return (
    <button ref={specialButton} onClick={activeSpecialPower} className={style.optionSpecial}>
      SUPER
      <h4 className={style.count}>{specialCount}</h4>
    </button>
  )
}

export default Special