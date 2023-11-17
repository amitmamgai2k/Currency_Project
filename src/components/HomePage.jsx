import React from 'react';

function Homepage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Currency Converter</h1>
      <p className="text-lg mb-4">
        Welcome to our Currency Converter application! Simplifying currency conversions for your convenience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <div>
          <h2 className="text-xl font-semibold mb-2">Key Features:</h2>
          <ul className="list-disc pl-4">
            <li>Real-Time Exchange Rates</li>
            <li>Multiple Currency Support</li>
            <li>User-Friendly Interface</li>
            <li>Customizable Options</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How It Works:</h2>
          <ol className="list-decimal pl-4">
            <li>Input Your Amount</li>
            <li>Select Currencies</li>
            <li>Get Instant Results</li>
          </ol>
        </div>
      </div>
      <p className="text-lg mt-4">
        Begin converting currencies effortlessly and stay informed about global exchange rates with our Currency Converter app!
      </p>
    </div>
  );
}

export default Homepage;
