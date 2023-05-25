import React, { useState } from 'react';
import {TextField,Button,TableContainer, Table, TableHead, TableRow, TableCell,Typography }from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios'


const File = () => {


  
  const [data, setData] = useState('');
  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit =  () => {
   
    // Send data to the API endpoint
    axios.post('http://localhost:8000/tags', { tag_name:data})
      .then((response) => {
        console.log(response.data); // Handle the response as needed
      })
      .catch((error) => {
        console.error(error);
      });
  
      
      
  };

  
  return (
    <div>
     
  
    
      
        <div style={{paddingRight:'1000px',paddingTop:'100px'}}>
        <Typography>
              Generate your tags!
            </Typography>
            <br />
            <TextField
              label="Tag name"
              value={data}
              onChange={handleChange}
            />
             <br/><br/>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
             Submit
            </Button>
        </div>
         <div>
         <h2>details</h2>    
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>tags/types</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
         </div>

      
    </div>
    
  );
};



export default File;
