import React, { useState } from 'react';

function CounText() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={text}
        onChange={handleChange}
        rows="4" 
        cols="50"
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

export default CounText;