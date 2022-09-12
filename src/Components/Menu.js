import React from 'react'
import style from '../Styles/Menu.module.css'

const Menu = ({setPlay}) => {
  

  return (
    <section className={style.container}>
      <div>
        <h1><span>Pokemon</span>Game
          <a className={style.credits} href='https://www.linkedin.com/in/daniel-souza-b000a51b1/'>
          por: Daniel Gonçalves
          </a>
        </h1>
        <button className={style.button} onClick={()=>setPlay(true)} >Iniciar</button>
      </div>
    </section>
  )
}

export default Menu