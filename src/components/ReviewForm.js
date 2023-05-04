

import React, { useState } from 'react';




const ReviewForm = ({ addReview }) => {
  const [text, setText] = useState('');
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    addReview(text, username, rating);
    setText('');
    setUsername('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username"><h5>Username:</h5></label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <br/>

      <label htmlFor="review"><h5>Leave Review:</h5></label>
      <textarea id="review" value={text} onChange={(e) => setText(e.target.value)} required></textarea><br/>

      <button type="submit" className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;