import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class GameShowContextProvider extends Component {
  state = {
    gameShow: [
      {
        title: 'Wheel of Fortune',
        host: 'Chuck Woolery',
        creator: 'Merv Griffin',
        year: '1975',
      },
      {
        title: 'Jeopardy',
        host: 'Alex Trebek',
        creator: 'Merv Griffin',
        year: '1964',
      },
      {
        title: 'Price is Right',
        host: 'Drew Carey',
        creator: 'Bob Stewart',
        year: '1956',
      },
      {
        title: "The $100,000 Pyramid",
        host: 'Michael Straham',
        creator: 'Bob Stewart',
        year: '2016',
      },
      {
        title: 'Match Game',
        host: 'Alex Baldwin',
        creator: 'Frank Wayne',
        year: '1962',
      },
      {
        title: 'Who Wants to Be a Millionaire',
        host: 'Jimmy Kimmel',
        creator: 'David Briggs, Steven Knight, and Mike Whitehill',
        year: '1999',
      },
      {
        title: 'Lets Make a Deal',
        host: 'Wayne Brady',
        creator: 'Stefan Hatos and Monty Hall',
        year: '1963',
      },
      {
        title: 'To Tell the Truth',
        host: 'Anthony Anderson',
        creator: 'Bob Stewart',
        year: '1956',
      },
      {
        title: 'Card Sharks',
        host: 'Joel McHale',
        creator: 'Chester Feldman',
        year: '1978',
      }
    ],
    title: '',
    host: '',
    creator: '',
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
        host: this.state.host,
        creator: this.state.creator,
        year: this.state.year,
      }),
      title: '',
      host: '',
      creator: '',
      year: '',
    })
  }
  render() {
    return (
      <Provider
        value={{
          GameShow: this.state.gameShow,
          title: this.state.title,
          host: this.state.host,
          creator: this.state.creator,
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