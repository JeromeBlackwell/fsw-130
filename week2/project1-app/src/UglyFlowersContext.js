import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class ContextProvider extends Component {
    state ={
        uglyFlowersLists: [
            {
            uglyFlowersTitle: "Amorphophallus Paeonifolius",
            uglyFlowersDescription: "",
            uglyFlowersImage: "./Amorphophallus.jpg",
            comments: ["This flower is very ugly."],
            },
            {
                uglyFlowersTitle: "Gastrodia Annicellus",
                uglyFlowersDescription: "",
                uglyFlowersImage: "./Gastrodia.jpg",
                comments: ["This flower is insane."],
            }, 
            {
                uglyFlowersTitle: "Pin on Jardines",
                uglyFlowersDescription: "",
                uglyFlowersImage: "./PinonJardines.jpg",
                comments: ["come on, why does this flower look like a ghost?"],
            },
        ],
    }

    UglyFlowersDelete = (e) => {
        console.log( "deleting")
        this.setState((prevState) => ({
            uglyFlowersLists: prevState.uglyFlowersLists.filter((uglyFlowersItems, index) => {
                console.log( "delete", e.target.id)
                return index !== Number( e.target.id)
            }),
        }))
    }

    uglyFlowerCommentDelete =( e, itemIndex) => {
        console.log ( "deleting", itemItem )
        this.setState((prevState) => ({
            uglyFlowersLists: prevState.uglyFlowersLists.map((thingItem, index) => {
                if (index ===itemIndex) {
                    thingItem.comments = thingItem.comments.filter((comment, i) => {
                        console.log( i, Number(e,target.id))
                        return i !== Number(e.target.id)
                    })
                }
                return thingItem
            }),
        }))
    }

    updateItems = (uglyFlowersLists) => {
        console.log (uglyFlowersLists)
        this.setState({uglyFlowersLists})
    }

    render() {
        const { uglyFlowersLists } = this.state
        return (
            <Provider
                value= {{
                    uglyFlowersLists: uglyFlowersLists,
                    updateItems: this.updateItems,
                    uglyFlowersDelete: this.UglyFlowersDelete,
                    uglyFlowerCommentDelete: this.uglyFlowerCommentDelete,
                }}
            >
            
                {this.props.children}
            </Provider>
        )
    }
}

export { ContextProvider, Consumer as ContextConsumer }