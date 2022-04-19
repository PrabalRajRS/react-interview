import { useContext, useEffect, useState } from 'react';
import Router from './Router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { UserContext } from './context';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const userContext = useContext(UserContext);
  return (
    <div className="main">
      <p>{userContext.currentPage}</p>
      <h2>Multi-step Form</h2>
      <Router />
    </div>
  );
};

export default App;
