import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <NavbarContainer />
            <Route path="/profile" render={() => <ProfileContainer /> } />
            <Route path="/dialogs" render={() => <DialogsContainer  />} />
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/friends" render={() => <Friends/>} />
            <Route path="/users" render={() => <UsersContainer/>} />
        </div>
    );
}

export default App;
