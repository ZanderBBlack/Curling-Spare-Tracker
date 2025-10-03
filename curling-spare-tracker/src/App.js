import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [spares, setSpares] = useState([]);

  useEffect(() => {
    fetchSpares();
  }, []);

  async function fetchSpares() {
    const { data, error } = await supabase
      .from('spares')
      .select('*');

    if (error) {
      console.error('Error fetching spares:', error);
    } else {
      setSpares(data);
    }
  }

  async function toggleBooking(id, newStatus) {
    const { error } = await supabase
      .from('spares')
      .update({ isBooked: newStatus })
      .eq('id', id);

    if (error) {
      console.error('Error updating booking:', error);
    } else {
      fetchSpares(); // Refresh the list after update
    }
  }

  return (
    <div className="App">
      <h1>Curling Spare Tracker</h1>
      <ul>
        {spares.map(spare => (
          <li key={spare.id}>
            <label>
              <input
                type="checkbox"
                checked={spare.isBooked}
                onChange={() => toggleBooking(spare.id, !spare.isBooked)}
              />
              {spare.name} — {spare.isBooked ? 'Booked' : 'Available'}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;