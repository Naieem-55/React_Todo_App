import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import Home from './Components/Home';

const App = () => {
    return (
        <div>
            <header>
                <h1>Todo App</h1>
            </header>
            <main>
                <Home/>
            </main>
            <footer>
                <p className="left">Developed with &hearts;  Naieem Islam</p>
            </footer>
        </div>
    );
};

export default App;
