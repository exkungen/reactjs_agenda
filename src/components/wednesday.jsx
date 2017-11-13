import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Wednesday extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wednesday">
                <div className="wednesday__day">
                    {this.props.day}
                </div>
                <div className="wednesday__time">
                    {this.props.time}
                </div>
                <div className="wednesday__arrangement">
                    {this.props.arrangement}
                </div>
            </div>
        );
    }

}
export default Wednesday;
