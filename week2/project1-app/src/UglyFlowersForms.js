import { Component } from "react"
import React { Component } from './UglyFlowersContext.js'

class UglyFlowerForm extends Component {
    state = {
        listUpdate: [],
        uglyFlowersTitle: '',
        uglyFlowersImage: '',
        uglyFlowersDescripton: '',
        comments: [],
        comment: '',
    }

    handleChange =(e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
    }

    uglyFlowersUpdate = (e, this.context) => {
        e.preventDefault()
        this.setState({
            listUpdate: [
                ...context.uglyFlowersLists,
                {
                    uglyFlowersTitle: this.state.uglyFlowersTitle,
                    uglyFlowersDescripton: this.state.uglyFlowersTitle,
                    uglyFlowersImage: this.state.uglyFlowersImage,

                },
            ],
            uglyFlowersTitle: '',
            uglyFlowersDescripton: '',
            uglyFlowersImage: '',
            comments: [],
        })

        context.updateFlowersItems([
            ...context.uglyFlowersLists,
            {
                uglyFlowersTitle: this.state.uglyFlowersTitle,
                uglyFlowersDescripton: this.state.uglyFlowersDescripton,
                uglyFlowersImage: this.state.uglyFlowersImage,
                comments: this.state.comments,
            },
        ])
    }   

     NewFlowersComments = (e, context, index) => {
        this.setState ({
            comments: [...context.uglyFlowersLists[index].comments, e.target.value],
            comment: '',
        })
        var flower = context.uglyFlowersLists
        object.assign(flower[indext], {
            comments: [...context.uglyFlowersLists[index].comments, e.target.value],
        })
        context.updateFlowersItems(flower)
    }
    render() {
        return (
            <ContextConsumer>
                {(context) => (
                <form>
                    <div className ="form-wrapper">
                        <br></br>
                        <div className= "th" style={{gridColumn:"span3"}}>The Ulgliest Flowers Ever</div>

                        <div className= "td">
                            <input
                                className= "inputs"
                                type= "text"
                                name= "uglyFlowersTitle"
                                value= {this.state.uglyFlowersTitle}
                                placeholder= "Annuals & Perrinials"
                                onChange= {this.handleChange}
                            />
                        </div>
                        <div className = "td">
                            <input
                                className= "inputs"
                                type= "text"
                                name= "uglyFlowersDescription"
                                value= {this.state.uglyFlowersDescripton}
                                placeholder= "Ugly Flowers Description"
                                onChange= {this.handleChange}
                            />
                        </div>
                        <div className = "td">
                            <input
                                className= "inputs"
                                type= "text"
                                name= "uglyFlowersimage"
                                value= {this.state.uglyFlowersImage}
                                placeholder= "Ugly Flowers Image"
                                onChange= {this.handleChange}
                            />
                        </div>

                        <div style =

                </form>
            </ContextConsumer>

    