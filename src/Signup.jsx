import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, RadioGroup,FormControl,FormLabel,Radio} from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Signup = () => {
    const paperStyle = { padding: '20px 20px', width: 300, margin: "0 auto" ,borderColor:''}
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
  return (
    <Grid>
    <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
            <Avatar style={avatarStyle}>
            
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <form>
            <TextField fullWidth label='Name' placeholder="Enter your name" />
            <TextField fullWidth label='Email' placeholder="Enter your email" />
            <FormControl component="fieldset" style={marginTop}>
                <FormLabel component="legend">Select the Role</FormLabel>
                <RadioGroup aria-label="role" name="role" style={{ display: 'initial' }}>
                    <FormControlLabel value="user" control={<Radio></Radio>} label="User" />
                    <FormControlLabel value="moderator" control={<Radio />} label="Moderator" />
                </RadioGroup>
            </FormControl>
            <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
            <TextField fullWidth label='Password' placeholder='Enter your password' type='password'/>
            <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" type='password'/>
            <FormControlLabel
                control={<Checkbox name="checkedA" />}
                label="I accept the terms and conditions."
            />
            <Button type='submit' variant='contained' color='primary'>Sign up</Button>
        </form>
    </Paper>
</Grid>
)
}

export default Signup