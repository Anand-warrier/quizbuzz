import React, { useState ,useEffect} from 'react';
import {TextField,Button,TableContainer, Table, TableHead,TableBody, TableRow, TableCell,Typography }from '@mui/material';

import axios from 'axios'


const File = () => {
  var[datas,setData]=useState([])
  const [data, setDat] = useState('');
  const handleChange = (event) => {
    setDat(event.target.value);
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
 

  useEffect(()=>{
    axios.get('http://localhost:8000/tags').then((response)=>{
    setData(datas=response.data)
    console.log(response.data)
})
},[])
  
  return (
    <div>
     
  
    
      
        <div style={{paddingTop:'10px'}}>
        <Typography>
             <h1>Generate your tags!</h1> 
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
         <div style={{paddingTop:'10px'}}>
    
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><h1>List of tags</h1></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{
                datas.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{value.tag_name}</TableCell>
                            
              
    
                        </TableRow>
                    )
                })

                }
                </TableBody>
        </Table>
      </TableContainer>
         </div>
         <div style={{paddingTop:'100px'}}>
         <Typography>
             <h1>Status</h1> 
            </Typography>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Tag</TableCell>
                    <TableCell>Status</TableCell>
                </TableRow>
            </TableHead>
        </Table>
      </TableContainer>
    </div>
      
    </div>
    
  );
};



export default File;
