import React from 'react'
import style from '../Styles/ChoosePokemon.module.css'
import venossauroImg from '../assets/venosauroFront.gif'
import charizardImg from '../assets/charizardFront.gif'
import bastoiseImg from '../assets/bastoiseFront.gif'

const ChoosePokemon = ({setPokemon}) => {
  return (
    <section className={style.container}>
      <h1>Escolha seu pokemon!</h1>

      <div className={style.choices}>
        <div onClick={()=>setPokemon('Venossauro')} className={style.card}>
          <h3>Venossauro</h3>
          <img src={venossauroImg} alt='Escolher Venossauro'/>
        </div>

        <div onClick={()=>setPokemon('Charizard')} className={style.card}>
          <h3>Charizard</h3>
          <img src={charizardImg} alt='Escolher Charizard'/>
        </div>

        <div onClick={()=>setPokemon('Blastoise')} className={style.card}>
          <h3>Blastoise</h3>
          <img src={bastoiseImg} alt='Escolher Blastoise'/>
        </div>
      </div>

    </section>
  )
}

export default ChoosePokemon