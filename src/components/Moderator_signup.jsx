import {React,useState} from 'react'
import {   Button, Icon, Typography } from '@mui/material'
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
const Moderator_signup = () => {

    const [showPassword, setShowPassword] = useState(false);
      
    const handleTogglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };
  return (
    <div
         style={{
       backgroundColor: "white",
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
           <div style={{ display: 'flex',justifyContent:"center"}}>
          <Avatar alt="In" src="D:\Quiz\quiz\src\login_logo.png" sx={{ width: 60, height: 60  }} />
          </div>
           <Typography style={{fontFamily:"-moz-initial",fontSize:"30px",}}>Create new account</Typography>
            
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
      <br />
      <Button color='success' variant='contained'  style={{width:"100%"}} ><Link  to ={'/'} style={{display: "inline-block"}} >Sign up</Link></Button>
    </div>
  )
}

export default Moderator_signup