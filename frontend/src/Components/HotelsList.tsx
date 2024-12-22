import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Styles/hotelslist.css'; // Correctly import the CSS file

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: { roomType: string; amount: number }[];
}

const HotelsList = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/hotels'); // Use Axios to fetch data
        setHotels(response.data);
      } catch (error) {
        setError('Hotel Not Found.');
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) return <p className="loading-text">Loading...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="hotels-list-container">
      <h1>Hotels Available</h1>
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-card">
          <Link to={`/hotels/${hotel.id}`} className="hotel-link">
            <img className="hotel-image" src={hotel.imageUrl} alt={hotel.name} onError={(e) => console.error('Image load error:', e)} />
            <div className="hotel-details">
              <h2 className="hotel-name">{hotel.name}</h2>
              <p className="hotel-location">Location: {hotel.location}</p>
              <p className="hotel-rating">Rating: {hotel.rating}</p>
           
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HotelsList;
