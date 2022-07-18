import './App.css';
import Signup from './components/Signup';
import {BrowserRouter as Router,Switch,Route,BrowserRouter, Routes} from 'react-router-dom';
import Login from './components/Login';
import {AuthProvider} from './context/AuthContext'
import Feed from './components/Feed';
import PrivateRouter from './components/PrivateRouter'; 

function App() {
  return (
    <Router>
        <AuthProvider>
          <Routes>
              <Route path="/" element={<PrivateRouter/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/> 
          </Routes>
        </AuthProvider>
    </Router>
  );
}
export default App;

