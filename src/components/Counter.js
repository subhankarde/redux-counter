import React from 'react'
import { connect } from 'react-redux'
import { increaseCount, decreaseCount, resetCount } from '../actions/index';

class Counter extends React.Component{
    render(){
        return(
            <div>
                <h1> Counter </h1>
                <h1> {this.props.count }</h1>
                <button onClick={this.props.handleIncrement}>Increment</button>
                <button onClick={this.props.handleDecrease}>Decrement</button>
                <button onClick={this.props.handleReset}>Reset</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.counter.count
    }
}

//Below mapDispatchToProps is a function dispatcher. The recommended way is to use Object. Where we map the Action creator to the dispatcher.
// function mapDispatchToProps(dispatch){
//     return bindActionCreators({
//         handleIncrement: increaseCount,
//         handleDecrease: decreaseCount,
//         handleReset: resetCount
//     }, dispatch)
// }
export default connect(mapStateToProps, { handleIncrement: increaseCount, handleDecrease: decreaseCount, handleReset: resetCount})(Counter);