"use client";

const Error = ({ error, reset }) => {
  return (
    <div className="text-base bg-red-500 p-4 rounded-md flex flex-col gap-5">
      <h1>Üzgünüz bir sorun oluştu</h1>
      <hr />
      <p>{error.message}</p>
      <hr />
      <button className="bg-red-800 p-1 rounded" onClick={reset}>
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
