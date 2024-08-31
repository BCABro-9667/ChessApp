import React, { useEffect } from 'react';
import '../stylesheet/Tabs.css'


import ChessResultsTable from '../ChessResultsTable'

import Caldner from '../img/icons/calendr.png'
import board from '../img/icons/board.png'
import prize from '../img/icons/prize.png'
import rook from '../img/icons/rook.png'
import winner from '../img/winner.jpg'
// import chessset from '../img/chessset.jpg'
import dpg from '../img/dpg.jpg'


function Tabs() {



    useEffect(() => {
        const handleMessage = (e) => {
          if (e.data && e.data.id === "12068073") {
            const iframe = document.getElementById(e.data.id);
            if (iframe) {
              iframe.style.height = `${e.data.frameHeight + 30}px`;
            }
          }
        };
    
        window.addEventListener("message", handleMessage);
    
        return () => {
          window.removeEventListener("message", handleMessage);
        };
      }, []);

    return (
        <>
            <div className="container tabs-container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Games</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Result</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-schedule-tab" data-bs-toggle="pill" data-bs-target="#pills-schedule" type="button" role="tab" aria-controls="pills-schedule" aria-selected="false">Schedule</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-news-tab" data-bs-toggle="pill" data-bs-target="#pills-news" type="button" role="tab" aria-controls="pills-news" aria-selected="false">News</button>
                    </li>


                </ul>
                <hr />
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

                        <div className="container home-container-tab">
                            <div className="img-container-top">
                                <img src={dpg} alt="" height={310}/>
                            </div>
                           
                            <div className="game-terms">
                                <div className="col1">
                                    <div className='child-col1'><img src={Caldner} alt="" height={50} /><h5>28 August, 2024 | DPG STM Building</h5></div>
                                </div>
                                <div className="col1">
                                    <div className='child-col1'><img src={prize} alt="" height={50} /><h5>Prize fund: $1,500</h5></div>
                                </div>
                            </div>
                            <div className="game-terms">
                                <div className="col1">
                                    <div className='child-col1'><img src={rook} alt="" height={50} /><h5>6 Rapid Round</h5></div>
                                </div>
                                <div className="col1">
                                    <div className='child-col1'><img src={board} alt="" height={50} /><h5>Time control: Rapid 10 min</h5></div>
                                </div>
                            </div>

                            <div className="quote">
                                <blockquote>The Speed Chess Championship is Chess.com's most elite blitz and bullet event, featuring the strongest speed chess players in the world.

                                </blockquote>
                            </div>




                            <div className="prize">
                                <div className="fund-money">
                                    <img src={prize} alt="cup" height={90} width={90}  />
                                    <span className="prize-amount">$175,000</span>
                                    <span className='prize-text'>Prize money</span>
                                </div>
                                <div className="position-winner-money">
                                    <img src={winner} alt="winner" height={250}/>
                                </div>
                               
                            </div>
                        </div>



                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                        <div className="container">
                            <iframe
                                id="12068073"
                                allowTransparency="true"
                                frameBorder="0"
                                style={{ width: '100%', border: 'none' }}
                                src="//www.chess.com/emboard?id=12068073"
                                title="Chess Embed"
                            ></iframe>
                            {/* <iframe id="12067837" allowtransparency="true" frameborder="0" style="width:100%;border:none;" src="//www.chess.com/emboard?id=12067837"></iframe><script>window.addEventListener("message",e=>{e['data']&&"12067837"===e['data']['id']&&document.getElementById(`${e['data']['id']}`)&&(document.getElementById(`${e['data']['id']}`).style.height=`${e['data']['frameHeight']+30}px`)});</script> */}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                        <div className="container">
                            <ChessResultsTable />
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-schedule" role="tabpanel" aria-labelledby="pills-schedule-tab" tabindex="0">


                        <div className="rounds">
                        </div>
                        <div className="container rounds-container">

                            <div className="roundstable">
                                <div className="heading"><h2>Round 1</h2></div>
                                <table className="table table-bordered schedule-table">
                                    <caption>**Round 1 Timing: 11:15 AM</caption>
                                    <thead>
                                        <tr className='table-heading'>
                                            <th scope="col">#</th>
                                            <th scope="col">Player1</th>
                                            <th scope="col">Player2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >1</th>
                                            <td>Gukesh DommaRaju</td>
                                            <td>Megnus Carlen</td>
                                        </tr>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >2</th>
                                            <td>Kartik Mundwana	</td>
                                            <td>Ayush Saini	</td>
                                        </tr>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >3</th>
                                            <td>Arjun Erigaisi	</td>
                                            <td>Avdhesh Kumar	</td>
                                        </tr>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >4</th>
                                            <td>Vidit Gujrathi	</td>
                                            <td>Rohit Bhardwaj	</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <div className="roundstable">
                                <div className="heading"><h2>Round 2</h2></div>
                                <table className="table table-bordered schedule-table">
                                    <caption>**Round 1 Timing: 11:15 AM</caption>
                                    <thead>
                                        <tr className='table-heading'>
                                            <th scope="col">#</th>
                                            <th scope="col">Player1</th>
                                            <th scope="col">Player2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >1</th>
                                            <td>Gukesh DommaRaju</td>
                                            <td>Megnus Carlen</td>
                                        </tr>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >2</th>
                                            <td>Kartik Mundwana	</td>
                                            <td>Ayush Saini	</td>
                                        </tr>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >3</th>
                                            <td>Arjun Erigaisi	</td>
                                            <td>Avdhesh Kumar	</td>
                                        </tr>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >4</th>
                                            <td>Vidit Gujrathi	</td>
                                            <td>Rohit Bhardwaj	</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>



                            <div className="roundstable">
                                <div className="heading"><h2>Round 3</h2></div>
                                <table className="table table-bordered schedule-table">
                                    <caption>**Round 1 Timing: 11:15 AM</caption>
                                    <thead>
                                        <tr className='table-heading'>
                                            <th scope="col">#</th>
                                            <th scope="col">Player1</th>
                                            <th scope="col">Player2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >1</th>
                                            <td>Gukesh DommaRaju</td>
                                            <td>Megnus Carlen</td>
                                        </tr>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >2</th>
                                            <td>Kartik Mundwana	</td>
                                            <td>Ayush Saini	</td>
                                        </tr>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >3</th>
                                            <td>Arjun Erigaisi	</td>
                                            <td>Avdhesh Kumar	</td>
                                        </tr>
                                        <tr className='shedule-tr'>
                                            <th scope="row " >4</th>
                                            <td>Vidit Gujrathi	</td>
                                            <td>Rohit Bhardwaj	</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab" tabindex="0"><h2>News</h2></div>
                </div>
            </div>
        </>
    );
}

export default Tabs;
