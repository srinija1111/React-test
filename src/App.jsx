import React from 'react';
import CreateTicket from './frontend/CreateTicket';
import TicketList from './frontend/TicketList';

function App() {
  return (
    <div className="App">
      <h1>Ticket System</h1>
      <CreateTicket />
      <TicketList />
    </div>
  );
}

export default App;