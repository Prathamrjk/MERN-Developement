import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/screens/Home';
import Signup from './components/screens/Signup';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import BankUser from './components/screens/BankUsers';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Transaction from './components/screens/Transaction';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Route exact path ="/">
          <BankUser/>
        </Route>

        <Route path="/signup">
          <Signup/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/transaction_step2">
          <Transaction/>
        </Route>


    </BrowserRouter>


  );
}

export default App;
