import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import dotenv from 'dotenv';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const style = {
    pageContainer: {
      height: '100vh',
      width: '100vw',
      backgroundColor: '#d2303b',
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  
  };
  
  const Landing = () => {
    const navigate = useNavigate()
  
  
  
    //set username to default name if one isnt set
    const [username, setUsername] = useState('anonymous_One');
  
    const handleSetUsername = (inputText) => {
      setUsername(inputText); // Update the state variable with the new text
    };
  
  
  
    const handleClick = () => {
  
      //const data2send = { name: username, colours: colours };
      //navigate('/feed',{state:data2send});
      navigate('/registration');
  
    };
  
  
    
  
  
    return (
      
  
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={5}
        style={style.blackCenterFull}
  
      >
  
  
  
     
        <Typography style={style.title} variant="h2" gutterBottom>
          Dashboard
        </Typography>
  
  
  
  
      
      <Box>
  
        <Button
        style= {style.roundedEdge}
        variant="outlined"
         onClick={() => {
           handleClick()
  
          }}
        >
        Registration</Button>
  
        </Box>
  
      </Stack>
  
  
  
  
  
    );
  };
  
  export default Landing;