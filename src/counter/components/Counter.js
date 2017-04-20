import React, { Component, PropTypes } from 'react';

class Counters extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    };

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    };

    incrementAsync = () => {
        setTimeout(this.props.onIncrement, 1000)
    };

    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={this.incrementIfOdd}>
                    Inrement if odd
                </button>
                {' '}
                <button onClick={this.incrementAsync}>
                    Inrement async
                </button>
            </p>
        )
    }
}

export default Counters;