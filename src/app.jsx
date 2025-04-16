import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { All_Events } from './all_events/all_events';
import { My_Events } from './my_events/my_events';


export default function App() {
    return (
        // I might need to replace body with div
        <BrowserRouter>
        <div className="body bg-light text-dark"> 
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Thats Whats Up<sup>&reg;</sup></a>
            <menu className="navbar-nav">
              <li className="nav-item">
              <NavLink className='nav-link' to="">Login</NavLink>
                </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="all_events">All_Events</NavLink>
                </li>
              <li className="nav-item">
              <NavLink className='nav-link' to="my_events">My_Events</NavLink>
                </li>
            </menu>
          </nav>
          <hr />
        </header>
  
        <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/all_events' element={<All_Events />} />
        <Route path='/my_events' element={<My_Events />} />
        <Route path='*' element={<NotFound />} />
        </Routes>
  
        <footer className="bg-primary text-light">
      <div className="container-fluid">
      <span className="text-reset">Dakota Clubb</span>
      <a className="text-center text-light" href="https://github.com/daclubb7916/startup">GitHub</a>
    </div>
    </footer>
    </div>
    </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }