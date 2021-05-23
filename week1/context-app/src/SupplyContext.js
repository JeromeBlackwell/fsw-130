import React from'react'
const { Provider, Consumer } = React.createContext()

class SupplyContextProvider extends React.Component {
    state = {
        supply: 'dark',
}

switchSupply = () => {
    this.setState((prevState) => {
        return {
            supply: prevState.supply === 'light' ? 'dark' : 'light',
        }
    })
}

render() {
    return (
        <Provider value ={{supply: this.state.supply, switchSupply: this.switchSupply}}>
            {this.props.children}
        </Provider>
        )
    }
}

export { SupplyContextProvider, Consumer as SupplyContextConsumer}