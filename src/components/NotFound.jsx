// src/components/NotFound.jsx
import React from 'react';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-3">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600">Page Not Found</p>
        <a href="/" className="inline-block bg-blue-500 text-white py-2 px-4 rounded">
          Go to Home
        </a>
      </div>
    </div>
  );
};

