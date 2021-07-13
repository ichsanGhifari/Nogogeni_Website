import { Route, Switch } from 'react-router';
import './App.css';
import  Home  from "./page/Home"


function App() {
  return (
      <>
          <Switch>
                <Route path='/' exact component={Home} />        
          </Switch>
      </>
  );
}

export default App;
