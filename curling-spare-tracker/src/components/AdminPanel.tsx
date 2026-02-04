import React from 'react';

const AdminPanel = () => {
  const handleResetBookings = async () => {
    const response = await fetch('https://npdxjmsdpmyhqbsaznxz.functions.supabase.co/reset-bookings', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`,
      },
    });

    const text = await response.text();
    alert(text); // Shows "All bookings reset!" or error
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={handleResetBookings}>Reset All Bookings</button>
    </div>
  );
};

export default AdminPanel;