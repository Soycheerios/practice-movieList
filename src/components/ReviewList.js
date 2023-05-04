import React from 'react';



const ReviewList = ({ reviews }) => (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div className={`review ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
          <p><strong>{review.username}:</strong> {review.text}</p>
        </div>
      ))}
    </div>
  );
  
  export default ReviewList;
  
 