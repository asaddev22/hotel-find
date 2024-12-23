import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/hotels.css';
import axios from 'axios';
import HotelCard from '../Components/HotelCard';

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
        setError('Hotel Not Found.');
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
      <HotelCard hotel={hotel} />
    </div>
  );
};

export default HotelDetails;
