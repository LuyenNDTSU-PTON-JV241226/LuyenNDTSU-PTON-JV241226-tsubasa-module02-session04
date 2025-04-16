import React, { useState } from 'react';

function ToggleInfo() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <h2>Ẩn/Hiện Thông Tin</h2>
      <button onClick={handleToggle}>
        {isVisible ? 'Ẩn thông tin' : 'Hiển thị thông tin'}
      </button>
      {isVisible && (
        <p>Chào mừng bạn đến với thế giới React! Đây là đoạn văn được điều khiển bởi state `useState`.</p>
      )}
    </div>
  );
}

export default ToggleInfo;
