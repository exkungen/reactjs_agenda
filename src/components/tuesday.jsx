import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Tuesday extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tuesday">
                <div className="tuesday__day">
                    {this.props.day}
                </div>
                <div className="tuesday__time">
                    {this.props.time}
                </div>
                <div className="tuesday__arrangement">
                    {this.props.arrangement}
                </div>
            </div>
        );
    }

}
export default Tuesday;
