import React, { useState } from 'react';
import { Hobby } from '../types';
import { HobbyCard } from './HobbyCard.tsx';
import { HobbyModal } from './HobbyModal.tsx';

interface HobbiesProps {
  hobbies: Hobby[];
}

export const Hobbies: React.FC<HobbiesProps> = ({ hobbies }) => {
  const [selectedHobby, setSelectedHobby] = useState<Hobby | null>(null);

  const handleCardClick = (hobby: Hobby) => {
    setSelectedHobby(hobby);
  };

  const handleCloseModal = () => {
    setSelectedHobby(null);
  };

  return (
    <section id="hobbies" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Hobbies & Activités
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez mes passions et activités personnelles au-delà du développement logiciel
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby) => (
            <HobbyCard
              key={hobby.id}
              hobby={hobby}
              onClick={() => handleCardClick(hobby)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedHobby && (
        <HobbyModal hobby={selectedHobby} onClose={handleCloseModal} />
      )}
    </section>
  );
};
