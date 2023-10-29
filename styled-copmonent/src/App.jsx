import React, { useState } from 'react'
import GlobalStyles from "./GlobalStyles";
import styled from 'styled-components';



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;

  @media (min-width: 768px) {
    padding: 12px;
  }

  &:hover {
    border-color: #3498db;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (min-width: 768px) {
    padding: 12px;
  }

  &:hover {
    background-color: #2e86de;
  }
`;


const App = () => {

  const [inputs,setInputs] = useState({username:'',password:''})
 
  const handleChange=(e)=>{
    const {name ,value} = e.target
     setInputs({...inputs,[name]:value})
  }

  const validate = (item)=>{
    const error = {};
    
    if(!/^[a-zA-Z0-9]{3,20}$/.test(username)){
      error.username = 'the username matches the pattern'
    }

    if(!/^\d*\.?\d+$/.test(password)){
      error.password = 'password including at least one uppercase letter, one lowercase letter, one number, and one special character.'
    }

    return error;
  }


  const submit =(e)=>{
    e.preventDefault();

    const newErr = validate(inputs)

    if(Object.keys(newErr).length ===0){
      localStorage.setItem('loginCredentials',inputs)
    }
  }
 
  return (
  
    <Container>

    <GlobalStyles />


     <FormContainer onSubmit={submit}>
      <h4> Login form</h4>
      <Input 
        placeholder='username'
        type='text'
        name='username'
        value={inputs.username}
        onChange={handleChange}
      />

       <Input 
        placeholder='password'
        type='text'
        name='password'
        value={inputs.password}
        onChange={handleChange}
      />


      <Button type='submit'>submit</Button>
     </FormContainer>


     </Container>
      
    
  )
}

export default App
