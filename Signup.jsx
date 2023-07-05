import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation here (e.g., check if fields are filled, email format is valid, etc.)
    // If validation passes, you can perform further actions (e.g., submit the form)

    console.log('Submitted');
  };

  return (
    <div
      style={{
        backgroundImage: 'url("https://example.com/your-image-url.jpg")',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
        <form
          onSubmit={handleSubmit}
          style={{ backgroundColor: 'white', padding: '20px', display: 'flex', flexDirection: 'column' }}
        >
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ borderColor: firstName ? 'initial' : 'blue', marginLeft: 50 }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ borderColor: lastName ? 'initial' : 'blue', marginLeft: 50 }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderColor: email ? 'initial' : 'blue', marginLeft: 85 }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderColor: password ? 'initial' : 'blue', marginLeft: 55 }}
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="confirmPassword" style={{ marginRight: 4 }}>
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ borderColor: confirmPassword ? 'initial' : 'blue' }}
            />
          </div>
          <div style={{ display: 'flex', textAlign: 'center', justifyContent: 'center' }}>
            <button type="submit" style={{ borderRadius: 20, width: 200, marginLeft: 200, marginRight: 60, marginTop: 30 }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;



