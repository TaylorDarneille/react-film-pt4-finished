import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';


class App extends Component {
  constructor(){
    super()
    this.state = {
      films: TMDB.films,
      current: {}
    }
  }

  handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
      this.setState({current: json})
    })
    .catch(err=>{
      console.log("Error fetching deatils!", err);
    })
    console.log("Fetching details for", film.title);
  }

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={this.state.films} 
          handleDetailsClick={this.handleDetailsClick}
          />
          <FilmDetails film={this.state.current}/>
        </div>
      </div>
    );
  }
}

export default App;
