import React from 'react';
import SignupForm from './components/SignupForm';
import  './components/SignupForm.css'; 
import './App.css';

function App() {
  return (
    <div className="App">
      {/* This renders your validated signup form */}
      <SignupForm />
    </div>
  );
}

export default App;