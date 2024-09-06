import React from 'react'
import './stylesheet/ChessThinking.css'
import king from './img/chesspice/king.png'
import queen from './img/chesspice/queen.png'
import knight from './img/chesspice/knight.png'
import rook from './img/chesspice/rook.png'
import bisop from './img/chesspice/bisop.png'
import pawn from './img/chesspice/pawn.png'

function ChessThinking() {
  // Array containing data for each piece
  const chessPieces = [
    { img: king, title: 'Thinking', description: 'Improve creative & logical thinking' },
    { img: queen, title: 'Strategy', description: 'Master planning and strategy' },
    { img: knight, title: 'Problem Solving', description: 'Enhance your problem-solving skills' },
    { img: rook, title: 'Patience', description: 'Develop patience and foresight' },
    { img: bisop, title: 'Focus', description: 'Increase your focus and concentration' },
    { img: pawn, title: 'Discipline', description: 'Learn discipline and persistence' }
  ];

  return (
    <>
      <div className="container why-chess-container">
        <div className="why-chess">
          <div className="heading">
            <h2>Why <span style={{color: '#6a9a3b'}}>Chess</span></h2>
          </div>
          <div className="why-chess-box-container">
            {/* Map through the array to display each piece */}
            {chessPieces.map((piece, index) => (
              <div key={index} className="chess-piece">
                <img src={piece.img} alt={piece.title} height={80} />
                <h5>{piece.title}</h5>
                <p>{piece.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChessThinking;
