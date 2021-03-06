import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { HomePage, BoardPage, ScorePage } from '../../pages'
import styled from 'styled-components'

const StyledMain = styled.main`
 background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
`;

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="*">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

const Main = () => {
  const location = useLocation()

  return (
    <StyledMain>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Switch location={location}>
            <Route path="/home" children={<HomePage />} />
            <Route path="/board" children={<BoardPage />} />
            <Route path="/score" children={<ScorePage />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </StyledMain>
  )
}

