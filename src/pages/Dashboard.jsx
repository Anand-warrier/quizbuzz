import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Grid,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';
import Notifications from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Dashboard = () => {
  // Sample quiz data
  const quizHistory = [
    { name: 'Sports Quiz 1', score: 80 },
    { name: 'Politics Quiz 1', score: 75 },
    { name: 'Science Quiz 1', score: 90 },
    // Add more quiz history data here
  ];

  return (
    <div>
      <AppBar position="static" sx={{ marginBottom: '20px' }}>
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">

          </Typography>

          <div>
            <IconButton color="inherit" size="large">
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>

            <IconButton color="inherit" size="large">
              <Avatar alt="User Profile" src="/path/to/profile-picture.jpg" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5" component="h2">
              Number of Quizzes Attended
            </Typography>
            <Typography variant="h3" component="p">
              10
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5" component="h2">
              Current Ranking
            </Typography>
            <Typography variant="h3" component="p">
              5
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h5" component="h2">
              Number of Badges Received
            </Typography>
            <Typography variant="h3" component="p">
              3
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h5" component="h2" sx={{ mt: 4}}>
        Quiz History
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Quiz Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quizHistory.map((quiz, index) => (
              <TableRow key={index}>
                <TableCell>{quiz.name}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined" size="small">
                    View Score
                  </Button>
                  <Button variant="outlined" size="small">
                    Retry
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
