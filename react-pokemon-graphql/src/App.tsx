import React from 'react';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-500 w-full py-4">
        <h1 className="text-3xl text-white text-center">Pokémon GraphQL API</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Pokemon />
      </main>
    </div>
  );
}

export default App;
