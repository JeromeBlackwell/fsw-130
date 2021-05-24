import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class ContextProvider extends Component {
    state ={
        uglyFlowersLists: [
            {
            uglyFlowersTitle: "Amorphophallus Paeonifolius",
            uglyFlowersDescription: "Amorphophallus Paeonifolius is a perrinial and grows to about 2ft 7inches.",
            uglyFlowersImage: "./Amorphophallus.jpg",
            comments: ["This flower looks prehistoric and ugly too."],
            },
            {
                uglyFlowersTitle: "Gastrodia Annicellus",
                uglyFlowersDescription: "2021's newly found species and was given the name, the Ugliest Orchid in the World",
                uglyFlowersImage: "./Gastrodia.jpg",
                comments: ["This flower is insane."],
            }, 
            {
                uglyFlowersTitle: "Aristolochia Salvadorensis",
                uglyFlowersDescription: "",
                uglyFlowersImage: "./Aristolochia.jpg",
                comments: ["The Darth Vader flower is pure ugly and creepy too."],
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