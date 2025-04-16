import React from 'react';
import './all_events.css'

export function All_Events() {
  return (
    <main className="split">
      <section className="p-4">
        <div className="mb-3">
          <h1>Events:</h1>
          <p>Welcome, <strong className="player-name">playa</strong>!</p>
        </div>
      
        <div className="card">
          <div className="card-body">
            <table className="table table-striped table-hover">
              <thead className="table-primary">
                <tr>
                  <th>Event</th>
                  <th>Date</th>
                  <th># Users attending</th>
                  <th>RSVP</th> 
                </tr>             
              </thead>
              <tbody>
                <tr>
                  <td>
                    <button className="btn btn-link p-0 event-link" type="button">BYU vs Kansas St</button>
                  </td>
                  <td>08/20/2025</td>
                  <td>70,000</td>
                  <td>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="attendance1" />
                      <label className="form-check-label" htmlFor="attendance1">Attending</label>
                    </div>
                  </td>
                </tr>
      
                <tr>
                  <td>
                    <button className="btn btn-link p-0 event-link" type="button">UVU Halloween Dance</button>
                  </td>
                  <td>10/31/2025</td>
                  <td>4</td>
                  <td>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="attendance2" />
                      <label className="form-check-label" htmlFor="attendance2">Attending</label>
                    </div>
                  </td>
                </tr>
      
                <tr>
                  <td>
                    <button className="btn btn-link p-0 event-link" type="button">Aunt Kathy's B-day Party</button>
                  </td>
                  <td>05/06/2025</td>
                  <td>430</td>
                  <td>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="attendance3" />
                      <label className="form-check-label" htmlFor="attendance3">Attending</label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
          

      
      <section className="p-4">
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h2 className="mb-0">Add an Event</h2>
          </div>
          <div className="card-body">
            <form action="/submit-event" method="POST">
              <div className="mb-3">
                <label for="eventName" className="form-label">Event Name</label>
                <input type="text" className="form-control" id="eventName" name="eventName" required />
              </div>
      
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label for="eventDate" className="form-label">Date</label>
                  <input type="date" className="form-control" id="eventDate" name="eventDate" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label for="eventTime" className="form-label">Time</label>
                  <input type="time" className="form-control" id="eventTime" name="eventTime" required />
                </div>
              </div>
      
              <div className="mb-3">
                <label for="eventDetails" className="form-label">Details</label>
                <textarea className="form-control" id="eventDetails" name="eventDetails" rows="4" placeholder="Optional notes or description..."></textarea>
              </div>
      
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Add Event</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      
    </main>
  );
}