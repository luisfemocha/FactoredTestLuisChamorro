import React, { useState } from 'react';

import './App.css';
import Login from "./components/Login.tsx"
import Profile from "./components/Profile.tsx";
import NotFound from "./components/NotFound.tsx"
import Validation from "./components/Validation"

const App = () => {
    const [view, setView] = useState("login");
    const [user, setUser] = useState({})

    function home(){
        setView("login");
    }

    async function showProfile (id) {
        console.log(id)
        await Validation(id).then(setUser);
        setView('read');
    }

    //console.log(Validation(1))
    const tab = () => {
        switch(view){
            case 'read':
                return <Profile
                        employee={user}
                        onSignOff={() => {
                            home();
                        }}
                    />
            case 'login':
                return <Login
                        onLogin={(id) => {showProfile(id)}}
                        /* onSignUp={() => {}} // registro */
                    />
            default:
                return <NotFound/>
        }
    }

    return (
        <>
            {tab()}
        </>
    );
}

export default App;
