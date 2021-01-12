import React from 'react'
import {connect} from 'react-redux'

class History extends React.Component{
    render(){
        return(
            <div>
                <h1> History </h1>
                <ul>
                    {this.props.history.map((item, index) => (<li key={index}> {item} </li>))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {history: state.counter.history}
}

export default connect(mapStateToProps)(History)