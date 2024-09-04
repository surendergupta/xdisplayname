import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName.trim() && lastName.trim() && firstName.length > 0 && lastName.length > 0) {
      document.getElementById('display').innerHTML = `Full Name: ${firstName} ${lastName}`;
    }
    else
    {
      document.getElementById('display').innerHTML = ``;
    }
  }
  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className=''>
          <label>
            FirstName: 
            <input 
              className='' 
              type="text" 
              onChange={(e) => setFirstName(e.target.value)} 
              value={firstName} 
              placeholder='Enter first name' 
              required={true} 
            />
          </label>
        </div>
        <div className=''>
          <label>
            LastName: 
            <input 
              className=''  
              type="text" 
              onChange={(e) => setLastName(e.target.value)} 
              value={lastName} 
              placeholder='Enter last name' 
              required={true} 
            />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>

      <div id='display'></div>
    </div>
  );
}

export default App;
