import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import AppLogo from "./assets/applogo.png";
import ChatLogo from "./assets/chatlogo.png"

function App() {

  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post('https://bharathichatbot.onrender.com/chat', {message})
    .then((res) => {
      setResponse(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='wrapper'>
      <img src={AppLogo} alt='App' className='app-logo' />
      <form onSubmit={handleSubmit}>
        <img src={ChatLogo} alt='Chat' className={loading ? 'cg-logo loading' : 'cg-logo'} />
        <input 
         type='text'
         value={message}
         onChange={(e) => setMessage(e.target.value)}
         placeholder='Ask your doubts...'
        />
        <button type='submit'>Ask</button>
      </form>
      <p className='response-area'>
        {loading ? 'loading....': response}
          {/*Here will be response from AI...*/}
      </p>
      <div className='footer'>Bharathi Chatbot</div>
    </div>
  );
}

export default App;
