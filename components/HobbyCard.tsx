import React from 'react';
import { Hobby } from '../types';

interface HobbyCardProps {
  hobby: Hobby;
  onClick: () => void;
}

export const HobbyCard: React.FC<HobbyCardProps> = ({ hobby, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex-shrink-0">
        {hobby.coverImage && hobby.coverImage !== '' ? (
          <img
            src={hobby.coverImage}
            alt={hobby.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
            <span className="text-white text-6xl">🎯</span>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

        {/* Type Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {hobby.type}
        </div>
      </div>

      {/* Content */}
      <div className="bg-slate-800 border border-slate-700 p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {hobby.name}
        </h3>
        
        {/* Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400 text-sm">
            <span className="mr-2">📅</span>
            <span>{hobby.date}</span>
          </div>
          <div className="flex items-center text-gray-400 text-sm">
            <span className="mr-2">📍</span>
            <span>{hobby.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm line-clamp-2 mb-4">
          {hobby.description}
        </p>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg mt-auto">
          Voir les détails
        </button>
      </div>
    </div>
  );
};
