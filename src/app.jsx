import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        // I might need to replace body with div
        <body className="bg-light text-dark"> 
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Thats Whats Up<sup>&reg;</sup></a>
            <menu className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="index.html">Login</a></li>
              <li className="nav-item"><a className="nav-link" href="all_events.html">Events</a></li>
              <li className="nav-item"><a className="nav-link" href="my_events.html">Saved</a></li>
            </menu>
          </nav>
          <hr />
        </header>
  
        <main>App components go here</main>
  
        <footer className="bg-primary text-light">
      <div className="container-fluid">
      <span className="text-reset">Dakota Clubb</span>
      <a className="text-center text-light" href="https://github.com/daclubb7916/startup">GitHub</a>
    </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
    );
  }