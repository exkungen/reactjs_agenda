import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Agenda extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="agenda">
                <div className="agenda__day">
                    {this.props.day}
                </div>
                <div className="agenda__time">
                    {this.props.time}
                </div>
                <div className="agenda__arrangement">
                    {this.props.arrangement}
                </div>
            </div>
        );
    }

}
export default Agenda;
