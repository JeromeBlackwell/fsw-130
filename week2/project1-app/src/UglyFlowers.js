import React, { Component } from "react"
import {ContextConsumer} from "./UglyFlowersContext.js"

class Flowers extends Component {
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
        [name]: value,
        })
    }
    
    uglyUpdate = (e, context) => {
        context.updateItems([
        ...context.uglyFlowersLists,
        {
        uglyFlowersTitle: this.state.uglyFlowersTitle,
        uglyFlowersdescription: this.state.uglyFlowersDescription,
        uglyFlowersImage: this.state.uglyFlowersImage,
        comments: this.state.comments,
        },
    ])
}
    
newComments = (e, context, index) => {
    this.setState({
        comments: [...context.uglyFlowersLists[index].comments, e.target.value],
        comment: '',
        })
        var array = context.uglyFlowersLists
        Object.assign(array[index], {
            comments: [...context.uglyFlowersLists[index].comments, e.target.value],
            })
            context.updateItems(array)
        }
        render() {
            return (
                <ContextConsumer>
                    {(context) => (
                        <div className="things-wrapper">
                            {context.uglyFlowersLists.map((uglyFlowersInfo, index) => (
                                <div id={index} key={index}>
                                    <div className='th'>
                                        {uglyFlowersInfo.uglyFlowersTitle}
                                        <button style={{ float:"right", padding:"2px", borderRadius:"3px", backgroundColor:"green"}} onClick={context.uglyDelete} id={index}>Delete</button>
                                    </div>
                                        <div className='td'><img src={uglyFlowersInfo.uglyFlowersImage} style={{ width:"90%", height:"90%", padding: "10px"}} alt='' /></div>
                                        <div className='td'>{uglyFlowersInfo.uglyFlowersDescription}</div>
                                        <br />
                                        <div className='td'>
                                            <input
                                                name='comment'
                                                type='text'
                                                onChange={this.handleChange}
                                                onKeyPress={(e) => {
                                                if (e.key === 'Enter') {
                                                this.newComments(e, context, index)
                                            }
                                        }}
                                        placeholder='Add Your Own Comment'
                                    />
                                    {uglyFlowersInfo.comments.map((comment, i) => (
                                        <div className='td'>
                                            {comment}{' '}
                                            <button
                                                style={{ padding:"3px", borderRadius:"3px", backgroundColor:"green"}}
                                                onClick={(e) => context.uglyCommentDelete(e, index)}
                                                id={i}
                                            >X</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ContextConsumer>
        )
    }
}

export default Flowers