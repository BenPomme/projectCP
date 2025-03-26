import React from 'react';
import CreateTournamentForm from '../components/CreateTournamentForm';

export default function CreateTournamentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Tournament</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Tournament Details</h2>
            <p className="text-gray-600 mb-6">
              Create your own tournament and invite participants to submit entries and vote.
              As the tournament creator, you'll have admin privileges to manage the tournament.
            </p>
            
            <CreateTournamentForm />
          </div>
        </div>
      </div>
    </div>
  );
} 