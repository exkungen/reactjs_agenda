import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Friday extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="friday">
                <div className="friday__day">
                    {this.props.day}
                </div>
                <div className="friday__time">
                    {this.props.time}
                </div>
                <div className="friday__arrangement">
                    {this.props.arrangement}
                </div>
            </div>
        );
    }

}
export default Friday;
