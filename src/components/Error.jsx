const Error = ({ message }) => {
  return (
    <div className="text-center mt-10 text-red-500 font-medium">
      ⚠️ {message}
    </div>
  );
};

export default Error;