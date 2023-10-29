
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
  }

  form {
    width: 80%;
    max-width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  input {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s;
  }

  input:hover {
    border-color: #3498db;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2e86de;
  }
`;

export default GlobalStyles;
