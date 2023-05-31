import React from 'react'
import {  Button, Typography ,IconButton} from '@mui/material'
import { Link } from 'react-router-dom'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


const Homepage = () => {
  return (
    
        <div style={{ display: 'flex', height: '100vh' }}>
          <img src="./images/quizbuzzlogo.png" alt="" style={{ position: 'absolute', top: '20px', left: '20px', width: '200px',height:"75px" }}/>
      <div style={{ flex: 1.2, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(to left,#73c8a9, #2c3e50)'}}>
        <div >
        <Typography variant='h1 ' style={{fontFamily:"-moz-initial",fontSize:"25px",color:"whitesmoke" ,textAlign:"start"}}>Ready to Quiz? Unleash Your Knowledge</Typography>
        <br />
        <br />
        <br />
        <br />
        <Typography variant='h4' style={{fontFamily: "revert-layer",fontSize:"20px",color:"#eaeaea" ,textAlign:"center"}}>
  Welcome to our quiz platform, where information meets entertainment! Prepare yourself for a thrilling journey of learning, exploration, and self-discovery or challenge others!
</Typography>

        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',background: 'linear-gradient(to left, #73c2c7, #2c3e54)' }}>
        <div >
          <Button  variant="contained" style={{borderRadius:"20" ,backgroundColor:"darkmagenta",fontFamily:"cursive",width:"500px"}}><Link  to ={'modsignup'}  style={{ color: "white", textDecoration: "none" }}>Attend Quiz</Link></Button>
          <br />
          <br />
          <br />
          <Button  variant="contained" style={{borderRadius:"20" ,backgroundColor:"tomato",fontFamily:"cursive",width:"500px"}}><Link  to ={'modsignup'}  style={{ color: "white", textDecoration: "none" }}>Generate Quiz</Link></Button>

        </div>
        <Link to="adminpage">'
        <IconButton  aria-label="Admin" style={{ position: 'absolute', top: '590px', left: '1200px'  }}>
          
      <AdminPanelSettingsIcon />
     
    </IconButton>
    </Link>
    
      </div>
     
      </div>
  )
}

export default Homepage