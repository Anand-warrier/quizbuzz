import React ,{useState} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockSharpIcon from '@mui/icons-material/LockSharp';
import { useNavigate } from 'react-router-dom';
const Login1=()=>{
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (username === 'admin' && password === 'admin') {
      // Successful login, perform desired action (e.g., redirect)
      navigate('/adminpage')
    } else {
      setError('Invalid username or password');
    }
  };




    const paperStyle={padding :20,height:'30vh',width:300, margin:"0 auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockSharpIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username-admin' onChange={(e) => setUsername(e.target.value)}placeholder='Enter username' fullWidth required/><br/><br/>
                <TextField label='Password-admin' onChange={(e) => setPassword(e.target.value)}placeholder='Enter password' type='password' fullWidth required/>
               
                <Button type='submit' color='primary' variant="contained" style={btnstyle} onClick={handleSubmit} fullWidth>Sign in</Button>
                <br></br><br></br>
                
                <br></br>
               
            </Paper>
        </Grid>
    )
}

export default Login1
/*


  

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{error}</div>}
      <label>
        Username:
        <input
          type="text"
          value={username}
          }
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
*/ 