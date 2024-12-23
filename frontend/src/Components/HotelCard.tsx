import React from 'react';

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

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  return (
    <div className="hotel-card-container">
      <img className="hotel-image" src={hotel.imageUrl} alt={hotel.name} />
      <div className="hotel-info">
        <h2>{hotel.name}</h2>
        <p><strong>Location:</strong> {hotel.location}</p>
        <p><strong>Rating:</strong> {hotel.rating} / 5</p>
        <p><strong>Board Basis:</strong> {hotel.boardBasis}</p>
        <p>
          <strong>Available Travel Dates:</strong>{" "}
          {hotel.datesOfTravel.map((date, index) => (
            <span key={index}>{date}{index < hotel.datesOfTravel.length - 1 ? ", " : ""}</span>
          ))}
        </p>
        <h3>Rooms:</h3>
        <ul>
          {hotel.rooms.map((room, index) => (
            <li key={index}>
              <strong>{room.roomType}</strong>: {room.amount} available
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HotelCard;
