import { Route, Switch } from 'react-router';
// import { Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import  Home  from "./page/Home"


function App() {
  return (
      <>
          <Navbar />
          <Switch>
                <Route path='/' exact component={Home} />
                
          </Switch>
      </>
  );
}

export default App;
