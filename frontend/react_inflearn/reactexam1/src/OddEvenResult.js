const OddEvenResult = ({ count }) => {
  return (
    <div>
      <h1>{count % 2 ? "odd" : "even"}</h1>
    </div>
  );
};

export default OddEvenResult;
