import React from 'react'
import  './stylesheet/global.css'
import IndianGMOhotos from './other_comp/IndianGM'
import TournmentBanner from './other_comp/TournmentBanner'
import chess from './img/chess.png'
import ChessThinking from './ChessThinking'
// import DateTime from './other_comp/DateTime'

function Home() {
  return (
    <>
    <div className="chess-play">
      
      <div className="img"><img src={chess} alt="chess" /></div>
      <div className="detailss">
        <h1>Play Chess Online on the #1 Site!
          <br /><span>
            {/* <DateTime/>/ */}
          </span>
        </h1>

          
          <a href="https://chess.com/" target='_blank'><button  >Play Online</button></a>
      </div>
    </div>
    <ChessThinking/>

    <TournmentBanner/>
    <IndianGMOhotos/>
    </>
  )
}

export default Home