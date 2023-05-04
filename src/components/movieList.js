import React from 'react';
import Movie from './Movie';


export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "Black Panther: Wakanda Forever",
          imageUrl:
            "https://amc-theatres-res.cloudinary.com/v1673700256/amc-cdn/production/2/movies/56500/56467/Poster/Primary_BoxCover_HD_800_1200.jpg",
          synopsis:
            "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom",
          rating: 3.5
        },
        {
          title: "Everything Everywhere All at Once",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
          synopsis:
            "When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance.",
          rating: 4
        },
        {
          title: "Crazy Rich Asians",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
          synopsis:
            "Rachel Chu is happy to accompany her longtime boyfriend, Nick, to his best friend's wedding in Singapore. She's also surprised to learn that Nick's family is extremely wealthy and he's considered one of the country's most eligible bachelors. Thrust into the spotlight, Rachel must now contend with jealous socialites, quirky relatives and something far, far worse -- Nick's disapproving mother.",
          rating: 4.9
        },
        {
            title: "Avatar: The Way of Water",
            imageUrl:
              "https://lumiere-a.akamaihd.net/v1/images/p_20cs_avatarwayofwater_1710_4025feea.jpeg?region=0%2C0%2C540%2C810",
            synopsis:
              "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.",
            rating: 4.9
          }
      ]
    };
  }

  render() {
    const { movies } = this.state;

    return (
    <div className='container'>
    <div className='pageTitle'><h1>Movie Ratings</h1></div><br/>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <Movie
            key={index}
            title={movie.title}
            imageUrl={movie.imageUrl}
            synopsis={movie.synopsis}
            rating={movie.rating}
          /> 
        ))}
      </div>
    </div>
    );
  }
}


