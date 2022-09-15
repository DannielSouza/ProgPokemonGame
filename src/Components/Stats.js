import React from 'react'
import style from '../Styles/Stats.module.css'
import BlastoiseSuper from './BlastoiseSuper';
import DefeatResume from './DefeatResume';
import RoundAtackResume from './RoundAtackResume';
import RoundHealResume from './RoundHealResume';
import Special from './Special';
import Heal from './Heal';
import Atack from './Atack';
import WinResume from './WinResume';
import PokemonDetails from './PokemonDetails';
import MasterHability from './MasterHability';
import VenusaurSpecialResume from './VenusaurSpecialResume';
import CharizardSpecialResume from './CharizardSpecialResume';
import BlastoiseSpecialResume from './BlastoiseSpecialResume';


const Stats = ({bossStats, setBossStats, player, setPlayer, pokemonImg}) => {
  const [roundAtackResume, setRoundAtackResume] = React.useState(false)
  const [roundAtackResumeDetails, setRoundAtackResumeDetails] = React.useState({})
  const [roundHealResume, setRoundHealResume] = React.useState(false)
  const [roundHealResumeDetails, setRoundHealResumeDetails] = React.useState({})
  const [healCount, setHealCount] = React.useState(3)
  const [specialCount, setSpecialCount] = React.useState(20)
  const [win, setWin] = React.useState(false)
  const [defeat, setDefeat] = React.useState(false)
  const [bastoiseSuper, setBastoiseSuper] = React.useState(false)
  const [masterHability, setMasterHability] = React.useState(false)
  const [venusaurSpecialResume, setVenusaurSpecialResume] = React.useState(false)
  const [charizardSpecialResume, setCharizardSpecialResume] = React.useState(false)
  const [blastoiseSpecialResume, setBlastoiseSpecialResume] = React.useState(false)

  React.useEffect(()=>{
    const playerLife = player.hp
    const bossLife = bossStats.hp
    if(bossLife <= 0) setWin(true)
    if(playerLife <= 0) setDefeat(true)

    if((healCount - 1) === -1 && bossStats.name === 'Rayquaza' && player.hp <= 250){
      setMasterHability(true)
    }

  },[player, bossStats])

  React.useEffect(()=>{
    if(bossStats.name === 'Rayquaza'){
      setSpecialCount(10)
      setHealCount(4)
    } 
  },[])

  return (
    <div className={style.container}>
      <div className={style.itemContainer}>
        <PokemonDetails player={player}/>
        <Atack player={player} setPlayer={setPlayer} bossStats={bossStats} setBossStats={setBossStats} setRoundAtackResume={setRoundAtackResume} setRoundAtackResumeDetails={setRoundAtackResumeDetails}/>
        <Heal healCount={healCount} setPlayer={setPlayer} bossStatsAtack={bossStats.atack} setRoundHealResume={setRoundHealResume} setRoundHealResumeDetails={setRoundHealResumeDetails}/>
        <Special setBlastoiseSpecialResume={setBlastoiseSpecialResume} setCharizardSpecialResume={setCharizardSpecialResume} setVenusaurSpecialResume={setVenusaurSpecialResume} bossStats={bossStats} setSpecialCount={setSpecialCount} setBastoiseSuper={setBastoiseSuper} specialCount={specialCount} pokemon={player.name} setPlayer={setPlayer}/>
        {masterHability && <MasterHability player={player} setPlayer={setPlayer} setBossStats={setBossStats} bossStats={bossStats}/>}
      </div>

      {roundAtackResume && <RoundAtackResume bossStats={bossStats} specialCount={specialCount} setSpecialCount={setSpecialCount} roundAtackResumeDetails={roundAtackResumeDetails} setRoundAtackResume={setRoundAtackResume}/>}
      {roundHealResume && <RoundHealResume bossStats={bossStats} specialCount={specialCount} setSpecialCount={setSpecialCount} roundHealResumeDetails={roundHealResumeDetails} setRoundHealResume={setRoundHealResume} healCount={healCount} setHealCount={setHealCount}/>}
      {bastoiseSuper && <BlastoiseSuper setBossStats={setBossStats}/>}

      {venusaurSpecialResume && <VenusaurSpecialResume venusaurSpecialResume={venusaurSpecialResume} setVenusaurSpecialResume={setVenusaurSpecialResume} />}
      {charizardSpecialResume && <CharizardSpecialResume charizardSpecialResume={charizardSpecialResume} setCharizardSpecialResume={setCharizardSpecialResume} />}
      {blastoiseSpecialResume && <BlastoiseSpecialResume blastoiseSpecialResume={blastoiseSpecialResume} setBlastoiseSpecialResume={setBlastoiseSpecialResume}/>}

      {win && <WinResume bossStats={bossStats} />}
      {defeat && <DefeatResume bossStats={bossStats} />}
    </div>
  )
}

export default Stats