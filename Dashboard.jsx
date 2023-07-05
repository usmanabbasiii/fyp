import React, { useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Routes from './components/Routes/Routes';
import Stops from './components/Stops/Stops';
import TripPlanner from './components/TripPlanner/TripPlanner';
import Home from './Screens/Home';
import Schedule from './components/Schedule/Schedule';

function Dashboard() {
  const [routes, setRoutes] = useState([]);
  const [stops, setStops] = useState([]);
  const [tripPlanner, setTripPlanner] = useState([]);
  const [schedule, setSchedule] = useState([]);

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/routes">Routes</Link></li>
          <li><Link to="/stops">Stops</Link></li>
          <li><Link to="/trip-planner">Trip Planner</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/routes">
          <Routes routes={routes} setRoutes={setRoutes} />
        </Route>
        <Route path="/stops">
          <Stops stops={stops} setStops={setStops} />
        </Route>
        <Route path="/trip-planner">
          <TripPlanner tripPlanner={tripPlanner} setTripPlanner={setTripPlanner} />
        </Route>
        <Route path="/schedule">
          <Schedule schedule={schedule} setSchedule={setSchedule} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
