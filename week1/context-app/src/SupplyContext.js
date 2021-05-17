import React from'react'
const { Provider, Consumer } = React.createContext()

class SupplyContextProvider extends React.Component {
    state = {
        supply: 'dark',
}

switchSupply = () => {
    this.setState((prevState) => {
        return {
            supply: prevState.Supply === 'light' ? 'dark' : 'light',
        }
    })
}

render() {
    return (
        <Provider value ={{Supply: this.state.Supply, switchSupply: this.switchsupply}}>
            {this.props.children}
        </Provider>
        )
    }
}

export { SupplyContextProvider, Consumer as SupplyContextConsumer}