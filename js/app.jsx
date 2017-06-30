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

        this.state = {
            title : 'MD2 React',
            students : [
                { name : 'Bob', age : 18 },
                { name : 'Bob 2', age : 13 },
                { name : 'Bob 3', age : 21 },
                { name : 'Bob 4', age : 32 }
            ]
        };
    }

    changeTitle() {
        this.setState({
                          title : 'test'
                      });
    }

    render() {
        return (
            <div className="app">
                {this.state.title}<br />
                Er zijn nu {this.state.students.length} leerlingen
                {this.state.students.map(student => (
                    <Student
                        name={student.name}
                        age={student.age}
                        onSelect={() => console.log('ik zie dat er geklikt wordt vanuit app.jsx')}
                    />
                ))}
            </div>
        );
    }

}

export default App;