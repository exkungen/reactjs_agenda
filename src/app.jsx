import React from 'react';
import Student from './components/student';
import Agenda from './components/agenda';
import Button from './components/button';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.students = [
            { name : "Bob", age : 17 },
            { name : "Bob2", age : 18 },
            { name : "Bob3", age : 19 },
            { name : "Bob4", age : 20 },
            { name : "Bob5", age : 33 }
        ];

    }

    renderStudent(currentStudent, i){
        return (
            <Student
                name={currentStudent.name}
                age={currentStudent.age}
            />
        );
    }

    render() {
        return (
            <div className="app">
                MD2 React app om te oefenen

                <Agenda
                    day="Monday"
                    arrangement="slapen"
                    time="06:00"
                />
                <Agenda
                    day="Monday"
                    arrangement="opstaan"
                    time="07:00"
                />
                <Agenda
                    day="Monday"
                    arrangement="ontbijten"
                    time="07:40"
                />
                <Agenda
                    day="Monday"
                    arrangement="douchen"
                    time="08:10"
                />
                <Agenda
                    day="Monday"
                    arrangement="bus pakken"
                    time="08:45"
                />
                <Agenda
                    day="Monday"
                    arrangement="school"
                    time="09:30"
                />

                <Agenda
                    day="Monday"
                    arrangement="naar huis"
                    time="18:00"
                />


<Button />

                <Button />




                <Student />
                <Student />
                <Student
                    name="Bob"
                />
                <Student />
                Maar ik wil er ook een aantal in een loop renderen:
                {this.students.map(this.renderStudent)}

            </div>
        );
    }

}
export default App;