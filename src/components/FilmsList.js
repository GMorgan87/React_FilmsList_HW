import React, { Component } from 'react'
import Film from './Film'

class FilmsList extends Component {
    
  render() {

    const filmNodes = this.props.films.map(film => {
        return <Film  key={film.id} url={film.url}>{film.name}</Film>
    })

    return (
        <div className="films-list">
          {filmNodes}
        </div>
    )
  }
}

export default FilmsList
