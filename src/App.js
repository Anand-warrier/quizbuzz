import './App.css';
import Moderator from './components/Moderator';
import { Route, Routes } from 'react-router-dom';
import Moderator_signup from './components/Moderator_signup';
import Modequestion from './components/Modequestion';
import Homepage from './components/Homepage';
import Approval from './components/Approval';

function App() {
    
  
  
  return (
    <div className="App">
      
      <Routes>
      

        <Route path="/"  element={<Homepage/>}/> 
         <Route path="modsignup" element={<Moderator />}/>
         <Route path='adminpage' element={<Approval/>}/>
         <Route path="login_success" element={<Modequestion/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
