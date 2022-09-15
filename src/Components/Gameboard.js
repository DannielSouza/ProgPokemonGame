import React from 'react'
import Stats from './Stats';
import style from '../Styles/Gameboard.module.css'
import venossauroImg from '../assets/venosauroBack.gif'
import charizardImg from '../assets/charizardBack.gif'
import bastoiseImg from '../assets/bastoiseBack.gif'
import StatsBoss from './StatsBoss';


const Gameboard = ({pokemon, bossStats, setBossStats}) => {
  const [player, setPlayer] = React.useState(null)
  

  React.useState(()=>{  
  if(pokemon){  
    if(pokemon === "Venossauro"){
      setPlayer({
        name: 'Venusaur',
        hp: 80 * 10,
        atack: 82, 
        img: venossauroImg
      })
    }
    else if(pokemon === 'Charizard'){
      setPlayer({
        name: 'Charizard',
        hp: 78 * 10,
        atack: 84, 
        img: charizardImg
      })
    }
    else if(pokemon === 'Blastoise'){
      setPlayer({
        name: 'Blastoise',
        hp: 79 * 10,
        atack: 83,  
        img: bastoiseImg
      })
    }
  }
  },[pokemon])


  if(player) return (
    <section className={style.container}>

      {player.buff && <img className={style.buff} src={player.buff} alt='buff'/>}
      <Stats name={player.name} setPlayer={setPlayer} player={player} hp={player.hp} atack={player.atack} bossStats={bossStats} setBossStats={setBossStats}/>
      <img className={style.pokemonImg} src={player.img} alt='seu Pokemon'/>

      <StatsBoss name={bossStats.name} hp={bossStats.hp}/>
      <img className={bossStats.classCSS} src={bossStats.img} alt='Boss'/>
      {bossStats.img2 && <img className={bossStats.classCSS  + 2} src={bossStats.img2} alt='Boss2'/>}
    
    </section>
  )
  return <p>carregando...</p>
}

export default Gameboard