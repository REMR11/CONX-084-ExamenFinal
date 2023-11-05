import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar'

import Home from './Pages/Home';
import Store from './Pages/Store';
function App() {
  return (
    <Router>
      <div className="App bg-slate-300">
        <Navbar />
        <div className='flex flex-row'>
          <Sidebar />
          <Switch>
            <Route path='/' element={<Home />}/>
            <Route path='/Store' element={<Store />}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
