import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-lg">{value}</p>
    </div>
  );
};

export default StatsCard;