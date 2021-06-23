import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Cart from './Pages/Cart'
import Products from './Pages/Products'
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Products} />
          <Route path='/cart' exact component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;