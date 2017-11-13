import React from 'react';
import Student from './components/student';
import Agenda from './components/agenda';

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





            </div>
        );
    }

}

export default App;