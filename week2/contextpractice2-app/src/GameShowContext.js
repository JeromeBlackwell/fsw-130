import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class GameShowContextProvider extends Component {
  state = {
    gameShow: [
      {
        title: 'Empire of the Sun',
        director: 'Steven Spielberg',
        genre: 'War/Drama',
        year: '1987',
      },
      {
        title: 'The Princess Bride',
        director: 'Rob Reiner',
        genre: 'Romance/Adventure',
        year: '1987',
      },
      {
        title: 'Stargate',
        director: 'Roland Emmerich',
        genre: 'Sci-fi/Adventure',
        year: '1994',
      },
      {
        title: "Ocean's Eleven",
        director: 'Steven Soderbergh',
        genre: 'Crime/Comedy',
        year: '2001',
      },
      {
        title: 'The Borne Identity',
        director: 'Doug Liman',
        genre: 'Action/Thriller',
        year: '2002',
      },
      {
        title: 'The Italian Job',
        director: 'F. Gary Gray',
        genre: 'Action/Thriller',
        year: '2003',
      },
      {
        title: 'Casino Royale',
        director: 'Martin Campbell',
        genre: 'Action/Adventure',
        year: '2006',
      },
      {
        title: 'Up',
        director: 'Pete Docter',
        genre: 'Family/Adventure',
        year: '2009',
      },
      {
        title: 'Rogue One',
        director: 'Gareth Edwards',
        genre: 'Sci-fi/Action',
        year: '2016',
      }
    ],
    title: '',
    director: '',
    genre: '',
    year: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  GameShowUpdate = (e) => {
    e.preventDefault()
    this.setState({
      gameShow: this.state.gameShow.concat({
        title: this.state.title,
        director: this.state.director,
        genre: this.state.genre,
        year: this.state.year,
      }),
      title: '',
      director: '',
      genre: '',
      year: '',
    })
  }
  render() {
    return (
      <Provider
        value={{
          GameShow: this.state.gameShow,
          title: this.state.title,
          director: this.state.director,
          genre: this.state.genre,
          year: this.state.year,
          handleChange: this.handleChange,
          gameShowUpdate: this.GameShowUpdate,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export {GameShowContextProvider, Consumer as GameShowContextConsumer }