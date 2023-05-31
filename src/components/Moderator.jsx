import {React,useState} from 'react'
import {  Box, Button, Icon, Typography ,Alert } from '@mui/material'
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { FormatAlignJustify, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Avatar from '@mui/material/Avatar';



const Moderator = () => {
        const [showPassword, setShowPassword] = useState(false);
      
        const handleTogglePasswordVisibility = () => {
          setShowPassword((prevShowPassword) => !prevShowPassword);
        };
  return (
    <div  style={{
      background:'linear-gradient(to left,#3cc8b3, #8c6e50)', height: '100vh'}}>
    <div 
        style={{
        backgroundColor:"transparent",
        backdropFilter: "blur(65px)",
        borderRadius: "30px 30px 30px 30px",
        boxShadow: "2px 2px 4px 2px rgba(0, 0, 0, 0.2)",
        border: "2px solid #000000",
        padding:"30px",
        margin: " ",
        position: 'fixed',
        alignContent:"center",
        position:"absolute",
        left: "50%",
        top:"50%",
        transform: "translate(-50%, -50%)",}}>
          <Link to="/">'
        <IconButton  aria-label="homepage" style={{ position: 'absolute', top: '-50px', left: '-450px',color:"black" }}>
          
          
        <ExitToAppIcon style={{ transform: 'scaleX(-1)' }}/>
     
    </IconButton>
    </Link>

          <div style={{ display: 'flex',justifyContent:"center"}}>
          <Avatar alt="In" src="./images/mod_login.png" sx={{ width: 60, height: 60  }} />
          </div>
           <Typography style={{fontFamily:"-moz-initial",fontSize:"30px",}}>Login</Typography> 
        
           
            
           <br />
           <TextField  label="Username"  size="medium" style={{width:'100%'}}  ></TextField> 
           <br />
           <br />
           <TextField
            
            label="Password"
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}></TextField>
      <br />

      <div style={{textAlign:"left"}}>
        <label >
        <input
          type="checkbox"  
        />
        Remember Me!
      </label>
      </div>

      <br />
      <br />
      <div style={{textAlign:"left"}}>
      <Button color='success' variant='contained'  style={{width:"100%"}} ><Link to ={'/login_success'} style={{ color: "white", textDecoration: "none" }} >Login</Link></Button>
      <br />
      <Typography style={{fontSize:'small', display: "inline-block",marginLeft:"0px",marginTop:"-20px"}}>or</Typography>
      
      <Button variant='text'><Link  to ={'/modnewuser'} style={{display: "inline-block"}} replace>Sign up</Link></Button>
      <br/>
      <Button variant='text' style={{display: "inline-block"}} >Forgot password</Button>
      </div>

      

     

      </div>              
</div>

            
  )
}

export default Moderator