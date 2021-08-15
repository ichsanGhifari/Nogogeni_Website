import { Route, Switch } from 'react-router-dom';

import './App.css';
import  Home  from "./page/Home"
import Mark1 from './page/Mark1';
import NogogeniEvo from './page/NogogeniEvo';
import NogogeniM2 from './page/NogogeniM2';
import Team from './page/Team';
import Event from './page/Event';
import Achievment from './page/Achievment';
import Partner from './page/Partner';
import Gallery from './page/Gallery';
import Contact from './page/Contact';

function App() {
  return (
      <>
          <Switch>
                <Route path='/' exact component={Home} />   
                <Route path='/Mark1' exact component={Mark1}/>
                <Route path='/NogogeniM2' exact component={NogogeniM2}/>
                <Route path='/NogogeniEvo' exact component={NogogeniEvo}/>
                <Route path='/Team' exact component={Team} />
                <Route path='/Event' exact component={Event} />
                <Route path='/Achievment' exact component={Achievment} />
                <Route path='/Partner' exact component={Partner}/>
                <Route path='/Gallery' exact component={Gallery}/>
                <Route path='/Contact' exact component={Contact} />
          </Switch>
      </>
  );
}

export default App;
