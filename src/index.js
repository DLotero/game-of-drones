import React, { Fragment } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import Game from './components/game/game'
import History from './components/history/history'

const Home = () => {
  return (
    <Router>
      <div className="home__wrapper">
        <div className="home__inner-box">
          <div className="home__header-wrapper">
            <h2 className="home__header-text">GAME-OF-DRONES</h2>
          </div>
          <div class="home__options-wrapper">
            <ul>
              <li><Link to="/game">PLAY</Link></li>
              <li><Link to="/history">HISTORY</Link></li>
            </ul>
          </div>
        </div>
        <Fragment>
          <Route path="/game" component={Game} />
          <Route path="/history" component={History} />
      </Fragment>
      </div>
    </Router>
  );
}

ReactDOM.render(<Home />, document.getElementById('root'));



