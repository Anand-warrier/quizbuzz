import './App.css';
import Moderator from './Moderator';
import { Route, Routes } from 'react-router-dom';
import Moderator_signup from './Moderator_signup';
import Modequestion from './Modequestion';
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
