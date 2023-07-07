import React, { useState } from 'react'
import styles from './App.css'

function App() {
  const intiialState = {
    username: '',
    password: '',
    passwordCombination: '',
    email: '',
    errors: []
  };
  const [state, setState] = useState(intiialState)
  const { username, password, passwordCombination, email, errors } = state;
  const handleChange = (e) =>  {
    const {target: { name, value } } = e;
    if (!value) {
      const errorMsg = `${name} is required`;
      setState({ ...state, errors: [ ...state.errors, errorMsg ]})
      return;
    }
    setState({...state, [name]: value });
  }
  const submitForm = (e) => {
    e.preventTarget();
    setState(intiialState)
  }
  return (
      <div>
        <h1>Create Account</h1>
        { state.errors.map((error, index) => <div key={`err-${index}`} className={styles.errors}>{error}</div>)}
        Username: <input type='text' name='username' value={username} onBlur={handleChange}/><br/>
        Password: <input type='text' name='password' value={password} onBlur={handleChange}/><br/>
        Password Combination: <input name='passwordCombination' type='text' value={passwordCombination} onBlur={handleChange}/><br/>
        Email: <input type='text' name='email' value={email} onBlur={handleChange}/><br/>
        <br/>
        <button disabled={state.errors.length > 0} onClick={submitForm}>Submit</button>
      </div>
  );
}

export default App;
