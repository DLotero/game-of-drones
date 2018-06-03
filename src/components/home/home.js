import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import Game from '../game/game'
import History from '../history/history'
import styles from './home.scss'

const Home = () => {
  return (
    <Router>
      <div className="home__wrapper">
        <div className="home__inner-box">
          <div className="home__header">
            <div className="home__header-wrapper">
              <h2 className="home__header-text">GAME OF DRONES</h2>
            </div>
            <div className="home__options-wrapper">
              <ul>
                <li><Link to="/game">PLAY</Link></li>
                <li><Link to="/history">HISTORY</Link></li>
              </ul>
            </div>
          </div>
          <div className="home__game-wrapper">
            <Fragment>
              <Route path="/game" component={Game} />
              <Route path="/history" component={History} />
            </Fragment>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Home