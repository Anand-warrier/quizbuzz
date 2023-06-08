import './App.css';
import Moderator from './components/Moderator';
import { Route, Routes } from 'react-router-dom';
import Moderator_signup from './components/Moderator_signup';
import Modequestion from './components/Modequestion';
import Homepage from './components/Homepage';
import File from './Components/File';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Quizlist from './pages/Quizlist';
import Quizpage from './pages/Quizpage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Sidebar from './pages/Sidebar';
import Login11 from './Components/Login1';
function App() {
    
  
  
  return (
    <div className="App">
      
      <Routes>
      

        <Route path="/"  element={<Homepage/>}/> 
         <Route path="/modsignup" element={<Moderator />}/>
         <Route path='/adminpage' element={<File/>}/>
         <Route path="/login_success" element={<Modequestion/>}/>
         <Route path="/modnewuser"  element={<Moderator_signup/>}/>
         <Route path="/dashboard" element={<Dashboard />} /> 
         <Route path="/profile" element={<Profile />} /> 
         <Route path="/attendquiz" element={<Quizpage/>}/> 
         <Route path="/quiz" element={<Quizlist/>}/> 
         <Route path="/user" element={<Login/>}/> 
         <Route path="/users" element={<Signup/>}/> 
         <Route path="/sidebar" element={<Sidebar/>}/> 
         <Route path="/adminlogin" element={<Login11/>}/> 
      </Routes>
    </div>
  );
}

export default App;
