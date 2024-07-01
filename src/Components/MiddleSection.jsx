function MiddleSection({ data }) {
  return (
    <>
      <p className="text-gray-800 font-bold mt-7 text-3xl text-center">
        {new Date().toLocaleDateString()}
      </p>
      <p className="text-lg text-gray-700 text-4xl mt-4 font-bold text-center">
        Condition: {data.current.condition.text}
      </p>
    </>
  );
}

export default MiddleSection;
