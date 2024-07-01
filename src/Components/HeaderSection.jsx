function HeaderSection({ data }) {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        {data.location.name}
      </h1>

      <img src={data.current.condition.icon} alt="" className="mx-auto" />
      <p className="text-7xl text-gray-700 text-center">
        {data.current.temp_c}°C
      </p>
    </div>
  );
}

export default HeaderSection;
