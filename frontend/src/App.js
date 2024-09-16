import React, { useState, useEffect } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // Make a request to the backend
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => setBackendMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Frontend and Backend Connection Test</h1>
      <p>{backendMessage}</p>
    </div>
  );
}

export default App;
