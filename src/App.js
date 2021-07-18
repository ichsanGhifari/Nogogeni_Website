import { Route, Switch } from 'react-router-dom';

import './App.css';
import  Home  from "./page/Home"
import Mark1 from './page/Mark1';
import NogogeniEvo from './page/NogogeniEvo';
import NogogeniM2 from './page/NogogeniM2';


function App() {
  return (
      <>
          <Switch>
                <Route path='/' exact component={Home} />   
                <Route path='/Mark1' exact component={Mark1}/>
                <Route path='/NogogeniM2' exact component={NogogeniM2}/>
                <Route path='/NogogeniEvo' exact component={NogogeniEvo}/>     
          </Switch>
      </>
  );
}

export default App;
