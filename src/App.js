import './App.css';
import Moderator from './components/Moderator';
import { Route, Routes } from 'react-router-dom';
import Moderator_signup from './components/Moderator_signup';
import Modequestion from './components/Modequestion';
function App() {
    
  
  
  return (
    <div className="App">
      
      <Routes>
      <Route path="/hey" element={<Moderator/>}/>

        <Route path="/"  element={<Moderator/>}/> 
         <Route path="signup" element={<Moderator_signup />}/>
         <Route path="login_success" element={<Modequestion/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
