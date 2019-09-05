import React from 'react';
import styles from './App.module.css';
import Nav from './components/nav/Nav';
import { withRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Team from './pages/team/Team';

const App = ({ location }) => {
  return (
    <div className={styles.App}>
      <Nav isHome={location.pathname === '/'}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} /> 
        <Route path="/projects/:name?" component={Projects} />
        <Route path="/team" component={Team} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
