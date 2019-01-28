import React, { Component } from 'react';

class FilmDetails extends Component {
  render() {
  	const backdropUrl = `https://image.tmdb.org/t/p/w1280/${this.props.film.backdrop_path}`
	const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
	const filmInfo = (
		<div className="film-detail is-hydrated">
		  <figure className="film-backdrop">
		    <img src={backdropUrl} alt="" />
		    <h1 className="film-title">{this.props.film.title}</h1>
		  </figure>

		  <div className="film-meta">
		    <h2 className="film-tagline">{this.props.film.tagline}</h2>
		    <p className="film-detail-overview">
		      <img src={posterUrl} className="film-detail-poster" alt={this.props.film.title} />
		      {this.props.film.overview}
		    </p>
		  </div>
		</div>
	    )
    const emptyInfo = (
        <div className="film-detail">
	  <p>
	    <i className="material-icons">subscriptions</i>
	    <span>No film selected</span>
	  </p>
	</div>
    )
    let details = this.props.film.id ? filmInfo : emptyInfo
    return (
          <div className="film-details">
            <h1 className="section-title">DETAILS</h1>
            {details}
          </div>
    );
  }
}

export default FilmDetails;