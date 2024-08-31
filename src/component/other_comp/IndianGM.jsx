import React from 'react';
import '../stylesheet/global.css';

// Photos
import vishyAnand from './indian_chess/anand.jpg';
import arjunErigaisi from './indian_chess/arjun.png';
import gukesh from './indian_chess/gukesh.jpeg';
import prag from './indian_chess/prag.jpg';
import vidhit from './indian_chess/vidhit.jpeg';
import groupPhoto from './indian_chess/group.avif';
import nihal from './indian_chess/nihal.jpg';

function IndianGM() {
  return (
    <div className="container">
      <div className="grandmasters-container">
      <div className="heading"><h2>Indian Grandmaster's</h2></div>
        <div className="grandmaster">
          <div className="gm gm1"><img src={vishyAnand} alt="Vishy Anand" /> <span><a target="_blank" href="https://en.wikipedia.org/wiki/Viswanathan_Anand">GM VishwNath Anand</a></span></div>
          <div className="gm gm4"><img src={prag} alt="Prag" /><span><a target="_blank" href="https://en.wikipedia.org/wiki/R_Praggnanandhaa">GM R. Praggnanandhaa	</a></span></div>
          <div className="gm gm3"><img src={gukesh} alt="Gukesh" /><span><a target="_blank" href="https://en.wikipedia.org/wiki/Gukesh_D">GM Gukesh Dommaraju	</a></span></div>
          <div className="gm gm2"><img src={arjunErigaisi} alt="Arjun Erigaisi" /><span><a target="_blank" href="https://en.wikipedia.org/wiki/Arjun_Erigaisi">GM Arjun Erigaisi	</a></span></div>
          <div className="gm gm5"><img src={vidhit} alt="Vidhit" /><span><a target="_blank" href="https://en.wikipedia.org/wiki/Vidit_Gujrathi">GM Vidit Gujrathi	</a></span></div>
          <div className="gm gm6"><img src={groupPhoto} alt="Group Photo" /><span><a target="_blank" href="https://en.wikipedia.org/wiki/Viswanathan_Anand">GM VishwNath Anand</a></span></div>
          <div className="gm gm7"><img src={nihal} alt="Nihal" /><span><a target="_blank" href="https://en.wikipedia.org/wiki/Nihal_Sarin">GM Nihal Sarin	</a></span></div>
        </div>
      </div>
    </div>
  );
}

export default IndianGM;
