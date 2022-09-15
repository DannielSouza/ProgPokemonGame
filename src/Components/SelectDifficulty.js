import React from 'react'
import style from '../Styles/SelectDifficulty.module.css'
import mewtwo from '../assets/mewtwoFront.gif'
import latios from '../assets/latios.gif'
import latias from '../assets/latias.gif'
import rayquaza from '../assets/rayquaza.gif'


const SelectDifficulty = ({setBossStats}) => {
  function normal(){
    setBossStats({
      name: 'Mewtwo',
      hp: 90 * 10,
      atack: 100, 
      atackMultply: 0,
      img: mewtwo,
      classCSS: 'Mewtwo'
    })
  }

  function hard(){
    setBossStats({
      name: 'Latios e Latias',
      hp: 205 * 10,
      atack: 10, 
      atackMultply: .5,
      img: latias,
      img2: latios,
      classCSS: 'LatioseLatias'
    })
  }

  function hardcore(){
    setBossStats({
      name: 'Rayquaza',
      hp: 610 * 10,
      atack: 200, 
      atackMultply: 0,
      img: rayquaza,
      classCSS: 'Rayquaza'
    })
  }

  return (
    <div className={style.container}>

      <h1>Escolha a dificuldade:</h1>
      <div className={style.choiceContainer}>
        <button className={style.option} onClick={normal}>Normal</button>
        <button className={style.option} onClick={hard}>Dificil</button>
        <button className={style.option} onClick={hardcore}>Hardcore</button>
      </div>
    </div>
  )
}

export default SelectDifficulty