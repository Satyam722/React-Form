import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  // State for input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for validation status
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmValid, setIsConfirmValid] = useState(false);

  // Track if user has interacted
  const [emailTouched, setEmailTouched] = useState(false);

  // Validation: Email format check
  const handleEmailChange = (val) => {
    setEmail(val);
    setEmailTouched(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(val));
  };

  // Validation: Password length (min 8)
  const handlePasswordChange = (val) => {
    setPassword(val);
    setIsPasswordValid(val.length >= 8);
    setIsConfirmValid(val === confirmPassword && val !== '');
  };

  // Validation: Password match
  const handleConfirmChange = (val) => {
    setConfirmPassword(val);
    setIsConfirmValid(val === password && val !== '');
  };

  // Submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid && isConfirmValid) {
      alert("Form submitted successfully");
    } else {
      alert("Can't submit the form");
    }
  };

  return (
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            className={emailTouched ? (isEmailValid ? 'valid' : 'invalid') : ''} //
          />
          {!isEmailValid && emailTouched && <span className="error">Invalid email format</span>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            className={password !== '' ? (isPasswordValid ? 'valid' : 'invalid') : ''}
          />
          {!isPasswordValid && password.length > 0 && (
            <span className="error">Password must be at least 8 characters</span>
          )}
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => handleConfirmChange(e.target.value)}
            className={confirmPassword !== '' ? (isConfirmValid ? 'valid' : 'invalid') : ''}
          />
          {!isConfirmValid && confirmPassword.length > 0 && (
            <span className="error">Passwords do not match</span>
          )}
        </div>

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;