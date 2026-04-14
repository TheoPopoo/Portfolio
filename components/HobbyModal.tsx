import React, { useEffect } from 'react';
import { Hobby } from '../types';

interface HobbyModalProps {
  hobby: Hobby;
  onClose: () => void;
}

export const HobbyModal: React.FC<HobbyModalProps> = ({ hobby, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      {/* Modal Container */}
      <div
        className="bg-slate-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 right-0 float-right m-4 text-gray-400 hover:text-white text-2xl transition-colors z-10"
          aria-label="Fermer"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
          {hobby.coverImage && hobby.coverImage !== '' ? (
            <img
              src={hobby.coverImage}
              alt={hobby.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600">
              <span className="text-white text-8xl">🎯</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Type Badge */}
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            {hobby.type}
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold text-white mb-6">
            {hobby.name}
          </h2>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 bg-slate-700/50 rounded-lg p-6">
            <div>
              <div className="flex items-center text-gray-400 mb-2">
                <span className="text-2xl mr-3">📅</span>
                <span className="font-semibold">Date</span>
              </div>
              <p className="text-white text-lg ml-11">{hobby.date}</p>
            </div>

            <div>
              <div className="flex items-center text-gray-400 mb-2">
                <span className="text-2xl mr-3">📍</span>
                <span className="font-semibold">Lieu</span>
              </div>
              <p className="text-white text-lg ml-11">{hobby.location}</p>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Description</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              {hobby.description}
            </p>
          </div>

          {/* Details Section */}
          {hobby.details && (
            <div className="bg-slate-700/30 rounded-lg p-6 border border-slate-600 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">Plus de détails</h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {hobby.details}
              </p>
            </div>
          )}

          {/* Close Button */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};
