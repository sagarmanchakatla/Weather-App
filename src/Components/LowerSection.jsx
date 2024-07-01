function LowerSection({ data }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="m-4 text-center">
          <h3 className="text-gray-900 font-bold">Humidity</h3>
          <p className="text-gray-700">{data.current.humidity}%</p>
        </div>
        <div className="m-4 text-center">
          <h3 className="text-gray-900 font-bold">Dew Point</h3>
          <p className="text-gray-700">{data.current.dewpoint_c} &deg;C</p>
        </div>
        <div className="m-4 text-center">
          <h3 className="text-gray-900 font-bold">Wind Speed</h3>
          <p className="text-gray-700">{data.current.wind_mph} mph</p>
        </div>
      </div>
    </>
  );
}

export default LowerSection;
