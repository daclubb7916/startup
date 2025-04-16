import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { All_Events } from './all_events/all_events';
import { My_Events } from './my_events/my_events';


export default function App() {
    return (
        
        <BrowserRouter>
        <div className="body bg-light text-dark"> 
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark bg-primary">
          <div className="navbar-brand">
              Thats Whats Up<sup>&reg;</sup>
            </div>
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
          
        </header>
        
        
        <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/all_events' element={<All_Events />} />
        <Route path='/my_events' element={<My_Events />} />
        <Route path='*' element={<NotFound />} />
        </Routes>
        
  
        <footer className="bg-primary text-light mt-auto py-2">
        <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="text-reset">Dakota Clubb</span>
        <a className="text-light" href="https://github.com/daclubb7916/startup">GitHub</a>
        </div>
    </footer>

    </div>
    </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
  }