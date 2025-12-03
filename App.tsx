import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 border-2 border-black shadow-lg text-center">
        <h1 className="text-4xl font-bold text-black mb-4">IT WORKS!</h1>
        <p className="text-gray-600 font-mono text-sm">
          The pipeline is connected. Vercel is serving this file correctly.
        </p>
        <div className="mt-8 p-4 bg-red-100 border border-red-500 text-red-700 font-bold">
          If you see this, the blank screen error is solved.
        </div>
      </div>
    </div>
  );
};

export default App;