import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/hotels.css';
import axios from 'axios';

interface Room {
  roomType: string;
  amount: number;
}

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: Room[];
}

const HotelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/hotels/${id}`);
        setHotel(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Hotel Not Found.');
      } finally {
        setLoading(false);
      }
    };

    fetchHotelDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="error-container">
        <h2>Hotel not found!</h2>
      </div>
    );
  }

  return (
    <div className="hotel-details-container">
      <h1 className="hotel-name">{hotel.name}</h1>
      <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
      <p className="hotel-location"><strong>Location:</strong> {hotel.location}</p>
      <p className="hotel-rating"><strong>Rating:</strong> {hotel.rating} ⭐</p>
      <p className="hotel-boardBasis"><strong>Board Basis:</strong> {hotel.boardBasis}</p>
      <div className="hotel-dates">
        <h3>Dates of Travel:</h3>
        <ul>
          {hotel.datesOfTravel.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
      <div className="hotel-rooms">
        <h3>Available Rooms:</h3>
        <ul>
          {hotel.rooms.map((room, index) => (
            <li key={index}>
              {room.roomType} - {room.amount} available
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotelDetails;
