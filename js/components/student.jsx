import React from 'react';

/**
 * Teacher component
 * @param props
 * @returns {XML}
 */
class Student extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick(){
        this.props.onSelect();
    }

    render() {
        return (
            <div
                className="student"
                onClick={() => this.onClick()}
            >
                <div className="student__name">
                    {this.props.name}
                </div>
                <div className="student__age">
                    {this.props.age}
                </div>
                <div className="student__delete">
                    x
                </div>
            </div>
        );
    }

}

export default Student;