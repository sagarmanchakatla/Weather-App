import { useEffect, useState } from "react";
import axios from "axios";
import Map from "./Map";
import HeaderSection from "./HeaderSection";
import MiddleSection from "./MiddleSection";
import LowerSection from "./LowerSection";
import Maps from "./Maps";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("India");
  const [inputLocation, setInputLocation] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=9ed57b75b735444aae093403243006&q=${location}&aqi=no`
      );
      setWeatherData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(`Error ${error} occurred while fetching`);
    }
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto w-full sm:w-[500px]">
        {weatherData ? (
          <div>
            <div className="flex mb-4">
              <input
                type="text"
                value={inputLocation}
                onChange={(e) => setInputLocation(e.target.value)}
                placeholder="Enter Country"
                className="flex-1 text-1xl rounded-lg pl-4 pr-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => setLocation(inputLocation)}
                className="text-1xl text-white bg-blue-500 rounded-lg px-4 py-2 ml-2 hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
            <HeaderSection data={weatherData} />
            <MiddleSection data={weatherData} />
            <LowerSection data={weatherData} />
          </div>
        ) : (
          <p className="text-gray-700 text-center">Loading...</p>
        )}
      </div>
      {/* <Map data={weatherData}></Map> */}
      <Maps data={weatherData}></Maps>
    </>
  );
}

export default Weather;
