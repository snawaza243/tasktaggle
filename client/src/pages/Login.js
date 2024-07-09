import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <AuthForm isLogin={true} />
    </div>
  );
};

export default Login;
