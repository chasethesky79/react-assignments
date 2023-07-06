import React, { useState } from 'react'

function App() {
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordCombination: '',
    email: '',
    errors: []
  })
  const { username, password, passwordCombination, email, errors } = state;
  const handleChange = (e) =>  setState({...state, [e.target.name]: e.target.value});
  const submitForm = () => console.log(`CURRENT STATE ${JSON.stringify(state)}`);
  return (
    <div>
      <h1>Create Account</h1>
      Username: <input type='text' name='username' value={username} onChange={handleChange}/><br/>
      Password: <input type='text' name='password' value={password} onChange={handleChange}/><br/>
      Password Combination: <input name='passwordCombination' type='text' value={passwordCombination} onChange={handleChange}/><br/>
      Email: <input type='text' name='email' value={email} onChange={handleChange}/><br/>
      <br/>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default App;
