import Home from "./Home";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Nauka from "./nauka";
import React from "react";
import Zabawa from "./zabawa";
import AddNewQuiz from "./add-new-quiz";
import CreateNewQuiz from "./create-new-page-nauka";
import Ranking from "./ranking";
// import {BrowserRouter, Switch, Route} from "react-router-dom";
import TryQuiz from "./try-quiz";

function App() {
  return (<>
      <Router>
        <nav className="page-header">
          <div className="container header-background">
            <div className="level header-menu-bar">
              <div className="level-left">
                <Link to="/home"><a href="" className="logo level-item has-text-centered"><p
                    className="header-logo-first-part">Quiz</p>
                  <p className="header-logo-second-part">Time</p> </a></Link>

              </div>
              <div className="level-right header-navigation" id="menu-navigation-bar">
                <a href="" className="level-item has-text-centered header-navigation-item"><Link
                    to="/nauka">Nauka</Link></a>
                <a href="" className="level-item has-text-centered header-navigation-item"><Link
                    to="/zabawa">Zabawa</Link></a>
                <a href="" className="level-item has-text-centered header-navigation-item"><Link
                  to="/ranking">Ranking</Link></a>
              </div>
            </div>
          </div>
        </nav>
          <Switch>

            <Route exact path="/nauka">
              <Nauka/>
            </Route>
            <Route exact path="/zabawa">
              <Zabawa/>
            </Route>
            <Route exact path="/ranking">
              <Ranking/>
            </Route>
            <Route path="/nauka/create-new-quiz"><CreateNewQuiz/></Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/try-quiz">
              <TryQuiz/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
      </Router>

      </>

  )
}

export default App;

