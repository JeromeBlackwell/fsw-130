import React,{ Component } from "react"
import { ContextConsumer } from './UglyFlowersContext.js'

class Form extends Component {
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

    uglyFlowersUpdate = (e, context) => {
        e.preventDefault()
        this.setState({
            listUpdate: [
                ...context.uglyFlowersLists,
                {
                    uglyFlowersTitle: this.state.uglyFlowersTitle,
                    uglyFlowersDescripton: this.state.uglyFlowersDescripton,
                    uglyFlowersImage: this.state.uglyFlowersImage,
                    comments: this.state.comments,
                },
            ],
            uglyFlowersTitle: '',
            uglyFlowersDescripton: '',
            uglyFlowersImage: '',
            comments: [],
        })

        context.updateFlowersItems([
            ...context.uglyLists,
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
        Object.assign(flower[index], {
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
                        <div className= "th" style={{gridColumn:"span3"}}>The Ugliest Flowers Ever</div>

                        <div className= "td">
                            <input
                                className= "inputs"
                                type= "text"
                                name= "uglyFlowersTitle"
                                value= {this.state.uglyFlowersTitle}
                                placeholder= "Flower Title"
                                onChange= {this.handleChange}
                            />
                        </div>
                        <div className = "td">
                            <input
                                className= "inputs"
                                type= "text"
                                name= "uglyFlowersdescription"
                                value= {this.state.uglyFlowersdescripton}
                                placeholder= "Ugly Flowers Description"
                                onChange= {this.handleChange}
                            />
                        </div>
                        <div className = "td">
                            <input
                                className= "inputs"
                                type= "text"
                                name= "uglyFlowersImage"
                                value= {this.state.uglyFlowersImage}
                                placeholder= "Ugly Flowers Image"
                                onChange= {this.handleChange}
                            />
                        </div>

                        <div style = {{gridColumn: "span'2"}}></div>
                        <div className = "td">
                            <input
                            className = "submit"
                            type= "submit"
                            onClick = {(e) => {
                                this.uglyUpdate(e, context)
                            }}
                            value= "Submit"
                        />
                    </div>
                </div>
                <br /><br />
            </form>
            )}
        </ContextConsumer>
        )
    }
}

export default Form