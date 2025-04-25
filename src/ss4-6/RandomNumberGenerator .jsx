import { useState } from "react";

const RandomNumberGenerator = () => {
  const [number, setNumber] = useState(null);

  const generateNumber = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="text-center p-4">
      <h2 className="text-xl mb-4">🎲 Tạo số ngẫu nhiên(1-10)</h2>
      <button
        onClick={generateNumber}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Tạo số
      </button>
      <div className="mt-4 text-lg">
        {number === null ? "Chưa có số nào được tạo" : `Số bạn nhận được là: ${number}`}
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
