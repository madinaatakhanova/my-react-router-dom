import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import History from './History';
import Team from './Team';

const About = ({ match }) => {
  return (
    <div>
      <h2>About Us</h2>
      <ul>
        <li>
          <Link to={`${match.url}/history`}>History</Link>
        </li>
        <li>
          <Link to={`${match.url}/team`}>Team</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/history`} component={History} />
        <Route path={`${match.path}/team`} component={Team} />
      </Switch>
    </div>
  );
};

export default About;
