import React from 'react';
import Student from './components/student';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                MD2 React app om te oefenen
                <Student
                    name="Berend"
                    age="34"
                />
                <Student />
                <Student />
                <Student />
                <Student />
            </div>
        );
    }

}

export default App;