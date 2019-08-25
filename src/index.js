import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter'
import './style/style.css'
class App extends React.Component {
    
    render() {

        return (
            <div class='container'>
                <AppRouter />
            </div>
        )

    }
}

ReactDOM.render(<App />, document.getElementById('root'));
