import React, { useState } from 'react';

const AuthForm = ({ isRegister, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { firstName, lastName, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onChange}
              placeholder="Last Name"
              required
            />
          </>
        )}
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
      </form>
    </div>
  );
};

export default AuthForm;
