import React from 'react';

const Home = () => {
    return (
      <div className="home__wrapper">
        <div className="home__inner-box">
          <div className="home__header-wrapper">
            <h2 className="home__header-text">GAME-OF-DRONES</h2>
          </div>
          <div class="home__options-wrapper">
            <button>PLAY</button>
            <button>HISTORY</button>
          </div>
        </div> 
      </div>
    );
}


export default Home;
