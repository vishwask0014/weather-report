"use client";
import react, { useEffect, useState } from "react";


export default function Home() {
  const [cityName, getCityName] = useState('')
  const [apiOutput, getApiOutput] = useState('')

  const handleInput = (e: any) => {
    getCityName(e.target.value)
  }

  const handleFetchData = async () => {
    if (!cityName) {
      alert('Enter Value')
      return;
    }

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0680d92e2c181d5788124883284b602e&units=metric`);
      if (!response.ok) throw new Error('Failed to fetch data');

      const result = await response.json();
      getApiOutput(result);
    }

    catch {
    }

    finally {

    }
  }

  console.log(apiOutput, '>>>>>>>>>>>>>>>>');



  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 p-4">
        <h1 className="text-4xl font-bold text-white mb-6">Weather App</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter city name"
            id="cityValue"
            className="p-2 rounded-lg shadow-md w-72"
            value={cityName}
            onChange={handleInput}
          />
          <button type="button" onClick={handleFetchData} className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
            Search
          </button>
        </div>
        <div className="mt-6 w-80 bg-white p-4 rounded-xl shadow-lg">
          <div className="flex flex-col items-center text-gray-700">
            <h2 className="text-2xl font-semibold">{apiOutput?.name}, {apiOutput?.sys?.country}</h2>
            <p className="text-xl font-bold">Temperature {apiOutput?.main?.temp} °C </p>
            <p className="capitalize">Weather Description : </p>
            <svg className="w-8 h-8">
              ☁️
            </svg>
            <div className="flex gap-4 mt-2">
              <p className="text-sm">Humidity: {apiOutput?.main?.humidity}%</p>
              <p className="text-sm flex items-center"> <svg className="w-4 h-4 mr-1">
                🍃
              </svg> Wind Speed {apiOutput?.wind?.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
