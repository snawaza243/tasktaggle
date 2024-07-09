import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
        <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={AdminPanel} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
