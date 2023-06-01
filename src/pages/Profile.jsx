import React from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

function Profile() {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEditName = () => {
    console.log('Edit Name');
  };

  const handleEditPassword = () => {
    console.log('Edit Password');
  };

  const handleChangePassword = () => {
    console.log('Change Password');
    // Add password change logic here
  };

  const handleEditEmail = () => {
    console.log('Edit Email');
  };

  const handleEditPhone = () => {
    console.log('Edit Phone');
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', padding: '1rem' }}>
      <TextField
        label="Name"
        value={name}
        onChange={handleNameChange}
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <React.Fragment>
              <Button variant="contained" onClick={handleEditName}>
                Edit
              </Button>
              &nbsp;
              <Button variant="contained" onClick={() => console.log('Change Name')}>
                Change
              </Button>
            </React.Fragment>
          ),
        }}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password-field">Password</InputLabel>
        <Input
          id="password-field"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          endAdornment={
            <React.Fragment>
              <Button variant="contained" onClick={handleEditPassword}>
                Edit
              </Button>
              &nbsp;
              <Button variant="contained" onClick={() => console.log('Change Password')}>
                Change
              </Button>
            </React.Fragment>
          }
        />
      </FormControl>
      {password !== '' && (
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="confirm-password-field">New Password</InputLabel>
          <Input
            id="confirm-password-field"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <FormHelperText error>{/* Add password validation error message here */}</FormHelperText>
        </FormControl>
      )}
      <TextField
        label="Email"
        value={email}
        onChange={handleEmailChange}
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <React.Fragment>
              <Button variant="contained" onClick={handleEditEmail}>
                Edit
              </Button>
              &nbsp;
              <Button variant="contained" onClick={() => console.log('Change Email')}>
                Change
              </Button>
            </React.Fragment>
          ),
        }}
      />
      <TextField
        label="Phone Number"
        value={phone}
        onChange={handlePhoneChange}
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <React.Fragment>
              <Button variant="contained" onClick={handleEditPhone}>
                Edit
              </Button>
              &nbsp;
              <Button variant="contained" onClick={() => console.log('Change Phone')}>
                Change
              </Button>
            </React.Fragment>
          ),
        }}
      />
      <Button variant="contained" color='success' style={{ height: 40, padding:'20px' }} sx={{flexGrow:1 ,align:'justify'}}>
        APPLY 

      </Button>
    </Box>
  );
}

export default Profile;
