import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Contact } from '../types';

interface FooterProps {
  contact: Contact;
}

export const Footer: React.FC<FooterProps> = ({ contact }) => {
  // Helper to extract clean URL from markdown format if present
  const extractUrl = (str: string) => {
    const match = str.match(/\((.*?)\)/);
    return match ? match[1] : str;
  };

  return (
    <footer id="contact" className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Parlons de mon projet</h2>
            <p className="text-slate-400 mb-8 max-w-md text-lg">
              Je suis actuellement à la recherche d'opportunités en CDI. N'hésitez pas à me contacter pour discuter de la façon dont je peux contribuer à votre équipe.
            </p>
            
            <div className="space-y-4">
              <a href={`mailto:${contact.email}`} className="flex items-center text-slate-300 hover:text-white transition-colors group">
                <div className="p-2 bg-slate-800 rounded-lg mr-4 group-hover:bg-primary-600 transition-colors">
                  <Mail size={20} />
                </div>
                {contact.email}
              </a>
              <div className="flex items-center text-slate-300 group">
                <div className="p-2 bg-slate-800 rounded-lg mr-4 group-hover:bg-primary-600 transition-colors">
                  <Phone size={20} />
                </div>
                {contact.phone}
              </div>
              <div className="flex items-center text-slate-300 group">
                <div className="p-2 bg-slate-800 rounded-lg mr-4 group-hover:bg-primary-600 transition-colors">
                  <MapPin size={20} />
                </div>
                {contact.location}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
             <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-sm">
                <h3 className="text-xl font-semibold mb-6">Réseaux Sociaux</h3>
                <div className="flex space-x-4">
                  <a 
                    href={extractUrl(contact.linkedin)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-4 bg-slate-700 rounded-xl hover:bg-[#0077b5] transition-colors duration-300"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a 
                    href={extractUrl(contact.github)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center p-4 bg-slate-700 rounded-xl hover:bg-[#333] transition-colors duration-300"
                  >
                    <Github size={24} />
                  </a>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500 text-sm">
        </div>
      </div>
    </footer>
  );
};