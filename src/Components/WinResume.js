import React from 'react'
import style from '../Styles/WinOrDefeatResume.module.css'

const WinResume = () => {
  return (
    <section className={style.container}>
      <div className={style.itemContainer}>
        <h1 className={style.titleWin}>Vitória!</h1>
        <p>Parabéns, você derrotou o Mewtwo!</p>

        <button onClick={()=> document.location.reload(true)}>Inicio</button>
      </div>
    </section>
  )
}

export default WinResume