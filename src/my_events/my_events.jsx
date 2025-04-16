import React from 'react';
import './my_events.css'

export function My_Events() {
  return (
    <main className="container mt-2 pt-4">

      <div className="row">
        
        <div className="col-md-4 mb-4 text-center">
          <h2>Profile Picture:</h2>
          <img src="profile.jpeg" alt="Profile Picture" className="img-fluid rounded shadow-sm border border-secondary" />
        </div>
    
        
        <div className="col-md-8">
          <h2 className="mb-3">My Saved Events:</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle">
              <thead className="table-primary">
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Weather</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BYU vs Kansas St</td>
                  <td>08/20/2025</td>
                  <td>6:00 PM</td>
                  <td><span id="weather1">Cold</span></td>
                  <td>LES baby!</td>
                </tr>
                <tr>
                  <td>UVU Halloween Dance</td>
                  <td>10/31/2025</td>
                  <td>8:00 PM</td>
                  <td><span id="weather2">Hot</span></td>
                  <td>Gonna be boring</td>
                </tr>
                <tr>
                  <td>Aunt Kathy's B-day Party</td>
                  <td>05/06/2025</td>
                  <td>3:30 PM</td>
                  <td><span id="weather3">Just Right</span></td>
                  <td>Unbelievable non-stop excitement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}