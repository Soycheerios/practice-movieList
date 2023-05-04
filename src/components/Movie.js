
import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';


class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      rating: 0
    };
  }

  addReview = (text, username) => {
    const newReview = { text, username };
    this.setState(prevState => ({
      reviews: [...prevState.reviews, newReview]
    }));
  }

  setRating = (rating) => {
    this.setState({ rating });
  }

  render() {
    const { title, imageUrl, synopsis } = this.props;
    const { reviews, rating } = this.state;

    return (
      <div className='container'>
        <div className="movie">
          <h2>{title}</h2>
          <img src={imageUrl} alt={title} className="movie-image" />
          <p>{synopsis}</p>
          <Stars rating={rating} onSetRating={this.setRating} />
          <ReviewList reviews={reviews} />
          <ReviewForm addReview={this.addReview} /><br/>
        </div> 
      </div>
    );
  }
}

export default Movie; 



