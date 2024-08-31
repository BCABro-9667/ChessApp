import React from 'react'
import '../stylesheet/global.css'

// Photos
import SpeedChess from '../img/speedChess.png'
import TitleTuesday from '../img/titled.png'
import IndiacollegeChess from '../img/indiac.png'
import dpg from '../img/dpg.jpg'

const events = [
  {
    id: 1,
    imgSrc: dpg,
    altText: "IMG",
    height: 100,
    title: "DPG Degree Colleges Group Tournament",
    link: "/tournaments",
    date: "Aug 28, 2024- Aug 28, 2024"
  },
  {
    id: 2,
    imgSrc: SpeedChess,
    altText: "IMG",
    height: 100,
    title: "Speed Chess ChapionShip 2024",
    link: "https://www.chess.com/events/info/2024-speed-chess-championship",
    date: "Jun 27, 2024- Sep 9, 2024"
  },
  {
    id: 3,
    imgSrc: TitleTuesday,
    altText: "IMG",
    height: 100,
    title: "Titled Cup 2024",
    link: "https://www.chess.com/events/info/2024-titled-cup",
    date: "Jul 31, 2024 – Jul 31, 2024"
  },
  {
    id: 4,
    imgSrc: IndiacollegeChess,
    altText: "IMG",
    height: 100,
    title: "India College Chess Championship 2024",
    link: "https://www.chess.com/events/info/2024-india-college-chess-championship#players",
    date: "Jun 27, 2024- Sep 9, 2024"
  }
];

function TournmentBanner() {
  return (
    <>
      <div className="container">
        <div className="heading">
          <h2>Events</h2>
        </div>

        <div className="event-container">
          {events.map(event => (
            <div className="event" key={event.id}>
              <div className="event-1">
                <img src={event.imgSrc} alt={event.altText} height={event.height} />
              </div>
              <div className="details">
                <h3><a href={event.link}>{event.title}</a></h3>
                <h6>{event.date}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TournmentBanner
