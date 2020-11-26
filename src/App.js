import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar />
            <Route path="/profile" render={() => <Profile /> } />
            <Route path="/dialogs" render={() => <DialogsContainer  />} />
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/friends" render={() => <Friends/>} />
        </div>
    );
}

export default App;
