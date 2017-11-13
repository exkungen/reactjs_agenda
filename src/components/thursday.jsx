import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Thursday extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="thursday">
                <div className="thursday__day">
                    {this.props.day}
                </div>
                <div className="thursday__time">
                    {this.props.time}
                </div>
                <div className="thursday__arrangement">
                    {this.props.arrangement}
                </div>
            </div>
        );
    }

}
export default Thursday;
