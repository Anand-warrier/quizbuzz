import React, { useState } from 'react';
import { Tabs, Tab, Typography, Backdrop, Autocomplete, TextField, Button,Table, TableHead, TableRow, TableCell,IconButton, Link } from '@mui/material';
import { Box } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { Link } from 'react-router-dom';
import axios from 'axios';


const Modequestion = () => {
 

  
  const [activeTab, setActiveTab] = useState(0);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const handleBackdropClose = () => {
    setShowBackdrop(false);
    setActiveTab(0);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === 1) {
      setShowBackdrop(true);
    }
    
    
    else {
      setShowBackdrop(false);
    }
  };

  const [selectedTags, setSelectedTags] = useState([]);
  const handleTagChange = (event, value) => {
    setSelectedTags(value);
  };

  const [numQuestions, setNumQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

  const handleNumQuestionsChange = (event) => {
    const count = parseInt(event.target.value);
    setNumQuestions(count);
    setQuestions(Array(count).fill({ question: '', options: ['', '', '', ''] , correctOption: 1}));
  };

  const handleQuestionChange = (event, questionIndex) => {
    const { value } = event.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        question: value,
      };
      return updatedQuestions;
    });
  };
  
  const handleOptionChange = (event, questionIndex, optionIndex) => {
    const { value } = event.target;
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        options: updatedQuestions[questionIndex].options.map((option, idx) =>
          idx === optionIndex ? value : option
        ),
      };
      return updatedQuestions;
    });
  };
  

  const handleCorrectOptionChange = (event, questionIndex) => {
    const value = parseInt(event.target.value);
    if (value >= 1 && value <= 4) {
      const updatedQuestions = [...questions];
      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        correctOption: value,
      };
      setQuestions(updatedQuestions);
    }
  };
  const handleSubmit = () => {
    const formattedQuestions = questions.map((questionObj) => {
      return {
        question: questionObj.question,
        options: questionObj.options,
        correctOption: questionObj.correctOption,
        Tag:selectedTags
      };
    });
    // Send the formattedQuestions to the database or perform other operations
    console.log('Formatted Questions:', formattedQuestions);
  
    setNumQuestions(0);
    setQuestions([]);
    setShowBackdrop(false);
    setActiveTab(0);
  };

  return (
    <div >
       
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="secondary"
        textColor="primary"
       
        variant='fullWidth'
      >
        <Tab label="Attendee details" />
        <Tab label="Assign questions" />
        <Tab
        style={{ flex: '0 0 auto', minWidth: '80px' }}
  label={
    <Box sx={{ display: 'flex', alignItems: 'center',flexDirection:"Row" }}>
      <Typography variant="body2" sx={{ marginRight: 1}}>
        Sign Out
      </Typography>
      <Link to={"/hey"}>
      <IconButton sx={{ mt: 2,  marginTop:0}}  >
        <ExitToAppIcon />
      </IconButton>
      </Link>
    </Box>
  }
/>
        

        
        
      </Tabs>

    
      

      <TabPanel value={activeTab} index={1}>
        
        <Backdrop open={showBackdrop}>
          <Box p={3} width={300} height={500} bgcolor="white" sx={{ overflowY: 'auto' }}>
          <IconButton onClick={handleBackdropClose} style={{  right: 150, top: 0 }}>
              <ArrowBackIcon />
            </IconButton>
            <Typography style={{ fontFamily: 'cursive', fontSize: '25px', color: 'tan' }}>
              Type in quizes!
            </Typography>
            <Autocomplete
              multiple
              options={[
                'Science',
                'Sports',
                'General Knowledge',
                'History',
                'Geography',
                'Maths',
                'Dates',
                'Arts and Culture',
                'Modern Technology',
                'Movies,Books & TV Shows ',
                'Funny',
              ]}
              value={selectedTags}
              onChange={handleTagChange}
              renderInput={(params) => <TextField {...params} label="Select a tag" sx={{ width: '100%' }} />}
            />
            <br />
            <TextField
              label="Number of Questions"
              type="number"
              value={numQuestions}
              onChange={handleNumQuestionsChange}
              sx={{ width: '100%' }}
              
            />

            {questions.map((questionObj, questionIndex) => (
              <div key={questionIndex} style={{ marginTop: '20px' }}>
                <TextField
                  label={`Question ${questionIndex + 1}`}
                  value={questionObj.question}
                  onChange={(event) => handleQuestionChange(event, questionIndex)}
                  sx={{ width: '100%' }}
                />

                {questionObj.options.map((option, optionIndex) => (
                  <div key={optionIndex } style={{ marginTop: '5px' }}>
                    <TextField
                      label={`Option ${optionIndex + 1}`}
                      value={option}
                      onChange={(event) =>
                        handleOptionChange(event, questionIndex, optionIndex)
                      }
                      sx={{ width: '100%' }}
                    />
                  </div>
                ))}
                <br />
                <TextField
                  label="Correct Option"
                  type="number"
                  value={questionObj.correctOption}
                  onChange={(event) => handleCorrectOptionChange(event, questionIndex)}
                  sx={{ width: '100%' }}
                />
              </div>
              
            ))}
             <Button variant="contained"  color='success' sx={{ marginTop: '20px' }} style={{width:"100%"}}  onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Backdrop>
      </TabPanel>
      <TabPanel value={activeTab} index={0}>
        <h2>Attendee details</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>  Name of participant </TableCell>
              <TableCell>  Email id </TableCell>
              <TableCell>  Quiz type</TableCell>
              <TableCell>  Score </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TabPanel>
     
      


          
          
     
      <br />

      
    </div>
  );
};

function TabPanel({ children, value, index }) {
  return (
    <Typography component="div" role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export default Modequestion;
