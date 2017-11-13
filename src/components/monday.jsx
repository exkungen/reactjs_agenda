import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Monday extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="monday">
                <div className="monday__day">
                    {this.props.day}
                </div>
                <div className="monday__time">
                    {this.props.time}
                </div>
                <div className="monday__arrangement">
                    {this.props.arrangement}
                </div>
            </div>
        );
    }

}
export default Monday;
