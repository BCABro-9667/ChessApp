import React, { useState, useEffect } from 'react';
import './stylesheet/global.css';
import './stylesheet/chessProfile.css';

//Photos
import rapid from './img/rapid.png';
import bilitz from './img/bilitz.png';
import bullet from './img/bullet.png';
import puzzle from './img/puzzle.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const defaultAvatar = 'https://www.chess.com/bundles/web/images/user-image.007dad08.svg';
const loaderStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};
const spinnerStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  border: '5px solid transparent',
  borderTopColor: 'var(--mainColor)',
  animation: 'spin 1s linear infinite',
};

const ChessProfile = () => {
  const [userName, setUserName] = useState('magnuscarlsen');
  const [profileData, setProfileData] = useState(null);
  const [statsData, setStatsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

  useEffect(() => {
    if (userName) {
      const timer = setTimeout(() => {
        if (userName) fetchProfileData();
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [userName]);

  const fetchProfileData = async () => {
    if (!userName.trim()) {
      setError('Please enter a chess.com username.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const profileResponse = await fetch(`https://api.chess.com/pub/player/${userName}`);
      const statsResponse = await fetch(`https://api.chess.com/pub/player/${userName}/stats`);

      if (!profileResponse.ok || !statsResponse.ok) {
        throw new Error('Failed to fetch data.');
      }

      const profileData = await profileResponse.json();
      const statsData = await statsResponse.json();

      setProfileData(profileData);
      setStatsData(statsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getCountryFlagUrl = (countryUrl) => {
    const countryCode = countryUrl.split('/').pop().toLowerCase();
    return `https://flagcdn.com/48x36/${countryCode}.png`;
  };

  const handleCapsuleClick = (username) => {
    setUserName(username);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', position: 'relative' }}>
      <div className="heading heading2">
        <h2> Chess.com User Profile</h2>
      </div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter chess.com username"
        style={{ padding: '50px ', width: '950px', marginRight: '10px' }}
        className='user-enter'
      />
      <button onClick={() => fetchProfileData()} style={{ padding: '8px 16px', cursor: 'pointer' }} className='btn-success'>
        Get Profile
      </button>

      <div className="capsules">
        <button className='capsule' onClick={() => handleCapsuleClick('avdhesh_bcaa')}>Avdhesh Kumar</button>
        <button className='capsule' onClick={() => handleCapsuleClick('gukesh_coach')}>Ayush Saini</button>
        <button className='capsule' onClick={() => handleCapsuleClick('Hikaru')}>Hikaru</button>
        <button className='capsule' onClick={() => handleCapsuleClick('MagnusCarlsen')}>MagnusCarlsen</button>
        <button className='capsule' onClick={() => handleCapsuleClick('samayraina')}>samayraina</button>
        <button className='capsule' onClick={() => handleCapsuleClick('nihalsarin')}>nihalsarin</button>
        <button className='capsule' onClick={() => handleCapsuleClick('GothamChess')}>GothamChess</button>
        <button className='capsule' onClick={() => handleCapsuleClick('Sagar_Raina')}> Sagar Shah</button>
        <button className='capsule' onClick={() => handleCapsuleClick('TheVish')}> Viswanathan Anand</button>
      </div>

      {loading && (
        <div style={loaderStyle}>
          <div style={spinnerStyle}></div>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {profileData && !loading && (
        <div style={{ marginTop: '20px', textAlign: 'left' }} className='profile-container'>
          <img src={profileData.avatar || defaultAvatar} className='avtarPhoto' alt={`${profileData.username}'s avatar`} style={{ width: '150px', height: '150px' }} />
          <h3 className='profile-title-username'>
            <a
              href={`https://www.chess.com/member/${profileData.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className='profile-link'
            >
              {profileData.title ? (
                <span className='profile-title'>{profileData.title.toUpperCase()}</span>
              ) : null}
              <span className='profile-username'>{profileData.username}</span>
            </a>
          </h3>
          <div className="profile-details">
            <p><strong>Name:</strong> <br />{profileData.name || 'N/A'}</p>
            <p><strong>Followers:</strong> {profileData.followers || 'N/A'}</p>
            <p>
              <strong>Country:</strong>
              {profileData.country && (
                <span>
                  <img
                    src={getCountryFlagUrl(profileData.country)}
                    alt="Country flag"
                    style={{ width: '30px', marginLeft: '8px', verticalAlign: 'middle' }}
                  />
                </span>
              )}
            </p>
            <p><strong><FontAwesomeIcon icon={faLocationDot} className='faicon' /> Location:</strong> {profileData.location || 'N/A'}</p>
            <p><strong>League:</strong> {profileData.league || 'N/A'}</p>
          </div>
          <div className="online-status">
            {profileData.status === 'online' ? (
              <div className="online"><div className="onlin"></div>Online</div>
            ) : (
              <div className="offline"><div className="offl"></div>Offline</div>
            )}
          </div>
        </div>
      )}

      {statsData && !loading && (
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <div className=" heading2"><h4>Games Statistics</h4></div>
          <div className="games-rating">
            <p><strong><img src={rapid} alt="" height={40} /></strong> {statsData.chess_rapid ? statsData.chess_rapid.last.rating : 'N/A'}</p>
            <p><strong><img src={bilitz} alt="" height={40} /></strong> {statsData.chess_blitz ? statsData.chess_blitz.last.rating : 'N/A'}</p>
            <p><strong><img src={bullet} alt="" height={40} /></strong> {statsData.chess_bullet ? statsData.chess_bullet.last.rating : 'N/A'}</p>
            <p><strong><img src={puzzle} alt="" height={40} /></strong> {statsData.tactics ? statsData.tactics.highest.rating : 'N/A'}</p>
          </div>
        </div>
      )}

      <div className="container">
        <div className=" heading2"><h4>Last Played Game</h4></div>
        <iframe
          id="12068073"
          allowTransparency="true"
          frameBorder="0"
          title="Chess Game"
          // width="350"
          // height="400"
          src={`https://www.chess.com/emboard?id=12068073`}
        ></iframe>
      </div>
    </div>
  );
};

export default ChessProfile;
