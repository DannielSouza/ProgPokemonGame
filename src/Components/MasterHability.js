import React from 'react'
import style from '../Styles/MasterHability.module.css'

const MasterHability = ({player, setPlayer, setBossStats}) => {

  
  const masterButon = React.useRef()
  
  function masterHability(){
    window.alert(`Vendo seu esforço, o ${player.name} se inspirou, recuperando parte de seu HP e reduzindo o dano do inimigo.`)
    setPlayer((before)=>({
      ...before, hp: before.hp + 2100, atack: before.atack + 40
    }))

    setBossStats((before)=>({
      ...before, atack: before.atack - 30
    }))

    masterButon.current.setAttribute("disabled", "disabled")
  }

  return (
    <button ref={masterButon} className={style.optionMasterHability} onClick={masterHability}>
      ???
    </button>
  )
}

export default MasterHability