import React from 'react';
import './Donation.css'

const Donation = () => {
  // Sample data for demonstration, replace this with data fetched from the database
  const ngos = [
    { name: 'NGO 1', description: 'Description of NGO 1' },
    { name: 'NGO 2', description: 'Description of NGO 2' },
    { name: 'NGO 3', description: 'Description of NGO 3' }
  ];
  
  return (
    <div className="donation-grid-container">
      {/* Map through the array of NGOs and create a card for each */}
      {ngos.map((ngo, index) => (
        <div key={index} className="donation-card">
          <h2>{ngo.name}</h2>
          <p>{ngo.description}</p>
          <a href="https://buy.stripe.com/test_eVafZX8TW5nsbYs6oq" className="donate-button" target="_blank" rel="nofollow noopener">
            Donate Now                                </a>
        </div>
      ))}
    </div>
  );
}

export default Donation;
