import React from 'react';

function CardUser({ name, age, avatar }) {
  return (
    <div style={styles.card}>
      <img src={avatar} alt={name} style={styles.avatar} />
      <h3>{name}</h3>
      <p>Tuổi: {age}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
    width: '150px',
    margin: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover'
  }
};

export default CardUser;